"use client"

// AsciiArt — "2 ASCII", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=73ee8257-4261-4c33-8620-4d5100a0ff6d
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3IFqATTbQAw3XKxhoQ6O6wweR7z/37de80ed-7368-42ff-9458-6c05a20f218a.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3IFqATTbQAw3XKxhoQ6O6wweR7z/19d8e75d-6ee7-44e0-ae48-01a84a17eb21.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"2 ASCII — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
