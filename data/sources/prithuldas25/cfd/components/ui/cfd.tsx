"use client"

// AsciiArt — "cfd", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=7ad92e95-5663-49bb-880a-86ade28dc893
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3LDFLxMzqZL4tFBfnC058eT2k4o/3447f84a-51d2-4f7e-8501-29111dedb082.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3LDFLxMzqZL4tFBfnC058eT2k4o/3c39a29e-01cb-40c4-a682-ce6026bc4d89.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"cfd — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
