import assert from "node:assert/strict";
import test from "node:test";
import { parseApps } from "./parse-apps.ts";

test("parseApps reads escaped app objects and drops duplicates", () => {
  const html = String.raw`before {\"kind\":\"app\",\"id\":1,\"slug\":\"immich\",\"title\":\"Immich: Photo\",\"description\":\"Browse, organize.\",\"url\":\"/community/apps/immich\",\"poster\":\"https://cdn.21st.dev/p.jpg\",\"video\":\"https://cdn.21st.dev/v.mp4\",\"framework\":\"SvelteKit\",\"stars\":113713,\"tags\":[\"photos\"],\"license\":\"AGPL-3.0\",\"repoUrl\":\"https://github.com/immich-app/immich\"} {\"kind\":\"app\",\"id\":1,\"slug\":\"immich\",\"title\":\"Immich: Photo\",\"description\":\"Browse, organize.\",\"url\":\"/community/apps/immich\",\"poster\":\"https://cdn.21st.dev/p.jpg\",\"video\":\"\",\"framework\":\"SvelteKit\",\"stars\":10,\"tags\":[],\"license\":\"AGPL-3.0\",\"repoUrl\":\"https://github.com/immich-app/immich\"}`;

  const apps = parseApps(html);
  assert.equal(apps.length, 1);
  assert.equal(apps[0]?.slug, "immich");
  assert.equal(apps[0]?.stars, 113713);
  assert.equal(apps[0]?.framework, "SvelteKit");
  assert.equal(apps[0]?.repoUrl, "https://github.com/immich-app/immich");
});
