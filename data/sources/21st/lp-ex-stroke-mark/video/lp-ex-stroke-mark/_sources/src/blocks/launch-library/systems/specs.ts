// Built with Remotion - https://remotion.pro/license
import type { PatternSpec } from "../contract";
/** Source-linked original workflow, data and output compositions. No source assets are bundled. */
export const SYSTEM_SPECS = [
  {
    id: "branch-merge-routing", name: "Branch and Merge Routing", title: "Many paths. One release.", subtitle: "Parallel work becomes a shared result",
    items: ["Design", "Build", "Review", "Release"], sourceIds: ["2049897250449391850", "2053891504989753817"],
    observed: "Branch-line fields and parallel task lines converge on a release or website result.",
    adaptation: "Original fork-then-merge diamond topology, independently timed routing pulses and neutral nodes.",
  },
  {
    id: "workflow-stage-handoff", name: "Workflow Stage Handoff", title: "Keep the work moving", subtitle: "Each stage passes clear context forward",
    items: ["Brief", "Plan", "Build", "Verify"], sourceIds: ["2069816393395012009", "2093413457924166045"],
    observed: "Task cards cross workflow columns and linked integration panels carry context.",
    adaptation: "Original baton rail, traveling context card and stage activation choreography.",
  },
  {
    id: "queue-conveyor", name: "Task Queue Conveyor", title: "A place for every task", subtitle: "A moving intake becomes a settled queue",
    items: ["Research", "Outline", "Compose", "Review"], sourceIds: ["2026338860557545901"],
    observed: "Task pills move along a dotted conveyor and expand into a task cloud.",
    adaptation: "Original two-level conveyor with indexed tickets and an intake gate; not a copy of the source task cloud.",
  },
  {
    id: "parallel-task-fanout", name: "Parallel Task Fanout", title: "One brief. Four specialists.", subtitle: "Independent work joins a common outcome",
    items: ["Research", "Design", "Code", "Quality"], sourceIds: ["2047764651363180839", "2053891504989753817", "2047008987665809771"],
    observed: "Parallel task statuses, task cards and converging branch lines are shown in product proof.",
    adaptation: "Original radial dispatch burst and four independently filling task stations.",
  },
  {
    id: "kanban-progression", name: "Kanban Card Progression", title: "From idea to done", subtitle: "A task advances through a visible board",
    items: ["Backlog", "Active", "Review", "Done"], sourceIds: ["2069816393395012009", "2026338860557545901"],
    observed: "A task transitions through workflow columns, comments and a PR-ready state.",
    adaptation: "Original four-column board, task pickup, cross-column transport and settling choreography.",
  },
  {
    id: "completion-ladder", name: "Checklist Completion Ladder", title: "Progress you can follow", subtitle: "Each completed step unlocks the next",
    items: ["Read the brief", "Build the draft", "Check the result", "Ready to share"], sourceIds: ["2069816393395012009", "2093364921073549667", "2059987170065093001"],
    observed: "Checklists and deployment/review loading stages resolve into a finished result.",
    adaptation: "Original diagonal completion ladder with expanding check rings and a final seal.",
  },
  {
    id: "notification-cascade", name: "Status Notification Cascade", title: "Stay in the loop", subtitle: "Small status signals form a readable story",
    items: ["Draft saved", "Review complete", "Assets ready", "Shared with team"], sourceIds: ["2026338860557545901", "2079973992077902283"],
    observed: "Message notifications, status reports and a warm-gradient phone notification are visible.",
    adaptation: "Original cascading notification stack with progressive compression and a quiet final digest.",
  },
  {
    id: "integration-picker-grid", name: "Integration Picker Grid", title: "Bring your context together", subtitle: "Choose the tools that power the workflow",
    items: ["Notes", "Files", "Calendar", "Messages"], sourceIds: ["2093364921073549667", "1948489708385816666"],
    observed: "A service-choice grid and connector selections introduce connected output creation.",
    adaptation: "Original grid selection wave, connector spine and neutral integration glyphs.",
  },
  {
    id: "source-output-mosaic", name: "Source to Output Mosaic", title: "One source, more possibilities", subtitle: "Context becomes a coordinated set of outputs",
    items: ["Brief", "Report", "Slides", "Visual"], sourceIds: ["1948489708385816666", "1928141072011776088", "2107217722283090117"],
    observed: "Source documents, editable canvases and prompts lead to several output formats or variants.",
    adaptation: "Original source-tile fracture into a four-part output mosaic with shared visual anchors.",
  },
  {
    id: "network-graph-trace", name: "Network Graph Trace", title: "Make the connection", subtitle: "A highlighted path reveals the structure",
    items: ["Source", "Context", "Route", "Result"], sourceIds: ["2105012114200887434", "2100624143188394161", "2079589405925282011"],
    observed: "Scientific networks, connected design nodes and database links explain product relationships.",
    adaptation: "Original ten-node network topology and traced route; no exact sampled source graph is reproduced.",
  },
  {
    id: "metric-city-rise", name: "Metric City Rise", title: "See the shape of progress", subtitle: "A metric field gains height and depth",
    items: ["Usage", "Reach", "Quality", "Growth"], sourceIds: ["2105341653468774723", "2093413457924166045"],
    observed: "An extruded data-city motif and metric panels appear in the sampled sources.",
    adaptation: "Original isometric metric city, independently chosen illustrative values and staggered column growth; no marketing metrics are copied.",
  },
  {
    id: "rank-leaderboard-reveal", name: "Leaderboard Rank Reveal", title: "Move your work forward", subtitle: "One highlighted result finds its place",
    items: ["Studio One", "Studio Two", "Studio Three", "Your studio"], sourceIds: ["2106829867463627039"],
    observed: "A rank row, XP counter and avatar HUD are highlighted in product footage.",
    adaptation: "Original leaderboard row reordering, illustrative scoring and rising rank ribbon.",
  },
  {
    id: "data-chart-comparison", name: "Data Chart Comparison", title: "A clearer comparison", subtitle: "Two illustrative series meet on one scale",
    items: ["Explore", "Prepare", "Build", "Deliver"], sourceIds: ["1980308459368436093", "1928141072011776088", "2105012114200887434"],
    observed: "Charts, scientific artifacts, dashboards and graph-series changes show data proof.",
    adaptation: "Original paired-series chart with drawn comparison connectors and illustrative values; neither source chart data nor easing is reproduced.",
  },
  {
    id: "report-format-carousel", name: "Report Format Carousel", title: "The same idea, every format", subtitle: "A report moves through useful deliverables",
    items: ["Report", "Slides", "Table", "Memo"], sourceIds: ["1982842909235040731", "1980308459368436093", "1928141072011776088"],
    observed: "Reports, slide decks, emails and spreadsheet outcomes are toured in product demonstrations.",
    adaptation: "Original centered carousel, format-specific neutral page anatomy and tab-linked camera moves.",
  },
  {
    id: "document-page-fan", name: "Document Page Fan", title: "Give your ideas room", subtitle: "A single page opens into a useful collection",
    items: ["Overview", "Research", "Plan", "Appendix"], sourceIds: ["2036825558084878467", "2080331924732850687", "2100619682718118397", "2016209462621831448"],
    observed: "Generated planning documents, workspace pages, stacked app windows and compiled papers are shown.",
    adaptation: "Original hinged paper fan and visible page indexing; the exact fan mechanism is an independent presentation extension.",
  },
  {
    id: "image-variation-matrix", name: "Image Variation Matrix", title: "Explore a wider direction", subtitle: "One visual language becomes a set of options",
    items: ["Warm", "Calm", "Bright", "Bold"], sourceIds: ["2054207481421975829", "2070215480401604954", "2062563982452408526", "2107217722283090117"],
    observed: "Image constellations, variation walls, media nodes and one-to-many design outputs are visible.",
    adaptation: "Original expanding matrix with generated geometric art, selection and scale choreography. No source image, logo or exact wall layout is copied.",
  },
] as const;

export type SystemsPattern = (typeof SYSTEM_SPECS)[number]["id"];

const direct = new Set<SystemsPattern>(["queue-conveyor", "kanban-progression", "notification-cascade", "integration-picker-grid"]);
export const SPECS: PatternSpec[] = SYSTEM_SPECS.map((spec, index) => ({
  id: spec.id, name: spec.name,
  description: `Observed motif: ${spec.observed} Independently authored treatment: ${spec.adaptation}`,
  category: index < 10 ? "workflow" : "data-output", tags: ["systems", index < 10 ? "workflow" : "data", "source-linked"],
  sourceIds: [...spec.sourceIds], relationship: spec.id === "document-page-fan" ? "original-extension" : direct.has(spec.id) ? "direct-pattern" : "adaptation",
  defaults: {
    title: spec.title, subtitle: spec.subtitle, labels: [...spec.items],
    ...(["source-output-mosaic", "image-variation-matrix"].includes(spec.id) ? { image: "" } : {}),
    ...(spec.id === "metric-city-rise" ? { value: 96, suffix: "%" } : {}),
    ...(spec.id === "rank-leaderboard-reveal" ? { value: 240, suffix: "pts" } : {}),
  },
}));
