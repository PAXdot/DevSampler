import * as React from 'react';

/**
 * The 62 characters `React.useId` builds its ids from (tree positions in base 32, the `R`/`r`/`H`
 * markers, and the usual alphabet of an `identifierPrefix`).
 */
const ALNUM = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function digits(reactId: string): string {
  let s = reactId;
  if (s.length >= 2 && ALNUM.indexOf(s[0]) < 0 && ALNUM.indexOf(s[s.length - 1]) < 0) {
    s = s.slice(1, -1);
  }
  let out = '';
  for (let i = 0; i < s.length; i += 1) {
    const at = ALNUM.indexOf(s[i]);
    out += at >= 0 ? String(at + 10) : `9${String(s.charCodeAt(i)).padStart(5, '0')}`;
  }
  return out;
}

/**
 * An id that survives re-renders and is the same on the server and in the browser, so a label, a
 * hint, a Form error or a radio group's `name` keeps pointing at the same thing.
 *
 * Call it unconditionally and before any early return, like every other hook.
 */
export function useStableId(prefix: string): string {
  return `${prefix}-${digits(React.useId())}`;
}
