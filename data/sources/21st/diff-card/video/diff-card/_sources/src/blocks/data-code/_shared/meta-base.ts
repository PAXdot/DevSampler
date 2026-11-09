// Built with Remotion - https://remotion.pro/license
// Fields every data-code block manifest shares.

export const metaBase = (study: string) =>
  ({
    spec: "21st.video/1",
    engines: { remotion: ">=4.0.479 <5" },
    render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
    provenance: { origin: "own", license: "MIT", sourceUrl: `21st first-party (motion study ${study}, twitter-remotion-research)` },
  }) as const;
