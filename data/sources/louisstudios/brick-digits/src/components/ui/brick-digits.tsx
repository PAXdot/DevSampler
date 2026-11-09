"use client"

import * as React from "react"

/* -------------------------------------------------------------------------------------------- */
/* Geometry. Everything is measured in brick heights: one brick is about 2 wide and 1 tall,    */
/* with a narrow gap between rows and columns. A numeral is 3 columns by 8 rows of bricks.     */
/* -------------------------------------------------------------------------------------------- */

const GAP = 0.1835
const BW = 2.02
const PX = 2.19
const PY = 1 + GAP
const NW = 2 * PX + BW
const NH = 8 + 7 * GAP
/** Space between neighbouring numerals when the value has several characters. */
const TRACK = 1.4
/** A leading edge (one moving away from its brick) runs this many times ahead of the trailing edge. */
const LEAD = 2.1
/** Fraction of the tween at which the corner code label flips to the new glyph. */
const LABEL_AT = 0.46
/** Share of the step interval the tween itself takes. */
const TWEEN_SHARE = 0.98

const DEFAULT_SEQUENCE = ".|123454321|"
const LONG_NAME = "LOUIS STUDIOS NUMERAL"
const SHORT_NAME = "LS NUMERAL"
const FONT =
  'ui-monospace, "SF Mono", SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Cascadia Mono", Consolas, monospace'

/** Columns filled in each of the 8 rows, top to bottom. 0 is left, 1 centre, 2 right. */
const GLYPHS: Record<string, number[][]> = {
  "0": [[1], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [1]],
  "1": [[1], [0, 1], [1], [1], [1], [1], [1], [0, 1, 2]],
  "2": [[1], [0, 2], [2], [2], [1], [0], [0], [0, 1, 2]],
  "3": [[1], [0, 2], [2], [1], [2], [2], [0, 2], [1]],
  "4": [[0, 2], [0, 2], [0, 2], [0, 2], [1, 2], [2], [2], [2]],
  "5": [[0, 1, 2], [0], [0], [1, 2], [2], [2], [0, 2], [1]],
  "6": [[1], [0, 2], [0], [0, 1], [0, 2], [0, 2], [0, 2], [1]],
  "7": [[0, 1, 2], [2], [2], [1], [1], [1], [1], [1]],
  "8": [[1], [0, 2], [0, 2], [1], [0, 2], [0, 2], [0, 2], [1]],
  "9": [[1], [0, 2], [0, 2], [0, 2], [1, 2], [2], [0, 2], [1]],
  "|": [[1], [1], [1], [1], [1], [1], [1], [1]],
  " ": [[], [], [], [], [], [], [], []],
}

/* -------------------------------------------------------------------------------------------- */
/* Public props                                                                                  */
/* -------------------------------------------------------------------------------------------- */

export interface BrickDigitsProps {
  /**
   * Controlled value. A digit, a number or a string of digits ("2025" sets four numerals side by
   * side, each morphing on its own). When set, the `sequence` loop stops and every change to the
   * value morphs from what is on screen. "." is the single brick dot, "|" a plain stem and " " an
   * empty slot. Leave it out to play `sequence`.
   */
  value?: string | number
  /**
   * The loop played when `value` is not set. A string plays one character per step; an array plays
   * one entry per step, so ["2024", "2025"] morphs between whole years. Default ".|123454321|":
   * a dot that stretches into a stem, counts 1 to 5 and back, and folds into the dot again.
   */
  sequence?: string | string[]
  /** Milliseconds per step, morph included, for the loop and for `value` changes. The dot holds
   * 0.4 of a step longer. Default 1090, the specimen's pace. */
  interval?: number
  /** Brick and label colour, any CSS colour. Default "#000000". */
  color?: string
  /** Backdrop colour painted behind the numerals, any CSS colour. Default "#a1bdd1", the specimen steel blue. */
  background?: string
  /**
   * Corner labels. true shows the typeface name top left ("LOUIS STUDIOS NUMERAL", or "LS NUMERAL"
   * when space is tight) and the Unicode code point top right. A string replaces the top left text.
   * false hides both. Default true.
   */
  labels?: boolean | string
  /**
   * Numeral height as a fraction of the component's height, 0.2 to 1. Wide values shrink to fit the
   * width. Default 0.767, the specimen framing.
   */
  size?: number
  /**
   * Largest per-row delay in milliseconds. Each row starts its morph a little early or late so some
   * rows lead and others lag. 0 moves every row together. Steps the specimen shows (dot, stem and
   * 1 to 5, up or down) replay its own traced row timing and ignore this. Default 100.
   */
  stagger?: number
  /** Extra class names for the outer element. */
  className?: string
  /** Extra inline styles for the outer element. Width and height default to 100% of the parent. */
  style?: React.CSSProperties
}

/* -------------------------------------------------------------------------------------------- */
/* Morph engine                                                                                  */
/* -------------------------------------------------------------------------------------------- */

type Seg = [number, number]
/** One brick moving from [a0, a1] to [b0, b1] (forward direction). */
interface Pair {
  a0: number
  a1: number
  b0: number
  b1: number
}
interface RowAnim {
  pairs: Pair[]
  start: number
  rev: boolean
  final: Seg[]
}
interface VAnim {
  from: number
  to: number
  start: number
}
interface Slot {
  ch: string
  rows: RowAnim[]
  v: VAnim
  dur: number
  prevLabel: string
  nextLabel: string
  labelAt: number
  /** A recorded step in progress: the track key, played backwards when stepping down. */
  rec: { key: string; rev: boolean; start: number; span: number } | null
}

const quart = (u: number) =>
  u <= 0 ? 0 : u >= 1 ? 1 : u < 0.5 ? 8 * u * u * u * u : 1 - Math.pow(-2 * u + 2, 4) / 2
const leadCurve = (u: number) => Math.min(1, LEAD * quart(u))
const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)

const colX = (c: number) => c * PX

function layoutOf(ch: string): Seg[][] {
  const g = GLYPHS[ch === "." ? "|" : ch] ?? GLYPHS[" "]
  return g.map((row) => row.map((c) => [colX(c), colX(c) + BW] as Seg))
}

