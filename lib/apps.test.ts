import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { APP_GROUPS, appFacets, appPlace, groupApps } from "./apps.ts";

test("appPlace reads the 21st group and subsection from the first two tags", () => {
  assert.deepEqual(appPlace(["Personal apps", "Notes", "markdown"]), {
    groupId: "personal",
    sectionId: "notes",
  });
  assert.deepEqual(appPlace(["Business / SaaS", "CRM", "customer"]), {
    groupId: "business",
    sectionId: "crm",
  });
  assert.equal(appPlace(["photos", "albums"]), null);
});

test("every saved app lands in one 21st subsection", () => {
  const ids = new Set<string>();
  for (const group of APP_GROUPS) {
    assert.equal(ids.has(group.id), false);
    ids.add(group.id);
    for (const section of group.sections) {
      assert.equal(ids.has(section.id), false, section.id);
      ids.add(section.id);
    }
  }

  const rows = readFileSync(new URL("../data/catalog.jsonl", import.meta.url), "utf8")
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line) as { type?: string; name?: string; tags?: string[] })
    .filter((row) => row.type === "app");

  const missing = rows.filter((row) => {
    const place = appPlace(row.tags);
    return !place?.groupId || !place.sectionId;
  });
  assert.deepEqual(
    missing.map((row) => `${row.name}: ${(row.tags ?? []).slice(0, 2).join(" / ")}`),
    [],
  );

  const facets = appFacets(rows);
  assert.equal(facets.groups.personal + facets.groups.business, rows.length);
  const grouped = groupApps(rows);
  assert.deepEqual(
    grouped.map((group) => group.id),
    ["personal", "business"],
  );
  assert.equal(
    grouped.reduce((sum, group) => sum + group.sections.reduce((inner, section) => inner + section.items.length, 0), 0),
    rows.length,
  );
});
