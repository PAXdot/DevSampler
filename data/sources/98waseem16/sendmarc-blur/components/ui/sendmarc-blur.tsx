"use client"

// AsciiArt — "sendmarc blur", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=8cf7c033-a37f-4f3b-ad28-a925c2e39935
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_2xE3voysFk5Q9mQogSOPSKec5AR/1f9f6189-273e-4bc7-af70-3cde7ce11201.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_2xE3voysFk5Q9mQogSOPSKec5AR/95efd5ba-bee8-4145-9175-92e7c54eecfa.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"sendmarc blur — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
