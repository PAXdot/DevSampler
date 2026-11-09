"use client"

// AsciiArt — "matrix02", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=9c470ba6-1137-4b73-9e1f-413a81ae9911
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3L2kT23NtJvXucc9VADTzZM6ooU/70f01f43-8c18-4379-96a3-bd0aed64a9b1.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3L2kT23NtJvXucc9VADTzZM6ooU/e68f47cf-c3bc-4422-9735-83d12f46f877.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"matrix02 — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
