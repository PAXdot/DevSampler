import { Gallery } from "@/components/Gallery";
import { Suspense } from "react";

export const metadata = { title: "Video · ANDA" };

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Gallery shelf="video" />
    </Suspense>
  );
}
