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
"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import type { BjorkTone } from "./components-bjork-ui-_core-palette";

const subscribeNoop = () => () => {};
const getMounted = () => true;
const getServerMounted = () => false;

/**
 * Resolves the tone for a component. An explicit `tone` always wins.
 * Otherwise it follows next-themes' resolved theme, but only after mount,
 * so the server render and first client render agree on dark.
 */
export function useBjorkTone(tone?: BjorkTone): BjorkTone {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribeNoop, getMounted, getServerMounted);
  if (tone) return tone;
  if (!mounted) return "dark";
  return resolvedTheme === "light" ? "light" : "dark";
}
