import { CircleCheckIcon } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/icon-alert-utils/alert";

export default function IconAlert() {
  return (
    <Alert>
      <CircleCheckIcon />
      <AlertTitle>Alert!</AlertTitle>
      <AlertDescription>
        This is an alert with icon, title and description.
      </AlertDescription>
    </Alert>
  );
}
