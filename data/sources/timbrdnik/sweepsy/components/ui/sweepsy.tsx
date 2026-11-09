"use client"

// AsciiArt — "Sweepsy", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=f24ce7fe-5896-4099-b3ae-553e9b94673f
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3CwBfaA1wcPxUrfxnPpwEGPEZ2Z/746e8372-50eb-466a-8917-1eac5231a682.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3CwBfaA1wcPxUrfxnPpwEGPEZ2Z/30f859e2-ed6a-4b95-9137-9dac47149308.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Sweepsy — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
