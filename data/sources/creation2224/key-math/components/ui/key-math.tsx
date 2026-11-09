"use client"

// AsciiArt — "key_math", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=36b8b0e8-9609-4e4b-8f38-dca39738185f
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Jj8n80EDptHXra2aB7JbKH0rkB/75066d48-064c-4104-bf4f-b37e8a873917.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Jj8n80EDptHXra2aB7JbKH0rkB/6179f1c9-df48-46b5-8e9f-7808d06b9781.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"key_math — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
