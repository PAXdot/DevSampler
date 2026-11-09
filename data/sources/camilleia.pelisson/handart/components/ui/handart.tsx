"use client"

// AsciiArt — "HandArt", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=1201f566-e32c-415e-946a-ae258a270c10
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Fix6InB1bk6aeoacsl7T0fU8kp/d482aba6-6a57-4927-b931-d19785e683b9.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Fix6InB1bk6aeoacsl7T0fU8kp/ed258d95-c43e-49cb-ae8f-e0419ece1937.png"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"HandArt — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
