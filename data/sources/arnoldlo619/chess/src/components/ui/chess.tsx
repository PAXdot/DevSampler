"use client"

// AsciiArt — "chess", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=e39b8cc1-802e-4003-9240-f799e5f40fc1
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_2sisNb6Cf8GNAjP393wnJCLVH84/1783561308557-2t4ddi.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_2sisNb6Cf8GNAjP393wnJCLVH84/1783561310965-9zzg7h.png"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"chess — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
