/*
MIT License

Copyright (c) 2026 Isaiah Bjork

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
export type BjorkTone = "dark" | "light";

// Canvas, WebGL and SVG attribute colours. DOM code uses the CSS tokens with these as fallbacks.
export const BJORK_PALETTE = {
  dark: {
    bg: "#050505", stage: "#111111", surface: "#121212", raised: "#161616", active: "#202020",
    border: "#232323", borderStrong: "#343434",
    text: "#ededed", textMedium: "rgba(237,237,237,0.72)", textMuted: "rgba(237,237,237,0.6)",
    textSoft: "rgba(237,237,237,0.5)", textFaint: "rgba(237,237,237,0.22)", hair: "rgba(237,237,237,0.12)",
    accent: "#ec5c13", accentInk: "#ec5c13", accentFill: "#b84a12", accentSoft: "rgba(236,92,19,0.12)", accentMuted: "rgba(236,92,19,0.24)",
    accentFg: "#fff2ea", success: "#4cc38a", warning: "#f2b544", error: "#ff5c4d",
  },
  light: {
    bg: "#f7f5ef", stage: "#f7f5ef", surface: "#fffcf6", raised: "#f5efe3", active: "#efe7d8",
    border: "#eee6db", borderStrong: "#e1d7c8",
    text: "#171717", textMedium: "rgba(23,23,23,0.78)", textMuted: "rgba(23,23,23,0.68)",
    textSoft: "rgba(23,23,23,0.62)", textFaint: "rgba(23,23,23,0.22)", hair: "rgba(23,23,23,0.10)",
    accent: "#ec7d43", accentInk: "#b4531f", accentFill: "#ec7d43", accentSoft: "rgba(236,125,67,0.10)", accentMuted: "rgba(236,125,67,0.20)",
    accentFg: "#3f2112", success: "#1f8a55", warning: "#a86b00", error: "#c8361f",
  },
} as const;
