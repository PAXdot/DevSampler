import { Gallery } from "@/components/Gallery";
import { Suspense } from "react";

export const metadata = { title: "Templates · ANDA" };

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Gallery shelf="templates" />
    </Suspense>
  );
}
