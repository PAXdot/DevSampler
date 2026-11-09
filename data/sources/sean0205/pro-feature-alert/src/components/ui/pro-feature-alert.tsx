import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/pro-feature-alert-utils/alert";
import {
  Frame,
  FramePanel,
} from "@/components/ui/pro-feature-alert-utils/frame";
import { Button } from "@/components/ui/pro-feature-alert-utils/button";
import { ZapIcon } from "lucide-react";

function ProFeatureAlert() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Frame>
        <FramePanel className="overflow-hidden p-0!">
          <Alert variant="invert" className="border-0 shadow-none">
            <ZapIcon className="text-yellow-500" />
            <AlertTitle>Pro Feature</AlertTitle>
            <AlertAction>
              <Button
                variant="outline"
                size="xs"
                className="bg-background/10 border-border/10"
              >
                Dismiss
              </Button>
              <Button
                size="xs"
                className="border-blue-800 bg-blue-500 text-white hover:border-blue-900 hover:bg-blue-600"
              >
                Upgrade
              </Button>
            </AlertAction>
            <AlertDescription>
              This feature is only available for Pro users. Upgrade your plan to
              get access.
            </AlertDescription>
          </Alert>
        </FramePanel>
      </Frame>
    </div>
  );
}

export default ProFeatureAlert;
