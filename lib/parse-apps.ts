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
  tags: string[];
};

export type AppPage = {
  slug: string;
  name: string;
  description: string;
  about: string;
  poster: string;
  video: string;
  demo: string;
  framework: string;
  stars: number;
  starsLabel: string;
  license: string;
  repoUrl: string;
  tags: string[];
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
          tags: stringList(raw.tags),
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

export function appMeta(app: Pick<AppPage, "framework" | "stars" | "starsLabel">): string {
  const stars =
    app.stars > 0
      ? `${formatStars(app.stars)} stars`
      : app.starsLabel
        ? `${app.starsLabel.replace(/\s*stars$/i, "")} stars`
        : "";
  return [app.framework, stars].filter(Boolean).join(" · ");
}

export function parseAppPage(html: string, slug: string): AppPage | null {
  const decoded = decodePayload(html);
  const linked = softwareSource(decoded);
  const embedded = parseApps(html).find((app) => app.slug === slug);
  const preview = pickPreview(decoded, linked?.image ?? "", linked?.name ?? embedded?.title ?? "");
  const poster = firstPoster([...(preview?.images ?? []), linked?.image ?? "", embedded?.poster ?? ""]);
  const video = firstVideo(preview?.video ?? "", linked?.video ?? "", embedded?.video ?? "");
  const name = linked?.name || embedded?.title || titleFrom(decoded, slug);
  if (!name && !poster) return null;

  const about = linked?.description || "";
  const description =
    metaContent(decoded, "og:description") ||
    embedded?.description ||
    about;
  const stack = sectionParagraphs(decoded, "Stack");
  const framework = stack[0] || embedded?.framework || "";
  const license = licenseName(sectionAfter(decoded, "License")) || embedded?.license || "";
  const tags = unique([
    ...sectionLabels(sectionAfter(decoded, "Tags")),
    ...(embedded?.tags ?? []),
  ]);
  const repoUrl = linked?.repo || embedded?.repoUrl || githubLink(sectionAfter(decoded, "Source"));
  const demo = externalDemo(preview?.demo ?? "");
  const starsLabel = visibleStars(decoded);
  const stars = embedded?.stars ?? 0;

  return {
    slug,
    name: name || slug,
    description,
    about,
    poster,
    video,
    demo,
    framework,
    stars,
    starsLabel,
    license,
    repoUrl,
    tags,
  };
}

function stringList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
}

function decodePayload(html: string): string {
  return html
    .replace(/\\"/g, '"')
    .replace(/\\u0026/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function metaContent(html: string, name: string): string {
  const pattern = new RegExp(`${name}" content="([^"]*)"`, "i");
  return decodePayload(html.match(pattern)?.[1] ?? "").trim();
}

function titleFrom(html: string, slug: string): string {
  const raw = html.match(/<title>([^<]+)/)?.[1] ?? "";
  const title = raw
    .replace(/\s+\|\s+21st.*$/i, "")
    .replace(/\s+\|\s+(Templates|Themes|Components|Open-source Apps)$/i, "")
    .trim();
  return title || slug.replaceAll("-", " ");
}

type LinkedApp = {
  name: string;
  description: string;
  image: string;
  video: string;
  repo: string;
};

function softwareSource(html: string): LinkedApp | null {
  const pattern = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  for (const match of html.matchAll(pattern)) {
    try {
      const data = JSON.parse(match[1]) as Record<string, unknown>;
      if (data["@type"] !== "SoftwareSourceCode") continue;
      const video = data.video;
      const contentUrl =
        video && typeof video === "object" && "contentUrl" in video && typeof video.contentUrl === "string"
          ? video.contentUrl
          : "";
      return {
        name: typeof data.name === "string" ? data.name : "",
        description: typeof data.description === "string" ? data.description : "",
        image: typeof data.image === "string" ? data.image : "",
        video: contentUrl,
        repo: typeof data.codeRepository === "string" ? data.codeRepository : "",
      };
    } catch {
      // A repeated flight payload can cut the same block short.
    }
  }
  return null;
}

type PreviewBlock = { name: string; images: string[]; video: string; demo: string };

function pickPreview(html: string, imageHint: string, nameHint: string): PreviewBlock | null {
  const blocks: PreviewBlock[] = [];
  const pattern =
    /"name":"([^"]*)","images":(\[[^\]]*\]),"video":"([^"]*)","previewHref":"([^"]*)"/g;
  for (const match of html.matchAll(pattern)) {
    let images: string[] = [];
    try {
      const parsed = JSON.parse(match[2]) as unknown;
      if (Array.isArray(parsed)) images = parsed.filter((item): item is string => typeof item === "string");
    } catch {
      images = [];
    }
    blocks.push({ name: match[1], images, video: match[3], demo: match[4] });
  }
  if (blocks.length === 0) return null;
  return (
    blocks.find((block) => imageHint && block.images.includes(imageHint)) ||
    blocks.find((block) => nameHint && block.name === nameHint) ||
    blocks.find((block) => block.images.some(isAppPoster)) ||
    blocks[0]
  );
}

function firstPoster(candidates: string[]): string {
  const urls = candidates.filter(Boolean);
  return urls.find(isAppPoster) || urls.find((url) => url.includes("/oss-apps/")) || "";
}

function firstVideo(...candidates: string[]): string {
  return candidates.find(isAppVideo) || "";
}

function isAppPoster(url: string): boolean {
  return url.includes("/oss-apps/") && /\/poster[-.]/i.test(url);
}

function isAppVideo(url: string): boolean {
  return url.includes("/oss-apps/") && /\.(?:mp4|webm)(?:$|\?)/i.test(url);
}

function externalDemo(url: string): string {
  if (!url.startsWith("http") || /21st\.dev/i.test(url)) return "";
  return url;
}

function sectionAfter(html: string, heading: string): string {
  const pattern = new RegExp(`<h2[^>]*>\\s*${heading}\\s*</h2>([\\s\\S]*?)(?=<h2|$)`, "i");
  let body = html.match(pattern)?.[1] ?? "";
  if (heading === "Tags") {
    const end = body.indexOf("</ul>");
    if (end !== -1) body = body.slice(0, end);
  }
  return body;
}

function sectionParagraphs(html: string, heading: string): string[] {
  return [...sectionAfter(html, heading).matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
    .map((match) => stripTags(match[1]))
    .filter(Boolean);
}

function sectionLabels(section: string): string[] {
  return [...section.matchAll(/<(?:span|a)[^>]*>([^<]+)<\/(?:span|a)>/g)]
    .map((match) => stripTags(match[1]))
    .filter((label) => label.length > 0 && label.length < 80);
}

function licenseName(section: string): string {
  const link = section.match(/<a[^>]*>([^<]+)<\/a>/)?.[1] ?? "";
  const name = stripTags(link);
  if (name && name.length < 40 && !name.startsWith("http")) return name;
  return "";
}

function githubLink(section: string): string {
  return section.match(/https:\/\/github\.com\/[^"'\s<]+/)?.[0] ?? "";
}

function visibleStars(html: string): string {
  const match = html.match(
    /lucide-star[\s\S]{0,2000}?<\/svg>\s*(?:<!--\s*-->)?\s*([0-9][\d,]*(?:\.\d+)?[KMB]?)/i,
  );
  return match?.[1]?.replace(/,/g, "") ?? "";
}

function stripTags(value: string): string {
  return value.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function unique(values: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const value of values) {
    const key = value.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(value);
  }
  return result;
}
