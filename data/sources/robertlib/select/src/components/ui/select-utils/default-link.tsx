import type { LinkComponentProps } from "@/components/ui/select-utils/router";

export default function DefaultLink({ href, ...props }: LinkComponentProps) {
  return <a href={href} {...props} />;
}
