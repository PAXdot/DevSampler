"use client"

// AsciiArt — "Aossie Logo", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=bb472d6c-85ff-44c5-b5df-95bf14a1965a
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3H6URayH59FFognGTudD2L8eUz0/0613f4cf-f1c3-4f79-bce2-d95a2cceb6f2.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3H6URayH59FFognGTudD2L8eUz0/fc508483-eb7c-41b6-8822-7d13836d6880.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Aossie Logo — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