/** Sort order used to pick the motion direction: stepping down plays the step up in reverse. */
function rank(ch: string): number {
  if (ch === ".") return -3
  if (ch === "|") return -2
  if (ch >= "0" && ch <= "9") return ch.charCodeAt(0) - 48
  return -1
}

function codeOf(ch: string): string {
  if (ch === "." || ch === "|") return "0030"
  return ch.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")
}

/**
 * Per-row start offsets (0 to 1, times `stagger`) measured from the specimen for the steps it
 * shows. Stepping down reuses the step up, mirrored in time. Other steps get a hashed pattern.
 */
const ROW_LAG: Record<string, Array<number | undefined>> = {
  "|1": [0, 0, 0, 0, 0, 0, 0, 0.93],
  "12": [0, 0.03, 0.33, 0.67, 0, 0, 0.67, 0],
  "23": [0, 0, 0, 0.73, 0.07, 0.07, 0.67, 0],
  "34": [0, 0, 0, 0.67, 0.1, 0, 0.1, 0.03],
  "45": [0.17, 0.17, 0.17, 0.77, 0, 0, 0.03, 0.1],
}

function rowLags(from: string, to: string, seed: number): number[] {
  const known = ROW_LAG[from + to]
  if (known) return known.map((v) => v ?? 0)
  return Array.from({ length: 8 }, (_, row) => {
    const h = hash01(seed * 131 + from.charCodeAt(0) * 17 + to.charCodeAt(0), row)
    return h < 0.3 ? 0.62 + h : (h - 0.3) * 0.25
  })
}

/* -------------------------------------------------------------------------------------------- */
/* Recorded steps. For the steps the specimen shows (dot to stem, stem to 1, and 1 up to 5),     */
/* every row's bricks were traced from each specimen frame through the step, so the           */
/* in-between frames, the row stagger and every split and merge match it. Stepping down plays   */
/* the step up backwards, exactly as the specimen does. Values are 2 base64 characters each, in */
/* 1/256 brick heights: 4 characters per brick (left, right), bricks back to back, samples      */
/* separated by commas, one sample per specimen frame (29.97 per second, 32.67 per step). "o" is */
/* where the first sample sits, in frames, relative to the step start. "v" traces the stem's    */
/* bricks vertically for the dot unfolding.                                                     */
/* -------------------------------------------------------------------------------------------- */

