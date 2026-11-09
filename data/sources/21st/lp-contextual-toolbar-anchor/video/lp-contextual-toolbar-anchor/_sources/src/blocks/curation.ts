// Built with Remotion - https://remotion.pro/license
// Explicit source-based classifications. Never infer language from a title or skin suffix.
import type { VideoJob, VideoLanguage, VideoMeta } from "../kit/spec";
import type { BlockDef } from "./types";

type Classification = { job: VideoJob; language: VideoLanguage; mechanic: string[]; energy: "calm" | "default" | "punchy" };
const rows: [VideoJob, VideoLanguage, string, Classification["energy"], string[]][] = [
  ["titles", "kinetic-poster", "reveal", "default", ["kinetic-lines", "kinetic-title", "strike-word", "outline-fill-type", "selection-zoom", "accent-pill-title", "font-shuffle", "mask-sweep-title", "line-zoom-in", "stacked-beat-lines", "word-cycler", "word-swap", "hook-question", "phrase-type-small", "karaoke-captions"]],
  ["titles", "kinetic-poster", "slam", "punchy", ["chroma-slam", "whip-phrases", "beat-word-slam"]],
  ["titles", "pixel-terminal", "type", "default", ["scramble-resolve", "typewriter-caret"]],
  ["titles", "aura", "reveal", "default", ["text-behind-subject"]],
  ["testimonials", "kinetic-poster", "reveal", "calm", ["quote-card", "lower-third"]],
  ["devices", "product-ui", "scroll", "default", ["phone-scroll", "half-phone"]],
  ["devices", "product-ui", "orbit", "punchy", ["phone-ring", "phone-shelf", "big-bang"]],
  ["devices", "aura", "orbit", "punchy", ["phone-tumble"]],
  ["process", "product-ui", "progress", "default", ["radial-workflow-cycle"]],
  ["process", "product-ui", "progress", "default", ["sticky-note-organize"]],
  ["gallery", "product-ui", "focus", "default", ["component-broll"]],
  ["gallery", "photo-collage", "assemble", "default", ["photo-reveal", "photo-stack", "photo-grid-explode"]],
  ["cta", "kinetic-poster", "reveal", "default", ["logo-end-card"]],
  ["logos", "isometric", "assemble", "default", ["extruded-buttons"]],
  ["cta", "product-ui", "press", "default", ["cursor-cta"]],
  ["cta", "aura", "reveal", "default", ["cta-glow-card"]],
  ["titles", "aura", "reveal", "default", ["launch-intro"]],
  ["logos", "aura", "assemble", "default", ["logo-cloud-burst", "shockwave-logo"]],
  ["gallery", "product-ui", "assemble", "default", ["chip-grid"]],
  ["backgrounds", "aura", "flow", "calm", ["aurora-silk", "gradient-mesh", "glow-bloom", "grid-leak", "light-sweep", "blur-dissolve"]],
  ["backgrounds", "kinetic-poster", "wipe", "punchy", ["diagonal-wipe", "flash-cut", "band-wipe-stack", "zoom-through"]],
  ["backgrounds", "pixel-terminal", "draw", "calm", ["hud-corners"]],
  ["logos", "product-ui", "collapse", "default", ["frame-to-icon"]],
  ["logos", "kinetic-poster", "assemble", "default", ["logo-marquee", "logo-bug"]],
  ["logos", "aura", "draw", "calm", ["stroke-logo"]],
  ["data", "kinetic-poster", "count", "default", ["number-ticker", "stat-slam", "counter-lookup", "price-roll"]],
  ["data", "product-ui", "draw", "default", ["bar-chart", "line-draw", "progress-fill"]],
  ["code", "pixel-terminal", "type", "default", ["terminal", "code-morph", "theme-match-cut", "line-spotlight", "diff-card", "cli-cascade", "code-output-split"]],
  ["process", "product-ui", "progress", "default", ["agent-steps", "branch-tree", "node-flow"]],
  ["testimonials", "product-ui", "orbit", "default", ["orbit-ring"]],
  ["testimonials", "product-ui", "type", "default", ["post-card"]],
  ["testimonials", "product-ui", "focus", "default", ["quote-wall"]],
  ["testimonials", "kinetic-poster", "count", "default", ["rating-summary"]],
  ["cta", "product-ui", "type", "default", ["address-bar-cta"]],
  ["cta", "pixel-terminal", "press", "default", ["install-command"]],
  ["cta", "product-ui", "assemble", "default", ["qr-end-card"]],
  ["backgrounds", "aura", "wipe", "punchy", ["speed-lines"]],
  ["logos", "aura", "assemble", "default", ["polygon-lockup", "icon-bloom"]],
  ["data", "product-ui", "count", "default", ["milestone-feed", "odometer-rows", "vs-split"]],
  ["code", "product-ui", "type", "default", ["file-tree"]],
  ["code", "pixel-terminal", "type", "default", ["glyph-scatter"]],
  ["titles", "kinetic-poster", "count", "default", ["version-stepper"]],
  ["product-ui", "product-ui", "draw", "default", ["table-fill"]],
  ["product-ui", "product-ui", "progress", "default", ["document-transform", "voice-document-cloud", "badge-row", "task-overwhelm", "timeline-assembly"]],
  ["product-ui", "product-ui", "focus", "default", ["tilt-showcase"]],
  ["backgrounds", "product-ui", "collapse", "default", ["window-collapse"]],
  ["product-ui", "isometric", "assemble", "default", ["iso-stack"]],
  ["product-ui", "product-ui", "interact", "default", ["bento-feature-tour", "prompt-card", "app-card-pop", "chat-thread", "toast-cloud", "popover-open", "product-card", "wireframe-browser", "side-panel", "status-pill", "cursor-hover-reveal", "touch-dot", "focus-zoom", "before-after-reveal", "command-palette-action", "environment-card-stack", "context-split-panel"]],
  ["cursors", "product-ui", "interact", "default", ["cursor-click", "cursor-drag", "multi-cursor"]],
  ["cursors", "product-ui", "magnet-press", "punchy", ["magnetic-button"]],
  ["cursors", "aura", "torch-reveal", "calm", ["cursor-spotlight"]],
  ["cursors", "product-ui", "marquee-select", "default", ["marquee-select"]],
  ["cursors", "product-ui", "camera-follow", "default", ["zoom-follow"]],
  ["cursors", "product-ui", "text-select", "default", ["select-and-ask"]],
  ["cursors", "product-ui", "hold-charge", "punchy", ["hold-to-confirm"]],
  ["cursors", "product-ui", "drag-drop", "default", ["file-drop"]],
  ["cursors", "product-ui", "shape-morph", "default", ["cursor-morph"]],
  ["cursors", "hand-drawn", "pen-draw", "default", ["pen-annotate"]],
  ["cursors", "product-ui", "presence-chat", "default", ["cursor-chat"]],
  ["cursors", "product-ui", "press", "default", ["cursor-classic"]],
  ["cursors", "glass", "press", "calm", ["cursor-glass"]],
  ["cursors", "product-ui", "press", "default", ["cursor-gradient"]],
  ["cursors", "aura", "press", "punchy", ["cursor-neon"]],
  ["cursors", "editorial", "hover", "calm", ["cursor-dot-ring"]],
  ["cursors", "pixel-terminal", "press", "punchy", ["cursor-pixel"]],
  ["cursors", "hand-drawn", "press", "default", ["cursor-sketch"]],
  ["cursors", "product-ui", "presence", "default", ["cursor-name-tag"]],
  ["cursors", "aura", "guide", "calm", ["cursor-halo"]],
  ["cursors", "kinetic-poster", "trail", "punchy", ["cursor-comet"]],
  ["cursors", "glass", "snap", "calm", ["cursor-adaptive"]],
  ["cursors", "product-ui", "tap", "default", ["cursor-touch"]],
];
export const BLOCK_CLASSIFICATIONS: Record<string, Classification> = Object.fromEntries(rows.flatMap(([job, language, mechanic, energy, refs]) => refs.map(ref => [ref, { job, language, mechanic: [mechanic], energy }])));

