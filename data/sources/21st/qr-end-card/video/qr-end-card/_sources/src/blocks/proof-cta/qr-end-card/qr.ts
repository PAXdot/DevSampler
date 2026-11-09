// Built with Remotion - https://remotion.pro/license
// A small, exact QR encoder (ISO/IEC 18004): byte mode, error correction L,
// versions 1-5 (single Reed-Solomon block, up to 106 bytes), best mask by the
// standard penalty rules. Structure follows Project Nayuki's QR Code generator (MIT).

const DATA_CODEWORDS = [0, 19, 34, 55, 80, 108];
const ECC_CODEWORDS = [0, 7, 10, 15, 20, 26];
/** Longest text (UTF-8 bytes) one code can hold here. */
export const QR_MAX_BYTES = 106;

function gfMul(x: number, y: number): number {
  let z = 0;
  for (let i = 7; i >= 0; i--) {
    z = (z << 1) ^ ((z >>> 7) * 0x11d);
    z ^= ((y >>> i) & 1) * x;
  }
  return z & 0xff;
}

function rsDivisor(degree: number): number[] {
  const result = new Array<number>(degree).fill(0);
  result[degree - 1] = 1;
  let root = 1;
  for (let i = 0; i < degree; i++) {
    for (let j = 0; j < result.length; j++) {
      result[j] = gfMul(result[j]!, root);
      if (j + 1 < result.length) result[j] = result[j]! ^ result[j + 1]!;
    }
    root = gfMul(root, 0x02);
  }
  return result;
}

function rsRemainder(data: number[], divisor: number[]): number[] {
  const result = divisor.map(() => 0);
  for (const b of data) {
    const factor = b ^ result.shift()!;
    result.push(0);
    divisor.forEach((coef, i) => (result[i] = result[i]! ^ gfMul(coef, factor)));
  }
  return result;
}

