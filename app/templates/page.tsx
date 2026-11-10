import { Gallery } from "@/components/Gallery";
import { Suspense } from "react";

export const metadata = { title: { absolute: "Templates · EZPZ Components" } };

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Gallery shelf="templates" />
    </Suspense>
  );
}
