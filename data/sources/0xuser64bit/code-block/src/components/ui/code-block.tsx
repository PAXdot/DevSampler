import { CopyButton } from "./code-block-utils/copy-button";

export interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export default function CodeBlock({
  code,
  language = "text",
  filename,
  className = "",
}: CodeBlockProps) {
  return (
    <figure className={`mizu-code-block ${className}`}>
      <figcaption>
        <span>{filename ?? language}</span>
        <CopyButton text={code} aria-label="Copy code">
          Copy
        </CopyButton>
      </figcaption>
      <pre
        tabIndex={0}
        role="region"
        aria-label={filename ?? `${language} code`}
      >
        <code>{code}</code>
      </pre>
    </figure>
  );
}
