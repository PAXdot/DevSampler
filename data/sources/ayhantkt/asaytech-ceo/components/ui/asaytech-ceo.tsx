"use client"

// AsciiArt — "ASAYTECH CEO", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=3d9414fe-f6e1-44fd-911c-927a8fa75842
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_34IQN68ye84ZZm7VuFGiWcYxrBJ/db631c11-527f-4092-9c43-a28f3cf8f19a.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_34IQN68ye84ZZm7VuFGiWcYxrBJ/5af44f7c-3da8-4a43-81ab-6620daa6fade.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"ASAYTECH CEO — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
