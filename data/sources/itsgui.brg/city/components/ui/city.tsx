"use client"

// AsciiArt — "City", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=e26496eb-0f05-41f3-a729-4468e0f871e2
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HNp1mMV57OGfJ6YAsha1I037iH/5a5066c6-4c16-49a8-a425-2a799e182105.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HNp1mMV57OGfJ6YAsha1I037iH/2208029d-0340-4c7b-879b-aad4ad7be7a3.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"City — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
