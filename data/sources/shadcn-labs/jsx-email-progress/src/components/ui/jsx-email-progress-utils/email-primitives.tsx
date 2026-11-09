import type { CSSProperties, ReactNode } from "react";

/**
 * Minimal browser-safe stand-ins for the "jsx-email" components used by this
 * component. The real `jsx-email` package is a Node-only email rendering
 * toolchain (it pulls in vite/esbuild/tailwind/etc. and Node builtins like
 * `node:url`), which cannot be bundled for a browser preview. These shims
 * reproduce just the markup/behavior this component relies on.
 */

interface BaseProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export const Html = ({ children, className, style }: BaseProps) => (
  <div className={className} style={style}>
    {children}
  </div>
);

export const Head = ({ children }: BaseProps) => <>{children}</>;

export const Body = ({ children, style, className }: BaseProps) => (
  <div className={className} style={style}>
    {children}
  </div>
);

export const Preview = ({ children }: { children?: ReactNode }) => (
  <div
    style={{
      display: "none",
      lineHeight: "1px",
      maxHeight: 0,
      maxWidth: 0,
      opacity: 0,
      overflow: "hidden",
    }}
  >
    {children}
  </div>
);

export const Section = ({ children, style, className }: BaseProps) => (
  <table
    align="center"
    width="100%"
    role="presentation"
    border={0}
    cellPadding="0"
    cellSpacing="0"
    style={style}
    className={className}
  >
    <tbody>
      <tr>
        <td>{children}</td>
      </tr>
    </tbody>
  </table>
);

export const Row = ({ children, style, className }: BaseProps) => (
  <table
    align="center"
    width="100%"
    role="presentation"
    border={0}
    cellPadding="0"
    cellSpacing="0"
    style={style}
    className={className}
  >
    <tbody style={{ width: "100%" }}>
      <tr style={{ width: "100%" }}>{children}</tr>
    </tbody>
  </table>
);

interface ColumnProps extends BaseProps {
  width?: number | string;
}

export const Column = ({ children, style, className, width }: ColumnProps) => (
  <td width={width} style={style} className={className}>
    {children}
  </td>
);

interface HeadingProps extends BaseProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = ({ as: Tag = "h1", children, style }: HeadingProps) => (
  <Tag style={style}>{children}</Tag>
);

export const Text = ({ children, style, className }: BaseProps) => (
  <p
    style={{ fontSize: "14px", lineHeight: "24px", margin: "16px 0", ...style }}
    className={className}
  >
    {children}
  </p>
);

interface FontProps {
  fontFamily: string;
  fallbackFontFamily: string | string[];
  webFont?: { url: string; format: string };
  fontStyle?: string;
  fontWeight?: number | string;
}

export const Font = ({
  fontFamily,
  fallbackFontFamily,
  webFont,
  fontStyle = "normal",
  fontWeight = 400,
}: FontProps) => {
  const src = webFont ? `src: url(${webFont.url}) format('${webFont.format}');` : "";
  const fallback = Array.isArray(fallbackFontFamily)
    ? fallbackFontFamily.join(", ")
    : fallbackFontFamily;
  const style = `
    @font-face {
      font-family: '${fontFamily}';
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
      ${src}
    }
  `;
  return <style dangerouslySetInnerHTML={{ __html: style }} />;
};

export interface TailwindProps {
  children?: ReactNode;
  config?: Record<string, unknown>;
}

export const Tailwind = ({ children }: TailwindProps) => <>{children}</>;
