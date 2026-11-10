export const APP_GROUPS = [
  {
    id: "personal",
    label: "Personal apps",
    sections: [
      { id: "everyday-utilities", label: "Everyday utilities" },
      { id: "notes", label: "Notes" },
      { id: "personal-finance", label: "Personal finance" },
      { id: "files-and-sync", label: "Files and sync" },
      { id: "bookmarks-and-reading", label: "Bookmarks and reading" },
      { id: "camera-and-photos", label: "Camera and photos" },
      { id: "music-and-media", label: "Music and media" },
      { id: "health-and-fitness", label: "Health and fitness" },
      { id: "calendars", label: "Calendars" },
      { id: "tasks-and-habits", label: "Tasks and habits" },
      { id: "messaging", label: "Messaging" },
      { id: "learning", label: "Learning" },
    ],
  },
  {
    id: "business",
    label: "Business / SaaS",
    sections: [
      { id: "analytics", label: "Analytics" },
      { id: "commerce", label: "Commerce" },
      { id: "automation", label: "Automation" },
      { id: "marketing", label: "Marketing" },
      { id: "team-knowledge", label: "Team knowledge" },
      { id: "project-management", label: "Project management" },
      { id: "booking-and-scheduling", label: "Booking and scheduling" },
      { id: "customer-support", label: "Customer support" },
      { id: "crm", label: "CRM" },
      { id: "team-messaging", label: "Team messaging" },
      { id: "forms-and-surveys", label: "Forms and surveys" },
      { id: "invoices-and-accounting", label: "Invoices and accounting" },
      { id: "people-and-hr", label: "People and HR" },
    ],
  },
] as const;

export type AppGroupId = (typeof APP_GROUPS)[number]["id"];
export type AppSectionId = (typeof APP_GROUPS)[number]["sections"][number]["id"];

export type AppFacets = {
  groups: Record<string, number>;
  sections: Record<string, number>;
};

export function appGroup(id: string) {
  return APP_GROUPS.find((group) => group.id === id);
}

export function appSection(id: string) {
  for (const group of APP_GROUPS) {
    const section = group.sections.find((item) => item.id === id);
    if (section) return { group, section };
  }
  return undefined;
}

export function appPlace(tags: string[] | undefined): { groupId: string; sectionId: string } | null {
  const group = APP_GROUPS.find((item) => item.label === tags?.[0]);
  if (!group) return null;
  const section = group.sections.find((item) => item.label === tags?.[1]);
  return { groupId: group.id, sectionId: section?.id ?? "" };
}

export function appFacets(items: { tags?: string[] }[]): AppFacets {
  const groups: Record<string, number> = {};
  const sections: Record<string, number> = {};
  for (const group of APP_GROUPS) {
    groups[group.id] = 0;
    for (const section of group.sections) sections[section.id] = 0;
  }
  for (const item of items) {
    const place = appPlace(item.tags);
    if (!place) continue;
    groups[place.groupId] += 1;
    if (place.sectionId) sections[place.sectionId] += 1;
  }
  return { groups, sections };
}

export function groupApps<T extends { tags?: string[] }>(items: T[]) {
  const groups: { id: string; label: string; sections: { id: string; label: string; items: T[] }[] }[] = APP_GROUPS.map((group) => ({
    id: group.id,
    label: group.label,
    sections: group.sections.map((section) => ({
      id: section.id,
      label: section.label,
      items: [] as T[],
    })),
  }));
  const sectionById = new Map(groups.flatMap((group) => group.sections.map((section) => [section.id, section])));

  for (const item of items) {
    const place = appPlace(item.tags);
    if (!place) continue;
    if (place.sectionId) {
      sectionById.get(place.sectionId)?.items.push(item);
      continue;
    }
    const label = item.tags?.[1]?.trim();
    if (!label) continue;
    const group = groups.find((entry) => entry.id === place.groupId);
    if (!group) continue;
    const id = `${place.groupId}:${label}`;
    let bucket = group.sections.find((section) => section.id === id);
    if (!bucket) {
      bucket = { id, label, items: [] };
      group.sections.push(bucket);
    }
    bucket.items.push(item);
  }

  return groups
    .map((group) => ({ ...group, sections: group.sections.filter((section) => section.items.length > 0) }))
    .filter((group) => group.sections.length > 0);
}
