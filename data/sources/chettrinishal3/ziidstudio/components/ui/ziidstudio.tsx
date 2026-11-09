"use client"

// AsciiArt — "ziidstudio", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=638b978c-42b7-486d-b049-ba3e3dbaf115
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Git8S6IUdHcR6dkDFTo8kq5BrY/d1944a7f-0510-40fc-bc6b-79fbaeee6826.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Git8S6IUdHcR6dkDFTo8kq5BrY/ffe48bad-a3ec-4654-bb41-e4418f8f0324.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"ziidstudio — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