const launchRows: [VideoJob, string, string[]][] = [
  ["product-ui", "focus", ["loupe-inspection", "scroll-to-highlight", "inspector-parameter-edit", "desktop-window-orbit", "responsive-viewport-resize", "contextual-toolbar-anchor", "cursor-path-proof", "two-window-deep-focus", "model-picker-stack", "panel-document-export"]],
  ["devices", "assemble", ["device-handoff", "phone-notification-capture", "device-exploded-ui-layers", "ex-device-editorial"]],
  ["code", "type", ["terminal-browser-proof", "code-diff-review"]],
  ["process", "route", ["multi-agent-parallel-windows", "branch-merge-routing", "workflow-stage-handoff", "queue-conveyor", "parallel-task-fanout", "kanban-progression", "completion-ladder", "notification-cascade", "network-graph-trace", "ex-voice-instrument"]],
  ["logos", "assemble", ["integration-picker-grid", "ex-partner-braid", "ex-stroke-mark"]],
  ["gallery", "assemble", ["source-output-mosaic", "report-format-carousel", "document-page-fan", "image-variation-matrix", "ex-poster-grid", "ex-image-constellation", "ex-contact-wall"]],
  ["data", "count", ["metric-city-rise", "rank-leaderboard-reveal", "data-chart-comparison"]],
  ["titles", "reveal", ["ex-serif-chapter", "ex-sliced-word", "ex-outline-solid", "ex-word-rail", "ex-dot-title", "ex-prism-word", "ex-line-title"]],
  ["backgrounds", "flow", ["ex-swatch-orbit", "ex-macro-sweep"]],
];
export const LAUNCH_CLASSIFICATIONS: Record<string, Classification> = Object.fromEntries(launchRows.flatMap(([job, mechanic, refs]) => refs.map(ref => [ref, { job, language: "product-ui", mechanic: [mechanic], energy: "default" }])));
// Explicit corrections from actual default motion and randomized blind-poster review.
for (const ref of ["ex-sliced-word", "ex-word-rail", "ex-line-title", "ex-dot-title", "ex-poster-grid", "ex-contact-wall", "ex-outline-solid", "ex-stroke-mark"]) {
  LAUNCH_CLASSIFICATIONS[ref] = { ...LAUNCH_CLASSIFICATIONS[ref]!, language: "kinetic-poster" };
}
LAUNCH_CLASSIFICATIONS["ex-prism-word"] = { ...LAUNCH_CLASSIFICATIONS["ex-prism-word"]!, language: "isometric" };
LAUNCH_CLASSIFICATIONS["ex-poster-grid"] = { ...LAUNCH_CLASSIFICATIONS["ex-poster-grid"]!, job: "titles" };
LAUNCH_CLASSIFICATIONS["integration-picker-grid"] = { ...LAUNCH_CLASSIFICATIONS["integration-picker-grid"]!, job: "process" };
LAUNCH_CLASSIFICATIONS["source-output-mosaic"] = { ...LAUNCH_CLASSIFICATIONS["source-output-mosaic"]!, job: "process" };
LAUNCH_CLASSIFICATIONS["ex-voice-instrument"] = { ...LAUNCH_CLASSIFICATIONS["ex-voice-instrument"]!, job: "product-ui" };
LAUNCH_CLASSIFICATIONS["report-format-carousel"] = { ...LAUNCH_CLASSIFICATIONS["report-format-carousel"]!, job: "product-ui" };
LAUNCH_CLASSIFICATIONS["device-exploded-ui-layers"] = { ...LAUNCH_CLASSIFICATIONS["device-exploded-ui-layers"]!, job: "product-ui" };

