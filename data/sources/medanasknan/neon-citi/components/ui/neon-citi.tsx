"use client"

// AsciiArt — "neon citi", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=83197b13-b069-4f33-b2fb-89039e7ccee9
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GBzAKrJNPm2lZ21TUsBSXZVEsJ/6e20a8bf-a355-4ad8-9636-314aad4dce9d.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GBzAKrJNPm2lZ21TUsBSXZVEsJ/520002f5-a297-4aa7-9bb1-2c5859f10e10.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"neon citi — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
