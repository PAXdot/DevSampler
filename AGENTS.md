# ANDA local gallery

Local browser for the saved catalog. Run `npm run dev` and open http://localhost:3000. The gallery reads disk only. It does not call 21st.

Shelves: Components, Templates, Themes, Apps, Icons, Video. The bookmark button writes the item to `data/saved.json`.

`data/catalog.jsonl` is the local catalog. Component source is in `data/sources`. Theme CSS is in `data/themes/{id}.css`. Video blocks are in `data/video.json`, and previews are in `public/media`. Icons search Iconify, which is separate.

When a later chat should use a saved piece:

- Read `data/saved.json`.
- Components: copy the files listed in `data/sources/{author}/{slug}/source.json`.
- Themes: read `data/themes/{id}.css`.
- Do not call 21st, and do not commit `TWENTY_FIRST_API_KEY`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
