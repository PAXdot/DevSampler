import { toast } from "sonner";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/c-sonner-17-utils/avatar";
import { Button } from "@/components/ui/c-sonner-17-utils/button";
import { Separator } from "@/components/ui/c-sonner-17-utils/separator";

const reviewers = [
  {
    name: "Alex Johnson",
    avatar:
      "https://cdn.21st.dev/assets/mirror/7a/7a441860d9b014f1d071006b567655c4fa0d3f45a693dcaa6a765ccd5953f7f0.jpg",
    initials: "AJ",
  },
  {
    name: "Sarah Chen",
    avatar:
      "https://cdn.21st.dev/assets/mirror/30/3046299adaf36760e400c8c71d6f738d8dbec09de899c2b15eba88fcaa8d4ef0.jpg",
    initials: "SC",
  },
  {
    name: "David Kim",
    avatar:
      "https://cdn.21st.dev/assets/mirror/d7/d7e11fabd9762b998c690c7152c7c482f0ae443df7bb17497dcd6cbe83cca8b5.jpg",
    initials: "DK",
  },
];

export function Pattern() {
  const showToast = () => {
    toast.custom(() => (
      <div className="bg-invert text-invert-foreground rounded-md flex w-[356px] flex-col gap-3 border border-transparent p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Pull Request #284</p>
          <span className="text-invert-foreground/40 text-xs">2m ago</span>
        </div>
        <p className="text-invert-foreground/70 text-sm">
          All reviewers approved. Ready to merge into{" "}
          <code className="bg-background/10 rounded px-1 py-0.5 font-mono text-xs">
            main
          </code>
        </p>
        <Separator className="bg-border/10" />
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {reviewers.map((reviewer) => (
              <Avatar
                key={reviewer.name}
                className="border-invert size-6 border-2"
              >
                <AvatarImage src={reviewer.avatar} alt={reviewer.name} />
                <AvatarFallback className="text-[10px]">
                  {reviewer.initials}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              size="xs"
              variant="outline"
              className="bg-background/10 border-border/10 text-invert-foreground"
              onClick={() => toast.dismiss()}
            >
              View
            </Button>
            <Button
              size="xs"
              className="border-green-800 bg-green-500 text-white hover:border-green-900 hover:bg-green-600"
              onClick={() => {
                toast.dismiss();
                toast.success("Merged successfully");
              }}
            >
              Merge
            </Button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex items-center justify-center">
      <Button
        onClick={showToast}
        variant="outline"
        className="w-fit"
        data-pr-merge-toast-trigger
      >
        PR Merge Toast
      </Button>
    </div>
  );
}
export default Pattern;
