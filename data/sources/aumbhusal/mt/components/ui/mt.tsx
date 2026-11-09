"use client"

// AsciiArt — "mt", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=d180918d-8ade-449e-bff1-3dd9690eb908
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3DOzWxNHTJ21ZO7EQhTsrYRfL5Y/2ab4d70c-c951-432a-a079-2739c864b38a.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3DOzWxNHTJ21ZO7EQhTsrYRfL5Y/9d35f23f-b498-4f6a-9728-fd3f8d6ffd95.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"mt — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
