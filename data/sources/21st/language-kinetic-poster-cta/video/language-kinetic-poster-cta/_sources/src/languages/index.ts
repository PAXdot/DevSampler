// Built with Remotion - https://remotion.pro/license
export { defineLanguage, languageSchema, type VideoLanguageCard, type LanguageReference } from "./types";
import product_ui from "./product-ui";
import kinetic_poster from "./kinetic-poster";
import glass from "./glass";
import editorial from "./editorial";
import isometric from "./isometric";
import photo_collage from "./photo-collage";
import hand_drawn from "./hand-drawn";
import pixel_terminal from "./pixel-terminal";
import neo_brutal from "./neo-brutal";
import aura from "./aura";

/** Pure serializable language constraints; no fonts or components imported. */
export const VIDEO_LANGUAGE_CARDS = [product_ui, kinetic_poster, glass, editorial, isometric, photo_collage, hand_drawn, pixel_terminal, neo_brutal, aura];
export const VIDEO_LANGUAGE_BY_ID = Object.fromEntries(VIDEO_LANGUAGE_CARDS.map(card => [card.id, card]));
