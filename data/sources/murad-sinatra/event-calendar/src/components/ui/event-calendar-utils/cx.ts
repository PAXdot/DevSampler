/*
 * Adapted from mors-component-library (https://github.com/murad-sinatra/mors-component-library)
 * MIT License — Copyright (c) 2026 Murad
 */
export type ClassValue = string | number | bigint | boolean | null | undefined;

export function cx(...values: ClassValue[]): string {
  let out = '';
  for (const value of values) {
    if (!value && value !== 0) continue;
    out = out ? `${out} ${value}` : String(value);
  }
  return out;
}
