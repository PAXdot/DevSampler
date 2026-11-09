"use client"

// AsciiArt — "Durham Coded", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=f2d27c9a-3867-46fd-a38a-2578e7757a48
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3FXAvWSvMBcRc48MpNBSTPIUOgG/e1c27194-1612-4bdc-aab9-fb07e8663fbf.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3FXAvWSvMBcRc48MpNBSTPIUOgG/dd69d332-1daa-4b21-9b3f-ec035a5bfeff.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Durham Coded — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
