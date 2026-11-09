"use client"

// AsciiArt — "thread light", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=7001ac36-260f-4f13-b9b4-8f5f6b02e546
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GfOHB2dxQI7kZ41USLqxbqthoO/2362a5ef-e714-472e-84ee-a66e4e977eb0.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GfOHB2dxQI7kZ41USLqxbqthoO/bbbe6e96-d766-4602-aae0-5d96875ce726.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"thread light — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
