import { Button } from "@/components/ui/loading-button-spinner-utils/button";
import { Spinner } from "@/components/ui/loading-button-spinner-utils/spinner";

export default function Particle() {
  return (
    <Button disabled>
      <Spinner />
      Loading...
    </Button>
  );
}
