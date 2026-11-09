"use client";

import { memo } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function fixNumberedListBreaks(text: string): string {
  return text.replace(/^(\d+)\.\s*\n+\s*\n*/gm, "$1. ");
}

const CODE_FENCE_LANGS = new Set([
  "bash",
  "diff",
  "html",
  "js",
  "json",
  "jsx",
  "md",
  "markdown",
  "sh",
  "shell",
  "text",
  "ts",
  "tsx",
  "yml",
  "yaml",
]);

function normalizeCodeFenceLanguages(text: string): string {
  return text.replace(/```([^\n]*)/g, (_match, langRaw) => {
    const lang = String(langRaw || "").trim().toLowerCase();
    if (!lang) return "```";
    const normalized = lang.split(/\s+/)[0];
    return CODE_FENCE_LANGS.has(normalized) ? `\`\`\`${normalized}` : "```text";
  });
}

export type MarkdownProps = {
  content: string;
  className?: string;
};

const components: Components = {
  h1: ({ children, ...props }) => (
    <h1
      className="text-base font-semibold mt-3 mb-1.5 text-neutral-900 dark:text-neutral-50"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="text-base font-semibold mt-3 mb-1.5 text-neutral-900 dark:text-neutral-50"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="text-sm font-semibold mt-2 mb-1 text-neutral-900 dark:text-neutral-50"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4
      className="text-sm font-medium mt-2 mb-1 text-neutral-900 dark:text-neutral-50"
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p
      className="text-sm leading-relaxed mb-2 text-neutral-700 dark:text-neutral-300"
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul
      className="list-disc list-outside space-y-0.5 text-sm mb-2 pl-4 text-neutral-700 dark:text-neutral-300"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      className="list-decimal list-outside space-y-0.5 text-sm mb-2 pl-5 text-neutral-700 dark:text-neutral-300"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li
      className="text-sm pl-0.5 text-neutral-700 dark:text-neutral-300"
      {...props}
    >
      {children}
    </li>
  ),
  strong: ({ children, ...props }) => (
    <strong
      className="font-medium text-neutral-900 dark:text-neutral-50"
      {...props}
    >
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),
  a: ({ href, children, ...props }) => {
    if (!href) return <span>{children}</span>;
    const isExternal =
      href.startsWith("http") || href.startsWith("mailto:");
    return (
      <a
        {...props}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="hover:underline underline-offset-2 text-blue-600 dark:text-blue-400"
      >
        {children}
      </a>
    );
  },
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="pl-3 italic mb-2 text-sm border-l-2 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400"
      {...props}
    >
      {children}
    </blockquote>
  ),
  hr: ({ ...props }) => (
    <hr
      className="my-4 border-neutral-200 dark:border-neutral-800"
      {...props}
    />
  ),
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto my-3 border border-neutral-200 dark:border-neutral-800 rounded-[10px]">
      <table className="w-full text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead
      className="bg-neutral-100 dark:bg-neutral-900"
      {...props}
    >
      {children}
    </thead>
  ),
  th: ({ children, ...props }) => (
    <th
      className="text-left font-medium px-3 py-2 text-neutral-900 dark:text-neutral-50"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td
      className="px-3 py-2 border-t border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
      {...props}
    >
      {children}
    </td>
  ),
  code: ({ children, className, ...props }) => {
    const isBlock =
      typeof className === "string" && className.startsWith("language-");
    if (isBlock) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
    return (
      <code
        className="px-1 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 text-[0.875em] font-mono text-neutral-800 dark:text-neutral-200"
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }) => (
    <pre
      className="my-3 p-3 rounded-[10px] border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 overflow-x-auto text-xs font-mono text-neutral-800 dark:text-neutral-200"
      {...props}
    >
      {children}
    </pre>
  ),
};

export const Markdown = memo(function Markdown({
  content,
  className,
}: MarkdownProps) {
  const safeContent = normalizeCodeFenceLanguages(
    fixNumberedListBreaks(content),
  );
  return (
    <div className={cn("an-markdown break-words", className)}>
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
        {safeContent}
      </ReactMarkdown>
    </div>
  );
});

export default Markdown;
