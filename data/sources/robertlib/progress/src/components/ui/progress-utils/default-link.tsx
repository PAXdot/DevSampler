import type { LinkComponentProps } from "./router";

export default function DefaultLink({ href, ...props }: LinkComponentProps) {
  return <a href={href} {...props} />;
}
