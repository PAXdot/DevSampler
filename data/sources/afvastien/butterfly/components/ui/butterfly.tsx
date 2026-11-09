"use client"

// AsciiArt — "butterfly", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=80ced8ae-7141-470c-9bb8-510ed44473cb
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_374lp3iKp7GTZcOIZz4zt42R41N/fc8fb255-8ad1-40ac-b568-23e229221fdd.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_374lp3iKp7GTZcOIZz4zt42R41N/646be8b3-96a3-4358-b445-1db00ca35cfc.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"butterfly — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
