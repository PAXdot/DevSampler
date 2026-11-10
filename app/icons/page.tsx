import { Gallery } from "@/components/Gallery";
import { Suspense } from "react";

export const metadata = { title: { absolute: "Icons · EZPZ Components" } };

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Gallery shelf="icons" />
    </Suspense>
  );
}
