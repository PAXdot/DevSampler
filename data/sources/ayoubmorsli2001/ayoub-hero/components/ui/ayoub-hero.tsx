"use client"

// AsciiArt — "ayoub hero", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=7335e6b6-72ee-4aee-beaf-b2fa2b80ccc1
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3ITXikLSbRFUIUzqOooimA9MyG7/a6725ca4-94c0-4aae-80df-0a36973f08f9.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3ITXikLSbRFUIUzqOooimA9MyG7/84a52429-13b8-4c16-bcb5-addc271d10cc.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"ayoub hero — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