const REC_DATA: Record<string, { o: number; v?: string; r?: Record<number, string> }> = {
  ".|": { o: -0.9998, v: "QoUr,QoUr,QoUr,QoUr,QoUr,QnUs,QjUw,QbU4,QPVD,P_VT,PqVp,POWF,OpWp,N6XY,M8YV,LpZn,Jzbd,G6eU,Cdiv,AAlL,AAEnEvJXJfOGONW-XDbsbygdgjlL,AAEbEvJLJeN6ONW8XPbrb_gagvlJ,AAETEvJDJeNyONW8XXbrcHgag3lJ,AAEOEvI9JfNtONW-XcbscMgcg8lL,AAELEvI6JfNqONSgSsW-XgbscPgcg_lL,AAEIEvI3JeNnONScSwW8XibrcSgahBlJ,AAEGEvI1JeNlONSYSzW8XkbrcUgahElJ,AAEEEvIvJeNeONSWS2W8XrbrcagahJlJ,AAEAEvIvJeNeONSUS4W8XrbrcagahJlJ,AAEAEvIvJeNeONSNS8W8XrbrcagahJlJ,AAEAEvIvJeNeONSNS8W8XrbrcagahJlJ,AAEAEvIvJeNeONSNS8W8XrbrcagahJlJ,AAEAEvIvJeNeONSNS8W8XrbrcagahJlJ,AAEAEvIvJeNeONSNS8W8XrbrcagahJlJ,AAEAEvIvJeNeONSNS8W8XrbrcagahJlJ" },
  "|1": { o: -0.6665, r: { 1: "IxQ2,IxQ2,IwQ2,ItQ2,IpQ2,IjQ2,IbQ2,IQQ2,IAQ2,HtQ2,HUQ2,G0Q2,GIQ2,FKQ2,DpQ2,BSQ2,AAQ2,AAQ2,AAQ2,AAQ2,AAQ2,AAQ2,AAQ1,AAIlIxQ1,AAIcIxQ2,AAIUIxQ2,AAIPIxQ2,AAIKIxQ2,AAIHIxQ2,AAIFIxQ2,AAIFIxQ2,AAIFIxQ2,AAIFIxQ2,AAIFIxQ2,AAIFIxQ2", 7: "IxQ2,IxQ2,IxQ2,IxQ2,IwQ2,IuQ2,IpQ1,IjQ4,IbQ8,IQRC,IARK,HtRV,HURl,G0R4,GISQ,FKSx,DpTd,BSUb,AAV8,AAYT,AAZl,AAZm,AAZm,AAZm,AAZl,AAIlIxZl,AAIcIxZl,AAIUIxQ1RAZl,AAIPIxQ2RJZm,AAIKIxQ2RRZm,AAIHIxQ2RWZm,AAIFIxQ2RbZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm" } },
  "12": { o: -0.3332, r: { 1: "AAIFIxQ2,AAIFIxQ2,AAIFIxQ1,AAIFIxQ4,AAIFI0Q8,AAIFI3RC,AAIFI8RK,AAIFJBRV,AAIFJJRl,AAIFJSR4,AAIFJfSQ,AAIFJvSx,AAIFKFTd,AAIFKkUb,AAIFLUV8,AAIFMgYT,AAIFNIZl,AAIFNyZm,AAIFO9Zm,AAIFPuZm,AAIFQNZm,AAIFQjZm,AAIFQzZm,AAIFRAZm,AAIFRJZm,AAIFRRZm,AAIFRWZm,AAIFRbZm,AAIFReZm,AAIFRhZm,AAIFRhZm,AAIFRhZm,AAIFRhZm,AAIFRhZm", 2: "IxQ2,IxQ2,IxQ2,IxQ1,IyQ4,I0Q8,I4RC,I8RK,JBRV,JJRl,JSR4,JfSR,JvSx,KFTd,KkUb,LVV8,MgYT,NJZl,NyZm,O9Zm,PuZm,QNZm,QjZm,QzZm,RAZm,RJZm,RRZm,RWZm,RbZm,ReZm,RhZm,RhZm,RhZm,RhZm", 3: "IxQ2,IxQ2,IxQ2,IxQ2,IxQ1,IyQ4,I0Q8,I3RC,I8RK,JBRV,JJRl,JSR4,JfSQ,JvSx,KFTd,KkUb,LUV8,MgYT,NJZl,NyZm,O9Zm,PuZm,QNZm,QjZm,QzZm,RAZm,RJZm,RRZm,RWZm,RbZm,ReZm,RhZm,RhZm,RhZm", 5: "IxQ2,IxQ2,IwQ2,ItQ2,IpQx,IjQu,IcQp,IQQk,IBQc,HtQT,HUQG,G0P2,GIPg,FKPB,DpOQ,BSNF,AAMc,AALz,AAKn,AAJ3,AAJY,AAJC,AAIy,AAIl,AAIc,AAIU,AAIP,AAIK,AAIH,AAIG,AAIE,AAIF,AAIF,AAIF", 6: "IxQ2,IxQ2,IxQ2,IxQ2,IwQ2,IuQz,IpQx,IjQu,IbQp,IQQk,IBQc,HtQT,HUQG,G0P2,GIPg,FKPB,DpOR,BSNF,AAMc,AALz,AAKo,AAJ3,AAJY,AAJC,AAIy,AAIl,AAIc,AAIU,AAIP,AAIK,AAIH,AAIF,AAIF,AAIF", 7: "AAIFIxQ2RhZm,AAIFIxQ2RbZm,AAIFIxQ2ReZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm" } },
  "23": { o: -0.9999, r: { 3: "RhZm,RhZm,RhZm,RhZm,RhZm,RhZm,ReZm,RbZi,RUZf,RMZa,RAZV,QyZN,QeZD,QFY3,PlYm,O5YR,N7Xy,MZXB,KDV2,IwVM,IxUj,IxTY,IxSo,IxSI,IxRz,IxRi,IxRW,IxRM,IxRF,IxQ_,IxQ7,IxQ4,IxQ2,IxQ2,IxQ2", 4: "IxQ2,IxQ2,IxQ2,IxQ1,IyQ4,I0Q8,I3RC,I8RK,JBRV,JJRl,JSR4,JfSR,JvSx,KFTd,KkUb,LVV8,MgYT,NIZl,NyZm,O9Zm,PuZm,QNZm,QjZm,QzZm,RAZm,RJZm,RRZm,RWZm,RbZm,ReZm,RhZm,RhZm,RhZm,RhZm,RhZm", 5: "AAIF,AAIF,AAIF,ABIF,ADIK,AHIS,ANIf,AWIv,AhJG,AwJk,BDKK,BcK8,B8L9,CoNV,DnPR,FISU,HeXA,IxZl,KDZm,MZZm,N7Zm,O5Zm,PlZm,QFZm,QeZm,QyZm,RAZm,RMZm,RUZm,RbZm,ReZm,RhZm,RhZm,RhZm,RhZm", 6: "AAIF,AAIF,AAIF,AAIF,AAIE,AAIF,AAIK,AAIS,AAIe,AAIv,AAJG,AAJk,AAKL,AAK8,AAL9,AANV,AAPR,AASU,AAXA,AAIDIxZl,AAIFKDZm,AAIFMZZm,AAIFN7Zm,AAIFO5Zm,AAIFPlZm,AAIFQGZm,AAIFQeZm,AAIFQyZm,AAIFRAZm,AAIFRMZm,AAIFRUZm,AAIFRbZm,AAIFRfZm,AAIFRhZm,AAIFRhZm", 7: "AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIEIxQ2RhZm,ABIHIxQ2ReZk,ADILIxQ2RbZi,AHIRIxQ2RUZf,AKIZIxQ2RMZa,AQIlIwQ1RAZV,AYZN,AhZD,AuY3,A_Yn,BUYR,BzXy,CkXB,DwV2,EZVM,FCUj,GNTY,G9So,HdSJ,HzRy,ICRi,IPRW,IZRM,IgRF,ImQ_,IqQ7,ItQ4,IvQ2,IxQ2,IxQ2,IxQ2,IxQ2" } },
  "34": { o: -0.6666, r: { 0: "IxQ2,IxQ2,IxQ2,IwQ1,ItQ4,IqQ8,IjRC,IbRK,IQRW,IBRl,HtR4,HUSQ,G0Sx,GITd,FKUb,DpV8,BSYT,AAMcNJZl,AALzNyZm,AAKoO9Zm,AAJ3PuZm,AAJYQNZm,AAJCQjZm,AAIyQzZm,AAIlQ_Zm,AAIcRJZm,AAIURSZm,AAIORWZm,AAIKRbZm,AAIHReZm,AAIFRhZm,AAIFRhZm,AAIFRhZm,AAIFRhZm,AAIFRhZm", 2: "RhZm,RhZm,RhZm,RgZm,RbZm,RTZm,RHZm,Q2Zm,QgZm,QBZm,PbZm,OqZm,NoZm,MQZm,KUZm,HRZm,ClZl,AAQ1RiZl,AAPiRhZm,AANLRhZm,AALqRhZm,AAKsRhZm,AAKARhZm,AAJgRhZm,AAJHRhZm,AAI0RhZm,AAIlRhZm,AAIZRhZm,AAIRRhZm,AAILRhZm,AAIHRhZm,AAIERhZm,AAIFRhZm,AAIFRhZm,AAIFRhZm", 3: "IxQ2,IxQ2,IxQ2,IxQ2,IxQ2,IwQ1,ItQ4,IpQ8,IjRC,IbRK,IQRV,IBRl,HtR4,HUSR,G0Sx,GITd,FKUb,DpV8,BSYS,AAZl,AAZl,AAKoNBZl,AAJ3OXZm,AAJYPNZm,AAJCP0Zm,AAIyQQZm,AAImQmZm,AAIcQ3Zm,AAIUREZm,AAIPROZm,AAIKRWZm,AAIHRbZm,AAIFRfZm,AAIFRhZm,AAIFRhZm", 4: "RhZm,RhZm,RhZm,RhZm,RfZm,RaZm,RVZm,RMZm,RAZm,QyZm,QeZm,QGZm,PlZm,O5Zm,N7Zm,MZZm,KEZm,IxZm,IxZm,IxZm,IxZm,IxZm,IxZm,IxZl,IxRWRiZl,IxRMRhZm,IxRFRhZm,IxQ_RhZm,IxQ7RhZm,IxQ4RhZm,IxQ2RhZm,IxQ2RhZm,IxQ2RhZm,IxQ2RhZm,IxQ2RhZm", 6: "AAIFRhZm,AAIFRhZm,AAIDRfZm,ABIFRhZm,ADIKRhZm,AHISRhZm,ANIeRhZm,AWIvRhZm,AhJGRhZm,AwJkRhZm,BDKKRhZm,BcK7RhZm,B8L9RhZm,CoNVRhZm,DnPRRiZl,FIZl,HeZm,IwZm,KDZm,MaZm,N7Zm,O5Zm,PlZm,QGZm,QeZm,QxZm,RAZm,RMZm,RVZm,RaZm,ReZm,RhZm,RhZm,RhZm,RhZm", 7: "IxQ2,IxQ2,IxQ2,IxQ1,IyQ4,I0Q8,I3RC,I8RK,JBRW,JJRl,JSR4,JfSR,JvSx,KFTd,KkUb,LUV8,MgYT,NJZl,NyZm,O9Zm,PuZm,QNZm,QjZm,QzZm,RAZm,RJZm,RRZm,RXZm,RbZm,ReZm,RhZm,RhZm,RhZm,RhZm,RhZm" } },
  "45": { o: -0.3333, r: { 0: "AAIFRhZm,AAIFRhZm,AAIFRhZm,AAIERhZm,AAIGRhZm,AAILRhZm,AAIRRhZm,AAIZRhZm,AAIlRhZm,AAIzRhZm,AAJHRhZm,AAJfRhZm,AAKARhZm,AAKsRhZm,AALqRhZm,AANMRhZm,AAPiRhZm,AAQ0RhZm,AAQ2RhZm,AAQ2RhZm,AAQ2RhZm,AAQ2RhZm,AAQ2RhZm,AAQ1RiZl,AAIDIPQ1RiZl,AAIFIZQ2RhZm,AAIFIgQ2RhZm,AAIFImQ2RhZm,AAIFIqQ2RhZm,AAIFItQ2RhZm,AAIFIvQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm,AAIFIxQ2RhZm", 1: "AAIFRhZm,AAIFRhZm,AAIFRhZm,AAIFRgZk,AAIFRbZi,AAIFRTZe,AAIFRHZY,AAIFQ2ZP,AAIFQfZE,AAIFQBY1,AAIFPbYi,AAIFOqYJ,AAIFNoXo,AAIFMQW9,AAIDKUV-,AAUd,AASH,AAQ1,AAPi,AANM,AALq,AAKs,AAKA,AAJf,AAJH,AAIz,AAIl,AAIZ,AAIR,AAIK,AAIH,AAIE,AAIF,AAIF", 2: "AAIFRhZm,AAIFRhZm,AAIFRiZm,AAIFRgZk,AAIFRbZi,AAIFRTZe,AAIFRIZY,AAIFQ2ZP,AAIFQfZE,AAIFQBY1,AAIFPbYi,AAIFOqYK,AAIFNoXo,AAIFMQW9,AAIDKUV-,AAUd,AASH,AAQ1,AAPi,AANM,AALq,AAKs,AAKA,AAJg,AAJH,AAIz,AAIl,AAIZ,AAIR,AAIK,AAIH,AAIE,AAIF,AAIF", 3: "AAIFRhZm,AAIFRhZm,AAIFRfZm,AAIFRhZm,AAIFRhZm,AAIERhZm,AAIHRhZm,ADIKRhZm,AGIRRhZm,ALIZRhZm,AQIlRhZm,AYIzRhZm,AiJHRhZm,AuJgRhZm,A_KARhZm,BUKsRhZm,BzLqRhZm,CkNMRhZm,DvPiRhZm,EZQ0RhZm,FCQ2RhZm,GNQ2RhZm,G9Q2RhZm,HdQ2RhZm,HzQ2RhZm,IDQ2RhZm,IPQ2RhZm,IZQ2RhZm,IgQ2RhZm,ImQ2RhZm,IqQ2RhZm,ItQ2RhZm,IvQ2RhZm,IxQ2RhZm", 4: "IxQ2RhZm,IxQ2RhZm,IxQ2RhZm,IxQ1RhZm,IyQ4RhZm,I1Q8RhZm,I3RCRhZm,I8RKRhZm,JBRVRiZl,JJZl,JSZm,JfZm,JvZm,KFZm,KkZm,LVZm,MgZm,NJZm,NyZm,O9Zm,PuZm,QNZm,QjZm,QzZm,RAZm,RJZm,RRZm,RWZm,RbZm,ReZm,RhZm,RhZm,RhZm,RhZm", 6: "RhZm,RhZm,RhZm,RgZm,RbZm,RTZm,RHZm,Q2Zm,QfZm,QCZm,PbZm,OpZm,NoZm,MQZm,KUZm,HRZm,ClZl,AAQ1RiZl,AAPiRhZm,AANMRhZm,AALqRhZm,AAKtRhZm,AAKARhZm,AAJgRhZm,AAJHRhZm,AAIzRhZm,AAIlRhZm,AAIZRhZm,AAIRRhZm,AAILRhZm,AAIHRhZm,AAIERhZm,AAIFRhZm,AAIFRhZm", 7: "RhZm,RhZm,RhZm,RhZm,ReZm,RbZi,RUZf,RMZa,RAZV,QyZN,QeZD,QGY3,PlYn,O5YR,N7Xy,MaXB,KDV2,IwVN,IxUj,IxTY,IxSn,IxSI,IxRy,IxRj,IxRW,IxRM,IxRF,IxQ_,IxQ7,IxQ4,IxQ2,IxQ2,IxQ2,IxQ2" } },
}

