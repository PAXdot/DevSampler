import { CircleAlertIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/v-alert-7-utils/alert";

export default function Particle() {
  return (
    <Alert variant="error">
      <CircleAlertIcon />
      <AlertTitle>Error!</AlertTitle>
      <AlertDescription>
        Please try again. If the problem persists, contact support.
      </AlertDescription>
    </Alert>
  );
}
