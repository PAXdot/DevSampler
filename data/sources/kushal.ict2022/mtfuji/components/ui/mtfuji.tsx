"use client"

// AsciiArt — "mtfuji", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=dbdc3cf0-f082-4d19-b1b9-7955c59eee45
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3BAUCUGvgvkl2oldjJl3MpcOVBD/6c00419a-ee5e-4bf1-a4c0-0ce5531cfbaf.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3BAUCUGvgvkl2oldjJl3MpcOVBD/6c0c2cef-b8ea-48f0-9100-7d56446350cf.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"mtfuji — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