/** Where the code label flips, as a fraction of the step: [stepping up, stepping down]. */
const REC_LABEL: Record<string, [number, number]> = {
  "|1": [0.393, 0.668],
  "12": [0.464, 0.505],
  "23": [0.474, 0.465],
  "34": [0.485, 0.485],
  "45": [0.495, 0.505],
}

/** Specimen frames per step: 29.97 fps at 1090 ms per step. */
const REC_FRAMES = 32.667

interface Track {
  o: number
  ys?: Seg[][]
  rows?: Map<number, Seg[][]>
}

const B64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
let tracksCache: Record<string, Track> | null = null

function decodeSamples(str: string): Seg[][] {
  const val = (t: string, i: number) => (B64.indexOf(t[i]) * 64 + B64.indexOf(t[i + 1])) / 256
  return str.split(",").map((t) => {
    const runs: Seg[] = []
    for (let i = 0; i + 3 < t.length; i += 4) runs.push([val(t, i), val(t, i + 2)])
    return runs
  })
}

function tracks(): Record<string, Track> {
  if (tracksCache) return tracksCache
  const out: Record<string, Track> = {}
  for (const key of Object.keys(REC_DATA)) {
    const d = REC_DATA[key]
    const tr: Track = { o: d.o }
    if (d.v) tr.ys = decodeSamples(d.v)
    if (d.r) {
      tr.rows = new Map()
      for (const row of Object.keys(d.r)) tr.rows.set(Number(row), decodeSamples(d.r[Number(row)]))
    }
    out[key] = tr
  }
  tracksCache = out
  return out
}

