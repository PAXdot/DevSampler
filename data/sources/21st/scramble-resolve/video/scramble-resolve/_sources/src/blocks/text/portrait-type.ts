// Built with Remotion - https://remotion.pro/license
import { textEm } from './shared';

/** Recover frame orientation from a responsive Sequence's region geometry. */
export const isPortraitFrame = (width: number, height: number, regionW = .8, regionH = .6) => height / regionH > width / regionW;
export const nativeReadingSize = (height: number, portrait: boolean, regionH = .6) => Math.ceil(height / regionH * (portrait ? .03125 : .01875));

/** Condensed display families need their actual narrower glyph advances. */
const familyWidth = (font: string) => /Bebas Neue/i.test(font) ? .63 : 1;
export const portraitAdvance = (text: string, font: string, tracking = 0) => textEm(text) * familyWidth(font) + Array.from(text).length * tracking;

/** Explicit rows keep a portrait composition balanced across different brand fonts.
 * Word animations keep the same ordered copy; long unbroken words retain every glyph. */
export function portraitWords(text: string, wordsPerRow = 1): string[] {
  const pieces = text.trim().split(/\s+/).filter(Boolean).flatMap(word => {
    const glyphs = Array.from(new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(word), segment => segment.segment);
    return Array.from({ length: Math.ceil(glyphs.length / 12) }, (_, i) => glyphs.slice(i * 12, (i + 1) * 12).join(''));
  });
  return Array.from({ length: Math.ceil(pieces.length / wordsPerRow) }, (_, i) => pieces.slice(i * wordsPerRow, (i + 1) * wordsPerRow).join(' '));
}
