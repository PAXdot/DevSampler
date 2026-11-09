"use client"

// AsciiArt — "nehir", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=56cbeed9-727f-48aa-bc48-e08c54b977d4
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3KaK0C9e9ypfDUnjA9uWF7ACRZy/af39ef1e-66b3-4e99-8487-d8e05ba0b93e.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3KaK0C9e9ypfDUnjA9uWF7ACRZy/4ffbea8d-c20f-449e-9bea-785b2719d432.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"nehir — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
