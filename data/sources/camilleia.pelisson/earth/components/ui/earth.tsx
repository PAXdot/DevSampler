"use client"

// AsciiArt — "earth", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=f1821047-ebaa-4dc6-b4d6-cb433652754f
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Fix6InB1bk6aeoacsl7T0fU8kp/57514ef9-f742-4f5b-ad10-14225764d0a9.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Fix6InB1bk6aeoacsl7T0fU8kp/2184bb79-7a23-434f-b246-135cb68c38a4.png"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"earth — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
