import * as React from "react";

interface StudioDisplayProps {
  children: React.ReactNode;
  className?: string;

  /** Phone variant/model */
  variant?: "studio-display" | "studio-display-xdr";

  /** Phone size */
  size?: "sm" | "md" | "lg" | "xl";

  /** Frame color */
  color?: "light" | "dark";
 
}

type PhoneVariant = StudioDisplayProps["variant"];
type PhoneColor = StudioDisplayProps["color"];

const studioDisplayImages: Record<
  NonNullable<PhoneVariant>,
  Record<NonNullable<PhoneColor>, string>
> = {
  "studio-display": {
    dark:
      "https://cdn.21st.dev/assets/localized/1ec57ddfb39966ae304f8dae5915bffd5c186dd8078daee375791d00e94718fc.png",
    light:
      "https://cdn.21st.dev/assets/localized/0c1ea9155a9081cde6a08fbf1f13744132691ebb169e9360416de14bd52b7a59.png",
  },
  "studio-display-xdr": {
    dark:
      "https://cdn.21st.dev/assets/localized/054fc2ebde0361d24db8b86c8c106b2901bbd1cd1bd02b5b92bf267ca1781471.png",
    light:
      "https://cdn.21st.dev/assets/localized/22febf34ca73fc1dd6275edd83dc3091253e8b8bb5a389e4fc93ca14bf780ab1.png",
  },
};

const sizeClasses = {
  sm: "h-[16rem]",
  md: "h-[24rem]",
  lg: "h-[32rem]",
  xl: "h-[48rem]",
};

const roundedClasses = {
  sm: "rounded-[10px]",
  md: "rounded-[10px]",
  lg: "rounded-[10px]",
  xl: "rounded-[10px]",
};

export function StudioDisplay({
  children,
  className = "",
  variant = "studio-display",
  size = "md",
  color = "dark", 
}: StudioDisplayProps) {
  const defaultImage = studioDisplayImages[variant][color];
  const frameImage = defaultImage;

  return (
    <div
      className={`
        relative inline-block
        ${sizeClasses[size]}
        aspect-[16/9]
        ${className}
      `}
    >
      <img
        src={frameImage}
        alt={"Studio Display"}
        className="pointer-events-none absolute inset-0 z-10 h-full w-full select-none object-contain"
      />

      <div
        className={`
          absolute left-[15%] right-[15%] top-[3%] bottom-[26%] overflow-hidden bg-background
          ${roundedClasses[size]}
        `}
      >
        <div className="h-full w-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}