/** Bricks of a recorded track at progress p (0 to 1), blending neighbouring samples when they line up. */
function sampleAt(samples: Seg[][], p: number, o: number): Seg[] {
  const q = Math.min(samples.length - 1, Math.max(0, clamp01(p) * REC_FRAMES - o))
  const j = Math.min(samples.length - 1, Math.floor(q))
  const t = q - j
  const a = samples[j]
  const b = samples[Math.min(samples.length - 1, j + 1)]
  if (t < 1e-6 || a === b) return a
  if (a.length !== b.length) return t < 0.5 ? a : b
  return a.map((s, i) => [s[0] + (b[i][0] - s[0]) * t, s[1] + (b[i][1] - s[1]) * t] as Seg)
}

function hash01(a: number, b: number): number {
  let h = (Math.imul(a | 0, 0x9e3779b1) ^ Math.imul((b | 0) + 0x7f4a7c15, 0x85ebca6b)) >>> 0
  h = Math.imul(h ^ (h >>> 15), 0x2c1b3c6d) >>> 0
  h = Math.imul(h ^ (h >>> 12), 0x297a2d39) >>> 0
  h = (h ^ (h >>> 15)) >>> 0
  return h / 4294967296
}

/** Monotone many-to-many matching of bricks in one row (dynamic time warping on brick centres). */
function plan(src: Seg[], dst: Seg[]): Pair[] {
  if (!src.length && !dst.length) return []
  if (!src.length) return dst.map(([b0, b1]) => ({ a0: (b0 + b1) / 2, a1: (b0 + b1) / 2, b0, b1 }))
  if (!dst.length) return src.map(([a0, a1]) => ({ a0, a1, b0: (a0 + a1) / 2, b1: (a0 + a1) / 2 }))
  const s = [...src].sort((p, q) => p[0] + p[1] - q[0] - q[1])
  const d = [...dst].sort((p, q) => p[0] + p[1] - q[0] - q[1])
  const n = s.length
  const m = d.length
  const cost = (i: number, j: number) => Math.abs((s[i][0] + s[i][1]) / 2 - (d[j][0] + d[j][1]) / 2)
  const D: number[][] = []
  for (let i = 0; i < n; i++) {
    D.push([])
    for (let j = 0; j < m; j++) {
      let best = 0
      if (i > 0 || j > 0) {
        best = Infinity
        if (i > 0 && j > 0) best = Math.min(best, D[i - 1][j - 1])
        if (i > 0) best = Math.min(best, D[i - 1][j])
        if (j > 0) best = Math.min(best, D[i][j - 1])
      }
      D[i].push(cost(i, j) + best)
    }
  }
  const out: Pair[] = []
  let i = n - 1
  let j = m - 1
  for (;;) {
    out.push({ a0: s[i][0], a1: s[i][1], b0: d[j][0], b1: d[j][1] })
    if (i === 0 && j === 0) break
    const diag = i > 0 && j > 0 ? D[i - 1][j - 1] : Infinity
    const up = i > 0 ? D[i - 1][j] : Infinity
    const left = j > 0 ? D[i][j - 1] : Infinity
    const best = Math.min(diag, up, left)
    if (diag <= best + 1e-6) {
      i--
      j--
    } else if (left <= best + 1e-6) j--
    else i--
  }
  return out
}

/** Position of one edge. Edges moving outward lead and land early, edges moving inward trail. */
function edge(a: number, b: number, u: number, outward: boolean) {
  return a + (b - a) * (outward ? leadCurve(u) : quart(u))
}

function evalPair(p: Pair, u: number): Seg {
  return [edge(p.a0, p.b0, u, p.b0 < p.a0), edge(p.a1, p.b1, u, p.b1 > p.a1)]
}

function rowNow(r: RowAnim, clock: number, dur: number): Seg[] {
  const t = dur > 0 ? (clock - r.start) / dur : 1
  if (t >= 1 || !r.pairs.length) return r.final
  const tt = clamp01(t)
  const u = r.rev ? 1 - tt : tt
  return r.pairs.map((p) => evalPair(p, u))
}

function sameSegs(a: Seg[], b: Seg[]) {
  if (a.length !== b.length) return false
  const sa = [...a].sort((p, q) => p[0] - q[0])
  const sb = [...b].sort((p, q) => p[0] - q[0])
  return sa.every((s, i) => Math.abs(s[0] - sb[i][0]) < 1e-3 && Math.abs(s[1] - sb[i][1]) < 1e-3)
}

