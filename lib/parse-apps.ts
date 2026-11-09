export type AppRecord = {
  id: number;
  slug: string;
  title: string;
  description: string;
  url: string;
  poster: string;
  video: string;
  framework: string;
  stars: number;
  license: string;
  repoUrl: string;
};

export function formatStars(stars: number): string {
  if (stars < 1000) return String(stars);
  const value = stars / 1000;
  const digits = value >= 1000 ? 0 : 1;
  return `${value.toFixed(digits)}K`;
}

function scanObject(text: string, start: number): number {
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = start; index < text.length; index++) {
    const char = text[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === '"') inString = true;
    else if (char === "{") depth++;
    else if (char === "}") {
      depth--;
      if (depth === 0) return index + 1;
    }
  }
  return -1;
}

export function parseApps(html: string): AppRecord[] {
  const decoded = html.replace(/\\"/g, '"');
  const needle = '{"kind":"app"';
  const apps: AppRecord[] = [];
  const seen = new Set<string>();
  let from = 0;

  while (from < decoded.length) {
    const start = decoded.indexOf(needle, from);
    if (start === -1) break;
    const end = scanObject(decoded, start);
    if (end === -1) {
      from = start + needle.length;
      continue;
    }
    try {
      const raw = JSON.parse(decoded.slice(start, end)) as Record<string, unknown>;
      const slug = typeof raw.slug === "string" ? raw.slug : "";
      if (slug && !seen.has(slug)) {
        seen.add(slug);
        apps.push({
          id: typeof raw.id === "number" ? raw.id : 0,
          slug,
          title: typeof raw.title === "string" ? raw.title : slug,
          description: typeof raw.description === "string" ? raw.description : "",
          url: typeof raw.url === "string" ? raw.url : `/community/apps/${slug}`,
          poster: typeof raw.poster === "string" ? raw.poster : "",
          video: typeof raw.video === "string" ? raw.video : "",
          framework: typeof raw.framework === "string" ? raw.framework : "",
          stars: typeof raw.stars === "number" ? raw.stars : 0,
          license: typeof raw.license === "string" ? raw.license : "",
          repoUrl: typeof raw.repoUrl === "string" ? raw.repoUrl : "",
        });
      }
    } catch {
      // The public page sometimes repeats a truncated copy of the same object.
    }
    from = end;
  }

  // shortcut: the public apps page only embeds the first batch (~48), upgrade when 21st exposes the rest.
  return apps;
}
