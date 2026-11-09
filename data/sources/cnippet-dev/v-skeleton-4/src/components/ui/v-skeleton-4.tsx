import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/v-skeleton-4-utils/card";
import { Skeleton } from "@/components/ui/v-skeleton-4-utils/skeleton";

export function Pattern() {
  return (
    <div className="mx-auto grid w-full max-w-lg grid-cols-3 gap-4">
      {Array.from({ length: 3 }).map((_, i) => {
        const k = `skeleton-card-${i}`;
        return (
          <Card key={k}>
            <CardHeader className="pb-2">
              <Skeleton className="h-3 w-16" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-7 w-24" />
              <Skeleton className="h-3 w-20" />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default Pattern;
