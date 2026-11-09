import type { LinkComponentProps } from "@/components/ui/timeline-utils/router";

export default function DefaultLink({ href, ...props }: LinkComponentProps) {
  return <a href={href} {...props} />;
}
