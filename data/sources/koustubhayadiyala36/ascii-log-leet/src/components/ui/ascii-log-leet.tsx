"use client"

// AsciiArt — "ASCII log leet", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=6f959e72-b49c-4f1e-913e-d8c05d678ab3
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_35NAal4ngoiwl586UuIyinZjTsG/bcd90453-febb-4757-a2fd-387fcdd0b17a.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_35NAal4ngoiwl586UuIyinZjTsG/b732d510-cc6f-4404-b9a4-04109f4e3c5a.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"ASCII log leet — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
