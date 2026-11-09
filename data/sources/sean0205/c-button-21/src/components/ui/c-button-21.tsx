import { LogOutIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CButton21() {
  return (
    <Button variant="ghost">
      Logout
      <LogOutIcon aria-hidden="true" />
    </Button>
  );
}
