"use client"

// AsciiArt — "test2", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=768bee7d-b215-419b-b213-30c85df2478a
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HbQpat5MTyFxZAplQS1DTjzaFE/4adb3391-34a2-4b6f-a866-c847fa3e1053.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HbQpat5MTyFxZAplQS1DTjzaFE/1795fa2f-f484-425e-8519-4b43be5945ef.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"test2 — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
