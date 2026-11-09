import { ShieldCheck } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertAction,
} from "@/components/ui/alert-with-action-buttons-utils/alert";
import { Button } from "@/components/ui/button";

export default function AlertWithActionButtons() {
  return (
    <Alert>
      <ShieldCheck />
      <AlertDescription>Update your password and enable 2FA.</AlertDescription>
      <AlertAction>
        <Button variant="outline" size="sm">
          Dismiss
        </Button>
        <Button size="sm">Update</Button>
      </AlertAction>
    </Alert>
  );
}
