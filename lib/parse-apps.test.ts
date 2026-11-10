import assert from "node:assert/strict";
import test from "node:test";
import { appMeta, parseAppPage, parseApps } from "./parse-apps.ts";

test("parseApps reads escaped app objects and drops duplicates", () => {
  const html = String.raw`before {\"kind\":\"app\",\"id\":1,\"slug\":\"immich\",\"title\":\"Immich: Photo\",\"description\":\"Browse, organize.\",\"url\":\"/community/apps/immich\",\"poster\":\"https://cdn.21st.dev/p.jpg\",\"video\":\"https://cdn.21st.dev/v.mp4\",\"framework\":\"SvelteKit\",\"stars\":113713,\"tags\":[\"photos\"],\"license\":\"AGPL-3.0\",\"repoUrl\":\"https://github.com/immich-app/immich\"} {\"kind\":\"app\",\"id\":1,\"slug\":\"immich\",\"title\":\"Immich: Photo\",\"description\":\"Browse, organize.\",\"url\":\"/community/apps/immich\",\"poster\":\"https://cdn.21st.dev/p.jpg\",\"video\":\"\",\"framework\":\"SvelteKit\",\"stars\":10,\"tags\":[],\"license\":\"AGPL-3.0\",\"repoUrl\":\"https://github.com/immich-app/immich\"}`;

  const apps = parseApps(html);
  assert.equal(apps.length, 1);
  assert.equal(apps[0]?.slug, "immich");
  assert.equal(apps[0]?.stars, 113713);
  assert.equal(apps[0]?.framework, "SvelteKit");
  assert.equal(apps[0]?.repoUrl, "https://github.com/immich-app/immich");
  assert.deepEqual(apps[0]?.tags, ["photos"]);
});

test("parseAppPage keeps the app poster and ignores a recommended component preview", () => {
  const html = String.raw`
<title>Excalidraw: Visual whiteboard | Open-source Apps | 21st</title>
<meta property="og:description" content="Sketch diagrams, wireframes, and ideas on an open canvas."/>
<img src="https://cdn.21st.dev/ravikatiyar162/hero-3/default/preview.1758015723244.png"/>
<script type="application/ld+json">{"@context":"https://schema.org","@type":"SoftwareSourceCode","name":"Excalidraw: Visual whiteboard","description":"Excalidraw combines shapes and text.","url":"https://21st.dev/community/apps/excalidraw","codeRepository":"https://github.com/excalidraw/excalidraw","license":"https://github.com/excalidraw/excalidraw/blob/abc/LICENSE","image":"https://cdn.21st.dev/oss-apps/231283452/abc/poster-aaa.jpg","video":{"@type":"VideoObject","contentUrl":"https://cdn.21st.dev/oss-apps/231283452/abc/video-bbb.mp4"}}</script>
<svg class="lucide lucide-star size-4"><polygon points="12 2 15.09 8.26"></polygon></svg> <!-- -->131.6K
<section><h2 class="text-[16px] font-medium text-foreground">Stack</h2><div><p>React</p></div></section>
<section><h2 class="text-[16px] font-medium text-foreground">License</h2><div><p><a href="https://github.com/excalidraw/excalidraw/blob/abc/LICENSE">MIT</a></p></div></section>
<h2 class="text-[16px] font-medium text-foreground">Tags</h2><ul><li><span>Personal apps</span></li><li><span>whiteboard</span></li></ul><h2>More apps</h2>
{"name":"Excalidraw: Visual whiteboard","images":["https://cdn.21st.dev/oss-apps/231283452/abc/poster-aaa.jpg"],"video":"https://cdn.21st.dev/oss-apps/231283452/abc/video-bbb.mp4","previewHref":"https://excalidraw.com/","previewLabel":"Preview"}
{\"kind\":\"app\",\"id\":9,\"slug\":\"immich\",\"title\":\"Immich\",\"description\":\"Other.\",\"poster\":\"https://cdn.21st.dev/oss-apps/other/poster-zzz.jpg\",\"video\":\"https://cdn.21st.dev/oss-apps/other/video-zzz.mp4\",\"framework\":\"SvelteKit\",\"stars\":10,\"tags\":[],\"license\":\"AGPL-3.0\",\"repoUrl\":\"https://github.com/immich-app/immich\"}
{\"kind\":\"app\",\"id\":231283452,\"slug\":\"excalidraw\",\"title\":\"Excalidraw: Visual whiteboard\",\"description\":\"Sketch diagrams, wireframes, and ideas on an open canvas.\",\"poster\":\"https://cdn.21st.dev/oss-apps/231283452/abc/poster-aaa.jpg\",\"video\":\"https://cdn.21st.dev/oss-apps/231283452/abc/video-bbb.mp4\",\"framework\":\"React\",\"stars\":131561,\"tags\":[\"whiteboard\"],\"license\":\"MIT\",\"repoUrl\":\"https://github.com/excalidraw/excalidraw\"}
`;

  const app = parseAppPage(html, "excalidraw");
  assert.ok(app);
  assert.equal(app.poster, "https://cdn.21st.dev/oss-apps/231283452/abc/poster-aaa.jpg");
  assert.equal(app.poster.includes("hero-3"), false);
  assert.equal(app.video, "https://cdn.21st.dev/oss-apps/231283452/abc/video-bbb.mp4");
  assert.equal(app.demo, "https://excalidraw.com/");
  assert.equal(app.description, "Sketch diagrams, wireframes, and ideas on an open canvas.");
  assert.equal(app.about, "Excalidraw combines shapes and text.");
  assert.equal(app.framework, "React");
  assert.equal(app.stars, 131561);
  assert.equal(app.license, "MIT");
  assert.equal(app.repoUrl, "https://github.com/excalidraw/excalidraw");
  assert.deepEqual(app.tags, ["Personal apps", "whiteboard"]);
  assert.equal(appMeta(app), "React · 131.6K stars");
});

test("parseAppPage keeps a webm recording when the page has no mp4", () => {
  const html = `
<script type="application/ld+json">{"@type":"SoftwareSourceCode","name":"Hash Calendar","description":"A static calendar.","image":"https://cdn.21st.dev/oss-apps/1/a/poster-a.png","video":{"@type":"VideoObject","contentUrl":"https://cdn.21st.dev/oss-apps/1/a/video-b.webm"},"codeRepository":"https://github.com/example/hash-calendar"}</script>
<meta property="og:description" content="Plan a week."/>
{"name":"Hash Calendar","images":["https://cdn.21st.dev/oss-apps/1/a/poster-a.png"],"video":"https://cdn.21st.dev/oss-apps/1/a/video-b.webm","previewHref":"https://hash-calendar.netlify.app/","previewLabel":"Preview"}
<h2>Stack</h2><p>Static HTML</p>
`;
  const app = parseAppPage(html, "hash-calendar");
  assert.equal(app?.video, "https://cdn.21st.dev/oss-apps/1/a/video-b.webm");
  assert.equal(app?.poster, "https://cdn.21st.dev/oss-apps/1/a/poster-a.png");
});