function dedupe(segs: Seg[]): Seg[] {
  const out: Seg[] = []
  for (const s of segs) {
    if (s[1] - s[0] < 0.01) continue
    if (out.some((o) => Math.abs(o[0] - s[0]) < 0.02 && Math.abs(o[1] - s[1]) < 0.02)) continue
    out.push(s)
  }
  return out
}

function vValue(v: VAnim, clock: number, dur: number): number {
  if (v.from === v.to) return v.to
  const t = dur > 0 ? clamp01((clock - v.start) / dur) : 1
  return v.from < v.to ? t : 1 - t
}

function settledSlot(ch: string): Slot {
  return {
    ch,
    rows: layoutOf(ch).map((final) => ({ pairs: [], start: -1e9, rev: false, final })),
    v: { from: ch === "." ? 0 : 1, to: ch === "." ? 0 : 1, start: -1e9 },
    dur: 0,
    prevLabel: ch,
    nextLabel: ch,
    labelAt: -1e9,
    rec: null,
  }
}

/** Progress of the slot's recorded step, or -1 when none is playing. */
function recTau(slot: Slot, clock: number): number {
  const r = slot.rec
  if (!r) return -1
  const tau = (clock - r.start) / r.span
  return tau >= 1 ? -1 : clamp01(tau)
}

/** The bricks of one row right now, whether the row follows a recorded step or the model. */
function rowSegs(slot: Slot, k: number, clock: number): Seg[] {
  const tau = recTau(slot, clock)
  if (tau >= 0 && slot.rec) {
    const tr = tracks()[slot.rec.key]
    const samples = tr.rows?.get(k)
    if (samples) return sampleAt(samples, slot.rec.rev ? 1 - tau : tau, tr.o)
    return slot.rows[k].final
  }
  return rowNow(slot.rows[k], clock, slot.dur)
}

function retarget(
  slot: Slot,
  ch: string,
  clock: number,
  dur: number,
  stagger: number,
  seed: number,
  span: number,
) {
  const tau = recTau(slot, clock)
  if (ch === slot.ch && tau < 0 && slot.rows.every((r) => !r.pairs.length || (clock - r.start) / Math.max(slot.dur, 1) >= 1))
    return
  const oldDur = slot.dur
  const prog = (start: number) => (oldDur > 0 ? (clock - start) / oldDur : 1)
  const recBusy = tau >= 0 && tau < 0.9
  const settled =
    !recBusy && slot.rows.every((r) => !r.pairs.length || prog(r.start) >= 0.9) && prog(slot.v.start) >= 0.9

  // Steps the specimen shows play back from the trace.
  const recKey = REC_DATA[slot.ch + ch] ? slot.ch + ch : REC_DATA[ch + slot.ch] ? ch + slot.ch : ""
  if (dur > 0 && settled && recKey) {
    const rev = recKey !== slot.ch + ch
    slot.rows = layoutOf(ch).map((final) => ({ pairs: [], start: -1e9, rev: false, final }))
    const vNew = ch === "." ? 0 : 1
    slot.v = { from: vNew, to: vNew, start: -1e9 }
    slot.rec = { key: recKey, rev, start: clock, span }
    slot.prevLabel = clock >= slot.labelAt ? slot.nextLabel : slot.prevLabel
    slot.nextLabel = ch
    slot.labelAt = clock + span * (REC_LABEL[recKey]?.[rev ? 1 : 0] ?? LABEL_AT)
    slot.dur = dur
    slot.ch = ch
    return
  }
  // Interrupted mid-trace: carry on from what is on screen with the model.
  let vFromRec = -1
  if (recBusy && slot.rec) {
    const cur = slot.rows.map((_, k) => dedupe(rowSegs(slot, k, clock)))
    const p = slot.rec.rev ? 1 - tau : tau
    if (tracks()[slot.rec.key].ys) vFromRec = p >= 0.5 ? 1 : 0
    slot.rows = cur.map((final) => ({ pairs: [], start: -1e9, rev: false, final }))
  }
  slot.rec = null
  const reverse = settled && rank(ch) < rank(slot.ch)
  const target = layoutOf(ch)
  const lags = reverse ? rowLags(ch, slot.ch, seed) : rowLags(slot.ch, ch, seed)
  const lagMax = Math.max(...lags)
  slot.rows = slot.rows.map((r, k) => {
    const cur = !r.pairs.length || prog(r.start) >= 0.9 ? r.final : dedupe(rowNow(r, clock, oldDur))
    const tgt = target[k]
    if (sameSegs(cur, tgt)) return { pairs: [], start: -1e9, rev: false, final: tgt }
    // Stepping down mirrors the step up in time, so the rows that lagged now lead.
    const delay = dur > 0 ? stagger * (reverse ? lagMax - lags[k] : lags[k]) : 0
    return { pairs: reverse ? plan(tgt, cur) : plan(cur, tgt), start: clock + delay, rev: reverse, final: tgt }
  })
  const vCur =
    vFromRec >= 0 ? vFromRec : prog(slot.v.start) >= 0.9 ? slot.v.to : vValue(slot.v, clock, oldDur) > 0.5 ? 1 : 0
  const vNew = ch === "." ? 0 : 1
  // The unfold from the dot waits a beat, like the specimen; the fold back starts on the step.
  const vDelay = dur > 0 && vNew > vCur ? dur * 0.055 : 0
  slot.v = vCur === vNew ? { from: vNew, to: vNew, start: -1e9 } : { from: vCur, to: vNew, start: clock + vDelay }
  slot.prevLabel = clock >= slot.labelAt ? slot.nextLabel : slot.prevLabel
  slot.nextLabel = ch
  slot.labelAt = clock + dur * LABEL_AT
  slot.dur = dur
  slot.ch = ch
}