export const QUARANTINED_PATTERNS: Record<string, string> = {
  "metric-city-rise": "The promised metric city requires a rebuilt spatial/data mechanism.",
  "multi-agent-parallel-windows": "Separate task windows and convergence need a rebuilt mechanism.",
  "ex-device-editorial": "Device and editorial promise is not supported by the current composition.",
  "responsive-viewport-resize": "A cropped screenshot cannot demonstrate actual responsive reflow.",
  "ex-swatch-orbit": "Color swatches are brand skins, not a distinct catalog mechanism.",
  "ex-macro-sweep": "Macro material promise needs real material/camera content.",
};


/** Blocks reviewed frame by frame on 2026-10-06 and kept out of the catalog. They stay resolvable for existing documents. */
export const RETIRED_FROM_CATALOG: Record<string, string> = {
  "cursor-hover-reveal": "Too little on screen to read as a block.",
  "language-editorial-backgrounds": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-editorial-code": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-editorial-cta": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-editorial-data": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-editorial-devices": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-editorial-logos": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-editorial-process": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-editorial-product-ui": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-editorial-testimonials": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-editorial-titles": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-hand-drawn-backgrounds": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-hand-drawn-code": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-hand-drawn-cta": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-hand-drawn-data": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-hand-drawn-devices": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-hand-drawn-gallery": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-hand-drawn-logos": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-hand-drawn-process": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-hand-drawn-product-ui": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-hand-drawn-testimonials": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-hand-drawn-titles": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-isometric-backgrounds": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-isometric-code": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-isometric-cta": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-isometric-data": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-isometric-devices": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-isometric-gallery": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-isometric-logos": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-isometric-process": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-isometric-product-ui": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-isometric-testimonials": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-isometric-titles": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-kinetic-poster-code": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-kinetic-poster-data": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-kinetic-poster-devices": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-kinetic-poster-gallery": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-kinetic-poster-logos": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-kinetic-poster-product-ui": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-kinetic-poster-testimonials": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-kinetic-poster-titles": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-pixel-terminal-code": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-pixel-terminal-cta": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-pixel-terminal-data": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-pixel-terminal-devices": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-pixel-terminal-gallery": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-pixel-terminal-logos": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-pixel-terminal-process": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-pixel-terminal-product-ui": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-pixel-terminal-testimonials": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "language-pixel-terminal-titles": "One parametric template reskinned per language; same copy, screenshot and layout as its siblings.",
  "lp-cursor-path-proof": "Three empty cards; nothing is shown being done.",
  "lp-ex-contact-wall": "Grey placeholder shapes instead of real content.",
  "lp-ex-dot-title": "Text renders near-invisible on its default background.",
  "lp-ex-image-constellation": "Grey placeholder shapes instead of real content.",
  "lp-ex-line-title": "A plain white box; the motion does not carry the idea.",
  "lp-ex-outline-solid": "Text renders near-invisible on its default background.",
  "lp-ex-serif-chapter": "Text renders near-invisible on its default background.",
  "lp-ex-sliced-word": "Text renders near-invisible on its default background.",
  "lp-ex-word-rail": "A plain white box; the motion does not carry the idea.",
  "lp-kanban-progression": "Grey placeholder shapes instead of real content.",
  "lp-network-graph-trace": "Grey placeholder shapes instead of real content.",
  "lp-workflow-stage-handoff": "Labels too dim to read.",
  "touch-dot": "Too little on screen to read as a block.",
};

export function enrichVideoMeta(slug: string, meta: VideoMeta): VideoMeta {
  const classification = BLOCK_CLASSIFICATIONS[slug];
  if (!classification) {
    if (meta.job && meta.language && meta.mechanic) return meta;
    throw new Error(`Missing explicit video classification: ${slug}`);
  }
  return { ...meta, ...classification, looks: meta.looks ?? [], requiresScreenshot: meta.requiresScreenshot ?? meta.slots.some(slot => slot.type === "image" && /screen|image|media/.test(slot.role ?? slot.key)) };
}
export function enrichBlock(def: BlockDef): BlockDef {
  return { ...def, meta: enrichVideoMeta(def.slug, def.meta) };
}
