"use client"

// AsciiArt — "Roman Monolithic", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=62cd160c-d141-4905-a7a1-3981e05be25b
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Huc0lifNrRRTlCXGouaMYtBnCN/6b42580d-c933-4724-8953-3e48a19f6e5e.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Huc0lifNrRRTlCXGouaMYtBnCN/0e258b1a-f096-40c0-9361-e238ac5d4b0e.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Roman Monolithic — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