/** Row tops and bottoms for a given stretch value: 0 is the folded dot, 1 the full numeral. */
function rowYs(p: number): Array<[number, number]> {
  const ys: Array<[number, number]> = []
  if (p >= 1) {
    for (let k = 0; k < 8; k++) ys.push([k * PY, k * PY + 1])
    return ys
  }
  // The outer edges race out on an exponential curve and land halfway; then the gaps open.
  const L = (Math.exp(5.5 * clamp01(p / 0.5)) - 1) / (Math.exp(5.5) - 1)
  const top = (NH / 2 - 0.5) * (1 - L)
  const bot = (NH / 2 + 0.5) * (1 - L) + NH * L
  const q = clamp01((p - 0.5) / 0.5)
  const gap = GAP * (1 - Math.pow(1 - q, 4))
  const pitch = (bot - top + gap) / 8
  for (let k = 0; k < 8; k++) ys.push([top + k * pitch, top + k * pitch + pitch - gap])
  return ys
}

function itemsOf(seq: string | string[]): string[] {
  const list = Array.isArray(seq) ? seq.map(String) : [...String(seq)]
  const clean = list.filter((s) => s.length > 0)
  return clean.length ? clean : [...DEFAULT_SEQUENCE]
}

const dwellOf = (item: string, interval: number) => (/^\.+$/.test(item) ? interval * 1.4 : interval)

class Engine {
  slots: Slot[] = []
  clock = 0
  stepIndex = 0
  nextAt = 0
  changes = 0

  setText(text: string, dur: number, stagger: number, seedBase: number, span: number) {
    const chars = [...text]
    // Align right so "9" -> "10" keeps the ones digit in place; new slots unfold from a dot.
    if (chars.length !== this.slots.length) {
      const next: Slot[] = []
      for (let i = 0; i < chars.length; i++) {
        const from = this.slots.length - chars.length + i
        next.push(from >= 0 ? this.slots[from] : settledSlot(dur > 0 ? "." : chars[i]))
      }
      this.slots = next
    }
    this.slots.forEach((s, i) => retarget(s, chars[i], this.clock, dur, stagger, seedBase * 31 + i * 7919, span))
  }

  reset(text: string) {
    this.slots = [...text].map((c) => settledSlot(c))
  }

  busy() {
    return this.slots.some(
      (s) =>
        this.clock < s.labelAt ||
        recTau(s, this.clock) >= 0 ||
        s.rows.some((r) => r.pairs.length && this.clock - r.start < s.dur) ||
        (s.v.from !== s.v.to && this.clock - s.v.start < s.dur),
    )
  }

  label() {
    return this.slots.map((s) => codeOf(this.clock >= s.labelAt ? s.nextLabel : s.prevLabel)).join(" ")
  }
}

/* -------------------------------------------------------------------------------------------- */
/* Component                                                                                     */
/* -------------------------------------------------------------------------------------------- */