const MASKS: ((x: number, y: number) => boolean)[] = [
  (x, y) => (x + y) % 2 === 0,
  (_, y) => y % 2 === 0,
  (x) => x % 3 === 0,
  (x, y) => (x + y) % 3 === 0,
  (x, y) => (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0,
  (x, y) => ((x * y) % 2) + ((x * y) % 3) === 0,
  (x, y) => (((x * y) % 2) + ((x * y) % 3)) % 2 === 0,
  (x, y) => (((x + y) % 2) + ((x * y) % 3)) % 2 === 0,
];

function utf8(text: string): number[] {
  const out: number[] = [];
  for (const ch of text) {
    let c = ch.codePointAt(0)!;
    if (c < 0x80) out.push(c);
    else if (c < 0x800) out.push(0xc0 | (c >> 6), 0x80 | (c & 63));
    else if (c < 0x10000) out.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
    else {
      out.push(0xf0 | (c >> 18), 0x80 | ((c >> 12) & 63), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
    }
  }
  return out;
}

/** Penalty score of a finished matrix (N1 runs, N2 blocks, N3 finder look-alikes, N4 balance). */
function penalty(m: boolean[][]): number {
  const size = m.length;
  let score = 0;
  const line = (get: (i: number) => boolean) => {
    let run = 1;
    for (let i = 1; i <= size; i++) {
      if (i < size && get(i) === get(i - 1)) run++;
      else {
        if (run >= 5) score += 3 + (run - 5);
        run = 1;
      }
    }
    const a = [true, false, true, true, true, false, true, false, false, false, false];
    const b = [...a].reverse();
    for (let i = 0; i + 11 <= size; i++) {
      if (a.every((v, k) => get(i + k) === v)) score += 40;
      if (b.every((v, k) => get(i + k) === v)) score += 40;
    }
  };
  for (let y = 0; y < size; y++) line((x) => m[y]![x]!);
  for (let x = 0; x < size; x++) line((y) => m[y]![x]!);
  for (let y = 0; y < size - 1; y++)
    for (let x = 0; x < size - 1; x++) {
      const c = m[y]![x];
      if (c === m[y]![x + 1] && c === m[y + 1]![x] && c === m[y + 1]![x + 1]) score += 3;
    }
  let dark = 0;
  for (const row of m) for (const v of row) if (v) dark++;
  const total = size * size;
  score += Math.ceil(Math.abs(dark * 20 - total * 10) / total - 1) * 10;
  return score;
}

/**
 * Module matrix (true = dark) for `text`, [row][column], without the quiet zone.
 * Text past QR_MAX_BYTES is cut. `mask` forces a mask pattern (tests).
 */
export function qrMatrix(text: string, mask?: number): boolean[][] {
  const bytes = utf8(text).slice(0, QR_MAX_BYTES);
  let ver = 1;
  while (ver < 5 && 12 + bytes.length * 8 > DATA_CODEWORDS[ver]! * 8) ver++;
  const capacity = DATA_CODEWORDS[ver]! * 8;
  const bits: number[] = [];
  const put = (v: number, n: number) => {
    for (let i = n - 1; i >= 0; i--) bits.push((v >>> i) & 1);
  };
  put(4, 4);
  put(bytes.length, 8);
  for (const b of bytes) put(b, 8);
  put(0, Math.min(4, capacity - bits.length));
  put(0, (8 - (bits.length % 8)) % 8);
  for (let pad = 0xec; bits.length < capacity; pad ^= 0xec ^ 0x11) put(pad, 8);
  const data: number[] = [];
  for (let i = 0; i < bits.length; i += 8) data.push(bits.slice(i, i + 8).reduce((a, b) => (a << 1) | b, 0));
  const codewords = [...data, ...rsRemainder(data, rsDivisor(ECC_CODEWORDS[ver]!))];

  const size = ver * 4 + 17;
  const modules = Array.from({ length: size }, () => new Array<boolean>(size).fill(false));
  const fn = Array.from({ length: size }, () => new Array<boolean>(size).fill(false));
  const setFn = (x: number, y: number, dark: boolean) => {
    modules[y]![x] = dark;
    fn[y]![x] = true;
  };
  const format = (m: number) => {
    const d = (1 << 3) | m; // error correction L
    let rem = d;
    for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
    const v = ((d << 10) | rem) ^ 0x5412;
    const bit = (i: number) => ((v >>> i) & 1) !== 0;
    for (let i = 0; i <= 5; i++) setFn(8, i, bit(i));
    setFn(8, 7, bit(6));
    setFn(8, 8, bit(7));
    setFn(7, 8, bit(8));
    for (let i = 9; i < 15; i++) setFn(14 - i, 8, bit(i));
    for (let i = 0; i < 8; i++) setFn(size - 1 - i, 8, bit(i));
    for (let i = 8; i < 15; i++) setFn(8, size - 15 + i, bit(i));
    setFn(8, size - 8, true);
  };

  // Function patterns: timing, finders, the alignment pattern, reserved format area.
  for (let i = 0; i < size; i++) {
    setFn(6, i, i % 2 === 0);
    setFn(i, 6, i % 2 === 0);
  }
  for (const [cx, cy] of [[3, 3], [size - 4, 3], [3, size - 4]] as const)
    for (let dy = -4; dy <= 4; dy++)
      for (let dx = -4; dx <= 4; dx++) {
        const x = cx + dx;
        const y = cy + dy;
        const dist = Math.max(Math.abs(dx), Math.abs(dy));
        if (x >= 0 && x < size && y >= 0 && y < size) setFn(x, y, dist !== 2 && dist !== 4);
      }
  if (ver > 1) {
    const p = ver * 4 + 10;
    for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) setFn(p + dx, p + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
  }
  format(0);

  // Data in the two-column zigzag.
  let i = 0;
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5;
    for (let vert = 0; vert < size; vert++)
      for (let j = 0; j < 2; j++) {
        const x = right - j;
        const upward = ((right + 1) & 2) === 0;
        const y = upward ? size - 1 - vert : vert;
        if (!fn[y]![x] && i < codewords.length * 8) {
          modules[y]![x] = ((codewords[i >>> 3]! >>> (7 - (i & 7))) & 1) !== 0;
          i++;
        }
      }
  }

  const applyMask = (m: number) => {
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (!fn[y]![x] && MASKS[m]!(x, y)) modules[y]![x] = !modules[y]![x];
  };
  let best = mask ?? 0;
  if (mask === undefined) {
    let min = Infinity;
    for (let m = 0; m < 8; m++) {
      applyMask(m);
      format(m);
      const p = penalty(modules);
      if (p < min) {
        min = p;
        best = m;
      }
      applyMask(m);
    }
  }
  applyMask(best);
  format(best);
  return modules;
}

/** Which of the three 7x7 finder squares a module belongs to (-1 for none). */
export function finderOf(x: number, y: number, size: number): number {
  if (x < 7 && y < 7) return 0;
  if (x >= size - 7 && y < 7) return 1;
  if (x < 7 && y >= size - 7) return 2;
  return -1;
}
