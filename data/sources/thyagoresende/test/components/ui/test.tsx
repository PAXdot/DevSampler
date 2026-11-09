"use client"

// AsciiArt — "test", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=3a6aa4f5-5007-4f47-832d-7468ef01ae31
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HbQpat5MTyFxZAplQS1DTjzaFE/413ce53f-2a49-47d8-b02f-87adcd4f6bf5.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HbQpat5MTyFxZAplQS1DTjzaFE/355dbc2f-7596-4066-a74c-eebe40000279.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"test — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
