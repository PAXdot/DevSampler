"use client"

// AsciiArt — "crab", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=d5228ada-de3e-411d-bbd6-5d2b6b5b0190
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3IBpKFZKpAjsTVkip9JVUOnrcZl/6d85af53-2b61-4cde-9a3e-92a26caa26d6.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3IBpKFZKpAjsTVkip9JVUOnrcZl/5da14334-e942-40dd-94f9-e822741d1316.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"crab — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