export function BrickDigits({
  value = undefined,
  sequence = DEFAULT_SEQUENCE,
  interval = 1090,
  color = "#000000",
  background = "#a1bdd1",
  labels = true,
  size = 0.767,
  stagger = 100,
  className = undefined,
  style = undefined,
}: BrickDigitsProps) {
  const rootRef = React.useRef<HTMLDivElement>(null)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const codeRef = React.useRef<HTMLSpanElement>(null)
  const items = React.useMemo(() => itemsOf(sequence), [Array.isArray(sequence) ? sequence.join("\u0000") : sequence])
  const controlled = value !== undefined && value !== null
  const text = controlled ? String(value) : items[0]

  const props = React.useRef({ items, interval, stagger, size, color, controlled, labels })
  props.current = { items, interval, stagger, size, color, controlled, labels }

  const engineRef = React.useRef<Engine | null>(null)
  if (!engineRef.current) {
    engineRef.current = new Engine()
    engineRef.current.reset(text)
  }

  const [box, setBox] = React.useState({ w: 0, h: 0 })
  const [reduced, setReduced] = React.useState(
    () => typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
  )
  const kickRef = React.useRef<() => void>(() => {})

  const tweenMs = (reducedNow: boolean) =>
    reducedNow ? 0 : Math.max(120, props.current.interval * TWEEN_SHARE)

  // Main loop: owns the canvas, the clock, resize, visibility and reduced motion.
  React.useEffect(() => {
    const root = rootRef.current
    const canvas = canvasRef.current
    const engine = engineRef.current
    if (!root || !canvas || !engine) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const mq = typeof window.matchMedia === "function" ? window.matchMedia("(prefers-reduced-motion: reduce)") : null
    let reducedNow = !!mq?.matches
    setReduced(reducedNow)
    let raf = 0
    let last = -1
    let onScreen = true
    let w = 0
    let h = 0
    let dpr = 1

    const draw = () => {
      const p = props.current
      const W = Math.round(w * dpr)
      const H = Math.round(h * dpr)
      if (canvas.width !== W || canvas.height !== H) {
        canvas.width = W
        canvas.height = H
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, W, H)
      const n = engine.slots.length
      if (n && w > 0 && h > 0) {
        const lab = p.labels !== false
        const m = Math.min(w, h)
        const labelZone = lab ? m * 0.075 : 0
        const units = n * NW + (n - 1) * TRACK
        const s = Math.max(
          0,
          Math.min(
            (Math.min(1, Math.max(0.2, p.size)) * h) / NH,
            (h - 2 * labelZone) / NH,
            (w * (n > 1 ? 0.9 : 0.86)) / units,
          ),
        )
        const ox = (w - units * s) / 2
        const oy = (h - NH * s) / 2
        ctx.fillStyle = p.color
        const X = (u: number, base: number) => Math.round((base + u * s) * dpr)
        for (let i = 0; i < n; i++) {
          const slot = engine.slots[i]
          const bx = ox + i * (NW + TRACK) * s
          const tau = recTau(slot, engine.clock)
          const vTr = tau >= 0 && slot.rec ? tracks()[slot.rec.key] : undefined
          const vTrack = vTr?.ys
          if (vTr && vTrack && slot.rec) {
            // Recorded unfold: the stem's bricks traced top to bottom, seams opening one by one.
            const x0 = X(PX, bx)
            const x1 = X(PX + BW, bx)
            for (const seg of sampleAt(vTrack, slot.rec.rev ? 1 - tau : tau, vTr.o)) {
              const y0 = X(seg[0], oy)
              const y1 = X(seg[1], oy)
              if (y1 > y0) ctx.fillRect(x0, y0, x1 - x0, y1 - y0)
            }
            continue
          }
          const ys = rowYs(vValue(slot.v, engine.clock, slot.dur))
          for (let k = 0; k < 8; k++) {
            const y0 = X(ys[k][0], oy)
            const y1 = X(ys[k][1], oy)
            if (y1 <= y0) continue
            for (const seg of rowSegs(slot, k, engine.clock)) {
              const x0 = X(seg[0], bx)
              const x1 = X(seg[1], bx)
              if (x1 > x0) ctx.fillRect(x0, y0, x1 - x0, y1 - y0)
            }
          }
        }
      }
      const code = "UNICODE " + engine.label()
      if (codeRef.current && codeRef.current.textContent !== code) codeRef.current.textContent = code
    }

    const step = () => {
      const p = props.current
      if (p.controlled || reducedNow) return
      while (engine.clock >= engine.nextAt) {
        engine.stepIndex = (engine.stepIndex + 1) % p.items.length
        const item = p.items[engine.stepIndex]
        // Start the step on its scheduled time, not on the frame that noticed it, so every step
        // lands on the same beat whatever the frame rate.
        const now = engine.clock
        engine.clock = engine.nextAt
        engine.setText(item, tweenMs(false), p.stagger, engine.stepIndex + 1, p.interval)
        engine.clock = now
        engine.nextAt += dwellOf(item, p.interval)
      }
    }

    const frame = (ts: number) => {
      raf = 0
      const dt = last < 0 ? 0 : Math.min(100, Math.max(0, ts - last))
      last = ts
      engine.clock += dt
      step()
      draw()
      schedule()
    }

    const wantsFrames = () =>
      onScreen && !document.hidden && w > 0 && ((!props.current.controlled && !reducedNow) || engine.busy())

    const schedule = () => {
      if (raf) return
      if (wantsFrames()) raf = requestAnimationFrame(frame)
      else last = -1
    }

    const kick = () => {
      draw()
      schedule()
    }
    kickRef.current = kick

    const restartLoop = () => {
      const p = props.current
      engine.clock = 0
      engine.stepIndex = 0
      if (p.controlled) return
      if (reducedNow) {
        engine.reset(p.items.find((it) => /\d/.test(it)) ?? p.items[0])
      } else {
        engine.reset(p.items[0])
        engine.nextAt = dwellOf(p.items[0], p.interval)
      }
    }
    restartLoop()

    const measure = () => {
      const r = root.getBoundingClientRect()
      w = r.width
      h = r.height
      dpr = Math.min(3, window.devicePixelRatio || 1)
      setBox((b) => (Math.abs(b.w - w) < 0.5 && Math.abs(b.h - h) < 0.5 ? b : { w, h }))
      kick()
    }
    measure()
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null
    ro?.observe(root)
    window.addEventListener("resize", measure)

    const io =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver((entries) => {
            onScreen = entries.some((e) => e.isIntersecting)
            kick()
          })
        : null
    io?.observe(root)
    const onVis = () => kick()
    document.addEventListener("visibilitychange", onVis)
    const onMotion = () => {
      reducedNow = !!mq?.matches
      setReduced(reducedNow)
      restartLoop()
      kick()
    }
    mq?.addEventListener?.("change", onMotion)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      raf = 0
      kickRef.current = () => {}
      ro?.disconnect()
      io?.disconnect()
      window.removeEventListener("resize", measure)
      document.removeEventListener("visibilitychange", onVis)
      mq?.removeEventListener?.("change", onMotion)
    }
  }, [])

  // Controlled value: morph from whatever is on screen.
  React.useEffect(() => {
    const engine = engineRef.current
    if (!engine || !controlled) return
    engine.changes++
    engine.setText(text, tweenMs(reduced), stagger, 1000 + engine.changes, Math.max(150, interval))
    kickRef.current()
  }, [controlled, text, reduced])

  // New loop or loop speed: start the loop over.
  React.useEffect(() => {
    const engine = engineRef.current
    if (!engine || controlled) return
    engine.clock = 0
    engine.stepIndex = 0
    engine.reset(reduced ? (items.find((it) => /\d/.test(it)) ?? items[0]) : items[0])
    engine.nextAt = dwellOf(items[0], interval)
    kickRef.current()
  }, [items, interval, controlled, reduced])

  React.useEffect(() => {
    kickRef.current()
  }, [color, size, labels])

  const onClick = () => {
    const engine = engineRef.current
    if (!engine || controlled || reduced) return
    engine.nextAt = engine.clock
    kickRef.current()
  }

  // Corner labels, sized from the component like the specimen (15.5 px on a 728 px wide page).
  const m = Math.min(box.w || 720, box.h || 720)
  const fs = Math.max(9, Math.min(18, m * 0.0213))
  const pad = Math.max(10, m * 0.0345)
  const codeText = "UNICODE " + engineRef.current.label()
  const codeChars = 8 + engineRef.current.slots.length * 5 - 1
  const adv = fs * 0.665
  const fitsLong = (LONG_NAME.length + codeChars + 3) * adv + pad * 2 <= (box.w || 720)
  const name = typeof labels === "string" ? labels : fitsLong ? LONG_NAME : SHORT_NAME
  const ariaValue = controlled ? text : "counting"

  const labelStyle: React.CSSProperties = {
    position: "absolute",
    top: pad * 0.72,
    fontFamily: FONT,
    fontSize: fs,
    lineHeight: 1,
    letterSpacing: "0.065em",
    fontWeight: 400,
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    color,
    pointerEvents: "none",
    fontVariantNumeric: "tabular-nums slashed-zero",
    fontFeatureSettings: '"zero" 1',
  }

  return (
    <div
      ref={rootRef}
      className={className}
      role="img"
      aria-label={`Brick numeral ${ariaValue}`}
      onClick={onClick}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 120,
        overflow: "hidden",
        background,
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
      />
      {labels !== false && (
        <>
          <span aria-hidden="true" style={{ ...labelStyle, left: pad }}>
            {name}
          </span>
          <span ref={codeRef} aria-hidden="true" style={{ ...labelStyle, right: pad - fs * 0.065 }}>
            {codeText}
          </span>
        </>
      )}
    </div>
  )
}

export default BrickDigits
