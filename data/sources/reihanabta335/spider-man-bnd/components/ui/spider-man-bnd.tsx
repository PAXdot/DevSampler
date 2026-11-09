"use client"

// AsciiArt — "Spider Man BND", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=9056a003-2c0e-4079-bb27-01b5e330c2e2
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Hir8YDQ88PiIxc0JysnpfFkLAA/f1e09ff2-b262-4418-9789-6d187e7dec4e.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Hir8YDQ88PiIxc0JysnpfFkLAA/01304a79-eb67-42b2-a72c-ff70154adcb6.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Spider Man BND — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
