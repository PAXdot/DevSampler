import { Card, CardContent } from "@/components/ui/card";
import { Spinner } from "@/components/ui/v-spinner-6-utils/spinner";

export function Pattern() {
  return (
    <Card className="flex min-h-50 w-full max-w-xs flex-col justify-center">
      <CardContent className="flex grow flex-col items-center justify-center gap-4">
        <Spinner className="size-4 opacity-50" />
        <div className="flex flex-col items-center gap-1">
          <p className="font-medium text-sm">Setting up your workspace</p>
          <p className="text-muted-foreground text-xs">
            This may take a few seconds...
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default Pattern;
