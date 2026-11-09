import { Badge } from "@/components/ui/c-button-45-utils/badge";

import { Button } from "@/components/ui/button";

function Button45() {
  return (
    <Button variant="outline" className="gap-2" aria-label="Messages (12)">
      Messages
      <Badge variant="destructive-outline" size="sm" aria-hidden="true">
        12
      </Badge>
    </Button>
  );
}

export default Button45;
