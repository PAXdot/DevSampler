// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { defineVideoMeta } from "../../kit/spec";
import { zColor } from "../../kit/z";
import type { BlockDef } from "../types";
import { DEFAULT_BRAND } from "../../doc/factory";
import { PRICING_COMPONENT_PREVIEW, TWENTY_FIRST_LOGO } from "./assets";
import { OWNED_PHOTOS } from "../devices-diagrams/_shared/owned-photos";

export const EXPANSION_LANGUAGES = ["editorial", "isometric", "hand-drawn", "kinetic-poster", "pixel-terminal"] as const;
export const EXPANSION_JOBS = ["titles", "product-ui", "devices", "code", "process", "data", "logos", "gallery", "testimonials", "cta", "backgrounds"] as const;
export type ExpansionLanguage = typeof EXPANSION_LANGUAGES[number];
export type ExpansionJob = typeof EXPANSION_JOBS[number];
export const expansionSlug = (language: ExpansionLanguage, job: ExpansionJob) => `language-${language}-${job}`;
const text = z.string().max(64);
const item = z.object({ text, image: z.string().optional(), value: z.number().min(0).max(1000).optional() });
export const sharedSchema = z.object({
  ink: zColor(), accent: zColor(), secondary: zColor(), paper: zColor(),
  displayFont: z.string(), bodyFont: z.string(), numeralsFont: z.string(),
  paintBackground: z.boolean(), motion: z.enum(["calm", "default", "punchy"]),
});
export const jobShapes = {
  titles: { phrase: z.string().min(1).max(50), kicker: text },
  "product-ui": { screenshot: z.string(), action: text, detail: text },
  devices: { screenshot: z.string(), deviceName: text },
  code: { from: z.string().max(140), to: z.string().max(160), command: z.string().max(100) },
  process: { steps: z.array(text).min(2).max(3), activeStep: z.number().int().min(0).max(2) },
  data: { value: z.number().min(0).max(100000), unitLabel: text, bars: z.array(z.number().min(0).max(100)).min(3).max(3) },
  logos: { logos: z.array(z.object({ name: text, image: z.string() })).min(2).max(3), relationship: text },
  gallery: { items: z.array(item).min(3).max(3) },
  testimonials: { quote: z.string().max(140), author: text, source: text },
  cta: { action: z.string().max(40), url: z.string().max(40), logo: z.string() },
  backgrounds: { density: z.number().int().min(3).max(12) },
};
export type ExpansionProps = z.infer<typeof sharedSchema> & {
 phrase?: string; kicker?: string; screenshot?: string; action?: string; detail?: string; deviceName?: string;
 from?: string; to?: string; command?: string; steps?: string[]; activeStep?: number;
 value?: number; unitLabel?: string; bars?: number[]; logos?: {name:string;image:string}[];
 relationship?: string; items?: z.infer<typeof item>[]; quote?: string; author?: string; source?: string; url?: string; logo?: string; density?: number;
};
export const jobDefaults: Record<ExpansionJob, Record<string, unknown>> = {
 titles: { phrase: "Find. Generate. Make it yours.", kicker: "21st" },
 "product-ui": { screenshot: PRICING_COMPONENT_PREVIEW, action: "Choose a pricing component", detail: "Component preview" },
 devices: { screenshot: PRICING_COMPONENT_PREVIEW, deviceName: "Pricing component preview" },
 code: { from: '21st search "pricing table"', to: '21st add <user>/<slug> --print', command: 'npx 21st search "pricing table"' },
 process: { steps: ["Find a component", "Preview the code", "Make it yours"], activeStep: 2 },
 data: { value: 100, unitLabel: "launch films researched", bars: [35, 33, 28] },
 logos: { logos: [{name:"Web",image:TWENTY_FIRST_LOGO},{name:"MCP",image:TWENTY_FIRST_LOGO},{name:"CLI",image:TWENTY_FIRST_LOGO}], relationship: "One product. Three surfaces." },
 gallery: { items: [{text:"Pricing table", image:PRICING_COMPONENT_PREVIEW},{text:"Find with the CLI", value:1},{text:"Generate with 21st AI", value:2}] },
 testimonials: { quote: "Blocks should differ in what the brand does not change.", author: "Video catalog research", source: "Design principle, not a customer testimonial" },
 cta: { action:"Find your next component", url:"21st.dev", logo:TWENTY_FIRST_LOGO },
 backgrounds: { density: 7 },
};
/** Looks change content or arrangement, never just a palette. */
export const alternateLooks: Record<ExpansionJob, Record<string, unknown>> = {
 titles: { phrase: "Find your next component.", kicker: "Find" },
 "product-ui": { action: "Inspect the pricing tiers", detail: "Compare the component details" },
 devices: { deviceName: "Inspect a pricing component" },
 code: { from: '21st search "hero section"', to: '21st get <user>/<slug>', command: 'npx 21st search "hero section"' },
 process: { steps: ["Search", "Choose", "Install"], activeStep: 1 },
 data: { value: 11, unitLabel: "catalog jobs", bars: [27, 28, 35] },
 logos: { logos: [{name: "CLI", image: TWENTY_FIRST_LOGO}, {name: "Web", image: TWENTY_FIRST_LOGO}, {name: "MCP", image: TWENTY_FIRST_LOGO}], relationship: "Find and Generate across three surfaces" },
 gallery: { items: [{text: "Find", image: PRICING_COMPONENT_PREVIEW}, {text: "Generate with 21st AI"}, {text: "Make it yours"}] },
 testimonials: { quote: "A brand changes colors and fonts. A language keeps its material and motion.", author: "Video catalog research", source: "Design principle, not a customer testimonial" },
 cta: { action: "Generate with 21st AI", url: "21st.dev/ai" },
 backgrounds: { density: 4 },
};
// Every cell has a named structural mechanic. These are independent renderers, not style suffixes on one layout.
export const mechanics: Record<ExpansionLanguage, Record<ExpansionJob, [string, string]>> = {
 editorial: {
 titles:["Phrase sets across a ruled editorial spread","column-typeset"],"product-ui":["Product detail receives a marginal paper note","margin-annotation"],devices:["Device rises as a numbered technical plate","plate-rise"],code:["Code revision draws a proofreader correction","proofreader-revision"],process:["Process becomes a numbered manuscript index","index-rule-draw"],data:["Research number counts beside a ruled ledger","ledger-count"],logos:["Product surfaces set in an editorial colophon","colophon-typeset"],gallery:["Three items build a contact-sheet spread","contact-sheet-set"],testimonials:["Attributed quote appears as a pull-quote inset","pullquote-rise"],cta:["Call to action receives a closing editorial rule","colophon-close"],backgrounds:["Paper rules draw through a quiet margin field","paper-rule-draw"] },
 isometric: {
 titles:["Phrase assembles on three extruded word plinths","word-plinth-rise"],"product-ui":["Product screen separates into isometric inspection planes","inspection-plane-lift"],devices:["Device rises from an isometric cradle","cradle-rise"],code:["Code revisions rise on two extruded file planes","file-plane-rise"],process:["Process nodes connect across a tilted causeway","causeway-travel"],data:["Data columns rise on an isometric ground grid","volume-count"],logos:["Product surface marks lock into isometric tiles","tile-dock"],gallery:["Three content planes fan across isometric shelves","shelf-fan"],testimonials:["Quote rises over an extruded note slab","slab-rise"],cta:["Call to action docks on an isometric landing pad","landing-pad-dock"],backgrounds:["Isometric floor tiles rise in a diagonal wave","tile-wave"] },
 "hand-drawn": {
 titles:["Phrase receives two hand-drawn curved underlines","underline-trace"],"product-ui":["Product detail is circled by an annotation pen","pen-circle"],devices:["Device outline is sketched around a real preview","device-trace"],code:["Code change receives a drawn strike and arrow","strike-arrow"],process:["Process path is drawn through handwritten milestones","milestone-trace"],data:["Data bars draw as uneven pen hatching","hatch-count"],logos:["Product marks connect through a sketched meeting curve","meeting-curve"],gallery:["Three content cards receive loose pinboard outlines","pinboard-trace"],testimonials:["Quote is enclosed by a hand-drawn speech balloon","speechballoon-draw"],cta:["Call to action receives an imperfect arrow loop","arrow-loop"],backgrounds:["Loose contour strokes draw a paper border field","contour-trace"] },
 "kinetic-poster": {
 titles:["Phrase assembles through three oversized word masks","word-mask-assemble"],"product-ui":["Product preview punches through a split action poster","poster-aperture"],devices:["Device preview locks beside an oversized graphic arrow","arrow-device-lock"],code:["Commands assemble as a masked before-and-after poster","command-mask-assemble"],process:["Process words slide into a stepped poster staircase","word-staircase"],data:["Number locks into a segmented count poster","digit-segment-count"],logos:["Product surface names punch through three logo shutters","logo-shutters"],gallery:["Three items settle through a bold checkerboard shutter","checkerboard-shutter"],testimonials:["Quote appears beside a giant quotation mark","quote-mask-reveal"],cta:["Call to action locks into an oversized arrow poster","cta-arrow-snap"],backgrounds:["Graphic poster bands interlock through diagonal masks","band-interlock"] },
 "pixel-terminal": {
 titles:["Phrase types into a stepped raster title console","cell-type"],"product-ui":["Product preview receives a raster inspection sweep","raster-inspect"],devices:["Device preview assembles inside a pixel viewport","viewport-scan"],code:["Command advances into a before-and-after terminal diff","terminal-diff-type"],process:["Process checklist steps through a terminal task queue","queue-step"],data:["Data counter fills discrete terminal bar cells","bar-cell-count"],logos:["Product surface marks dock into a character-grid directory","directory-dock"],gallery:["Three items appear as terminal file-grid previews","file-grid-scan"],testimonials:["Attributed quote types inside a character-grid message panel","grid-message-type"],cta:["Call to action types into a terminal command prompt","command-prompt-type"],backgrounds:["Discrete raster cells step across a terminal grid","cell-scan"] },
};
const roles: Record<ExpansionLanguage, string> = { editorial:"fonts.serif", isometric:"fonts.display", "hand-drawn":"fonts.accent", "kinetic-poster":"fonts.accent", "pixel-terminal":"fonts.mono" };
export function defFor(language: ExpansionLanguage, job: ExpansionJob): BlockDef {
 const [name,mechanic] = mechanics[language][job];
 const schema = sharedSchema.extend(jobShapes[job]);
 const palette = DEFAULT_BRAND.colors;
 const editorialGallery = language === "editorial" && job === "gallery" ? {items: [
  {text: "Mountain study", image: OWNED_PHOTOS[0]!},
  {text: "Wave study", image: OWNED_PHOTOS[1]!},
  {text: "Liquid study", image: OWNED_PHOTOS[2]!},
 ]} : {};
 const displayFont = language === "editorial" ? "Instrument Serif" : language === "pixel-terminal" ? "IBM Plex Mono" : language === "hand-drawn" ? "Caveat" : "Space Grotesk";
 return { slug:expansionSlug(language,job), name, schema, defaults: { ink:palette.text, accent:palette.primary, secondary:palette.secondary, paper:palette.background, displayFont, bodyFont:language === "editorial" ? "Instrument Serif" : language === "pixel-terminal" ? "IBM Plex Mono" : "Inter", numeralsFont:language === "editorial" ? "Instrument Serif" : "IBM Plex Mono", paintBackground:false, motion:"default", ...jobDefaults[job], ...editorialGallery }, meta:defineVideoMeta({
 spec:"21st.video/1", kind:job === "backgrounds" ? "background" : "scene", category:`${job}/language`, job, language, mechanic:[mechanic], energy:language === "kinetic-poster" ? "punchy" : language === "editorial" ? "calm" : "default", requiresScreenshot:["product-ui","devices"].includes(job),
 tags:["catalog-language",language,job,mechanic], engines:{remotion:">=4.0.533 <5"},
 timing:{fps:30,duration:{default:180,min:90,max:900},stretch:"hold",phases:{in:48,out:0},markers:{settled:72},beats:[0,18,36,54,72],loop:false},
 layout:{aspects:["16:9","9:16","1:1"],mode:"responsive",fill:"frame",safeArea:"action",transparent:true,preset:"full",backdrop:["paintBackground"]},
 slots:Object.keys(jobShapes[job]).map(key=>({key,type:["screenshot","logo"].includes(key)?"image" as const:["steps","items","logos","bars"].includes(key)?"list" as const:["value","activeStep","density"].includes(key)?"number" as const:"text" as const,role:key})),
 brand:{ink:"colors.text",accent:"colors.primary",secondary:"colors.secondary",paper:"colors.background",displayFont:roles[language],bodyFont:language === "editorial"?"fonts.serif":language === "pixel-terminal"?"fonts.mono":"fonts.body",numeralsFont:language === "editorial"?"fonts.serif":language === "pixel-terminal"?"fonts.mono":"fonts.numerals",...(job === "cta"?{logo:"logos.light"}:{})},
 motionBeats:[{target:mechanic,prop:"transform",from:"enter",settledBy:72,easing:language === "pixel-terminal"?"linear":"ease"}],
 looks:[{id:"default",name:"Product research example",props:{}},{id:"alternate",name:job === "data"?"Three category counts":job === "product-ui"?"Inspect another detail":"Compact layout",description:"Content or composition changes; palette remains owned by the brand.",props:language === "editorial" && job === "gallery" ? {items: [
  {text: "Smoke study", image: OWNED_PHOTOS[3]!}, {text: "Image study 05", image: OWNED_PHOTOS[4]!}, {text: "Image study 06", image: OWNED_PHOTOS[5]!},
 ]} : alternateLooks[job]}],
 render:{deterministic:true,clientRenderable:true,webgl:false,requiresGpu:false},preview:{poster:{marker:"settled"},hover:[0,180]},provenance:{origin:"own",license:"MIT",sourceUrl:"docs/research/video-catalog-2026-10-06/plan.md"},
 })};
}
export const CATALOG_EXPANSION_DEFS = EXPANSION_LANGUAGES.flatMap(language=>EXPANSION_JOBS.map(job=>defFor(language,job)));
export const DEFS = CATALOG_EXPANSION_DEFS;
