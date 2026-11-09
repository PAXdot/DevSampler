"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  IconAlertTriangle,
  IconCheck,
  IconClock,
  IconDownload,
  IconFile,
  IconFileMusic,
  IconFileText,
  IconFileZip,
  IconPhoto,
  IconRefresh,
  IconVideo,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

/* ─── Types ─────────────────────────────────────────────────── */

export type AttachmentVariant =
  "compact" | "preview" | "upload" | "removable" | "download";
export type AttachmentStatus =
  "idle" | "pending" | "uploading" | "processing" | "success" | "error";

export interface AttachmentProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onError"
> {
  variant?: AttachmentVariant;
  fileName: string;
  /** Bytes, or a pre-formatted string like "2.4 MB". */
  fileSize?: number | string;
  /** Image URL shown as a thumbnail instead of the file-type icon (variant="preview"). */
  thumbnailSrc?: string;
  /** 0-100. Shown as trailing text when status is "uploading". */
  progress?: number;
  status?: AttachmentStatus;
  errorMessage?: string;
  onRetry?: () => void;
  /** Shows a remove button. Defaults to true for variant="removable". */
  removable?: boolean;
  onRemove?: () => void;
  /** Shows a download button/link. Defaults to true for variant="download". */
  downloadHref?: string;
  onDownload?: () => void;
}

/** Library-neutral icon surface for remaining pack icons + internal MIME glyphs. */
type FileIconComponent = React.ComponentType<{
  className?: string;
  size?: number | string;
  /** Tabler numeric width; Lucide delivery prefers `strokeWidth` (may type `stroke` as SVG color). */
  stroke?: number | string;
  strokeWidth?: number | string;
  "aria-hidden"?: boolean | "true" | "false";
}>;

/* ─── Easing ────────────────────────────────────────────────── */

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

/* ─── Internal MIME glyphs (library-independent; not transform targets) ─ */

type MimeGlyphProps = {
  className?: string;
  size?: number | string;
  stroke?: number | string;
  strokeWidth?: number | string;
  "aria-hidden"?: boolean | "true" | "false";
};

function MimeFileGlyph({
  label,
  className,
  size,
  stroke,
  strokeWidth,
  "aria-hidden": ariaHidden = true,
}: MimeGlyphProps & { label: string }) {
  const sw = strokeWidth ?? stroke ?? 1.75;
  return (
    <svg
      aria-hidden={ariaHidden}
      viewBox="0 0 24 24"
      fill="none"
      width={size}
      height={size}
      className={className}
    >
      <path
        d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-5-6Z"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 3v5a1 1 0 0 0 1 1h5"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="12"
        y="17.25"
        textAnchor="middle"
        fill="currentColor"
        fontSize="5.25"
        fontWeight="700"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        letterSpacing="0.04em"
      >
        {label}
      </text>
    </svg>
  );
}

function MimePdfGlyph(props: MimeGlyphProps) {
  return <MimeFileGlyph label="PDF" {...props} />;
}
function MimeDocGlyph(props: MimeGlyphProps) {
  return <MimeFileGlyph label="DOC" {...props} />;
}
function MimeCsvGlyph(props: MimeGlyphProps) {
  return <MimeFileGlyph label="CSV" {...props} />;
}
function MimePptGlyph(props: MimeGlyphProps) {
  return <MimeFileGlyph label="PPT" {...props} />;
}
function MimeXlsGlyph(props: MimeGlyphProps) {
  return <MimeFileGlyph label="XLS" {...props} />;
}

/** Canonical CSS spinner (Button recipe) — not an icon-pack target. */
function AttachmentUploadSpinner({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "size-[62.5%] shrink-0 rounded-full border-2 border-current border-r-transparent opacity-80 motion-safe:animate-spin",
        className,
      )}
    />
  );
}

/* ─── File Icon Resolution ──────────────────────────────────── */

/** MIME-specific indicators — internal SVG only (U-2 / A-18). */
const mimeGlyphMap: Record<string, FileIconComponent> = {
  pdf: MimePdfGlyph,
  doc: MimeDocGlyph,
  docx: MimeDocGlyph,
  xls: MimeXlsGlyph,
  xlsx: MimeXlsGlyph,
  csv: MimeCsvGlyph,
  ppt: MimePptGlyph,
  pptx: MimePptGlyph,
};

/** Remaining action/decorative pack icons (CLI transform targets). */
// Cast absorbs Tabler/Lucide SVG prop variance while keeping a library-neutral call site.
const packIconMap: Record<string, FileIconComponent> = {
  zip: IconFileZip,
  rar: IconFileZip,
  "7z": IconFileZip,
  png: IconPhoto,
  jpg: IconPhoto,
  jpeg: IconPhoto,
  gif: IconPhoto,
  webp: IconPhoto,
  svg: IconPhoto,
  mp4: IconVideo,
  mov: IconVideo,
  webm: IconVideo,
  mp3: IconFileMusic,
  wav: IconFileMusic,
  txt: IconFileText,
  md: IconFileText,
} as Record<string, FileIconComponent>;

function getFileExtension(fileName: string): string {
  const parts = fileName.split(".");
  return parts.length > 1 ? (parts.pop() ?? "").toLowerCase() : "";
}

function resolveFileIcon(fileName: string): FileIconComponent {
  const extension = getFileExtension(fileName);
  return mimeGlyphMap[extension] ?? packIconMap[extension] ?? IconFile;
}

function formatFileSize(bytes: number): string {
  if (bytes <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const exponent = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );
  const value = bytes / 1024 ** exponent;
  return `${exponent === 0 ? value : value.toFixed(1)} ${units[exponent]}`;
}

function formatFileSizeProp(
  fileSize: number | string | undefined,
): string | undefined {
  if (fileSize === undefined) return undefined;
  return typeof fileSize === "number" ? formatFileSize(fileSize) : fileSize;
}

/* ─── Variant Layout ────────────────────────────────────────── */

const rowPadding: Record<AttachmentVariant, string> = {
  compact: "gap-2.5 px-2.5 py-2",
  preview: "gap-3 px-3 py-3",
  upload: "gap-3 px-3 py-2.5",
  removable: "gap-3 px-3 py-2.5",
  download: "gap-3 px-3 py-2.5",
};

const iconTileSize: Record<AttachmentVariant, string> = {
  compact: "size-8 [&_svg]:size-5",
  preview: "size-11 [&_svg]:size-6",
  upload: "size-10 [&_svg]:size-[22px]",
  removable: "size-10 [&_svg]:size-[22px]",
  download: "size-10 [&_svg]:size-[22px]",
};

// Single shared type scale so every card (row or image) reads consistently.
const ATTACHMENT_NAME_TEXT = "text-[13px]";
const ATTACHMENT_META_TEXT = "text-[11.5px]";

/* ─── Status Presentation ───────────────────────────────────── */

function renderStatusGlyph(
  status: AttachmentStatus,
  FileIcon: FileIconComponent,
): React.ReactNode {
  if (status === "uploading") {
    return <AttachmentUploadSpinner />;
  }
  if (status === "pending") {
    return <IconClock stroke={1.75} />;
  }
  if (status === "success") {
    return <IconCheck stroke={2.25} />;
  }
  if (status === "error") {
    return <IconAlertTriangle stroke={1.75} />;
  }
  return <FileIcon stroke={1.75} />;
}

function defaultStatusText(
  status: AttachmentStatus,
  {
    progress,
    formattedSize,
    errorMessage,
  }: { progress: number; formattedSize?: string; errorMessage?: string },
): string {
  switch (status) {
    case "pending":
      return "Ready to upload";
    case "uploading":
      return `Uploading · ${Math.round(progress)}%`;
    case "processing":
      return "Processing document";
    case "success":
      return formattedSize ? `Uploaded · ${formattedSize}` : "Uploaded";
    case "error":
      return errorMessage ?? "Upload failed. Try again.";
    default:
      return formattedSize ?? "";
  }
}

/* ─── <Attachment> ──────────────────────────────────────────── */

export const Attachment = React.forwardRef<HTMLDivElement, AttachmentProps>(
  (
    {
      variant = "compact",
      fileName,
      fileSize,
      thumbnailSrc,
      progress = 0,
      status = "idle",
      errorMessage,
      onRetry,
      removable,
      onRemove,
      downloadHref,
      onDownload,
      className,
      ...props
    },
    ref,
  ) => {
    const [removed, setRemoved] = React.useState(false);
    const prefersReducedMotion = useReducedMotion();

    const showRemove = removable ?? variant === "removable";
    const showDownload =
      Boolean(downloadHref || onDownload) || variant === "download";
    const showThumbnail = variant === "preview" && Boolean(thumbnailSrc);
    const isError = status === "error";
    const isSuccess = status === "success";
    const isBusy = status === "uploading" || status === "processing";

    const FileIcon = resolveFileIcon(fileName);
    const statusGlyph = renderStatusGlyph(status, FileIcon);
    const formattedSize = formatFileSizeProp(fileSize);
    const statusText = defaultStatusText(status, {
      progress,
      formattedSize,
      errorMessage,
    });

    useAttachmentShimmerStyles();

    const handleRemove = React.useCallback(() => {
      setRemoved(true);
    }, []);

    // Destructure HTML-only event handlers that conflict with Framer Motion's
    // drag types to prevent TS2322 when spreading onto motion.div.
    const {
      onDrag: _onDrag,
      onDragStart: _onDragStart,
      onDragEnd: _onDragEnd,
      onAnimationStart: _onAnimationStart,
      ...safeProps
    } = props;

    if (showThumbnail) {
      return (
        <AttachmentImageCard
          ref={ref}
          fileName={fileName}
          formattedSize={formattedSize}
          thumbnailSrc={thumbnailSrc as string}
          removed={removed}
          showRemove={showRemove}
          onRequestRemove={handleRemove}
          onRemoveComplete={onRemove}
          prefersReducedMotion={Boolean(prefersReducedMotion)}
          className={className}
          {...safeProps}
        />
      );
    }

    return (
      <AnimatePresence initial={false} onExitComplete={() => onRemove?.()}>
        {!removed && (
          <motion.div
            data-wensity-primitive=""
            ref={ref}
            data-slot="attachment"
            data-variant={variant}
            data-status={status}
            layout={!prefersReducedMotion}
            initial={false}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              // Reduced motion: snap the structural height/layout collapse but
              // keep a quick opacity fade so removal still reads as a transition.
              height: {
                duration: prefersReducedMotion ? 0 : 0.22,
                ease: EASE_OUT,
              },
              opacity: {
                duration: prefersReducedMotion ? 0.15 : 0.18,
                ease: EASE_OUT,
              },
            }}
            style={{ overflow: "hidden" }}
            className={className}
            {...safeProps}
          >
            <div
              className={cn(
                "flex items-center rounded-[var(--primitive-radius-surface)] border transition-colors duration-200",
                status === "pending"
                  ? "border-dashed bg-transparent border-[color-mix(in_srgb,var(--foreground)_18%,transparent)]"
                  : cn(
                      "bg-[color-mix(in_srgb,var(--foreground)_3%,var(--background))]",
                      "dark:bg-[var(--primitive-surface-elevated)]",
                      isError
                        ? "border-[var(--primitive-destructive-border)]"
                        : isSuccess
                          ? "border-[var(--primitive-success-border)]"
                          : "border-[var(--border)]",
                    ),
                rowPadding[variant],
              )}
            >
              {/* ── Status / File Icon ── */}
              <div
                aria-hidden="true"
                className={cn(
                  "relative flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--primitive-radius-control-sm)] transition-colors duration-200",
                  isError
                    ? "bg-[var(--primitive-destructive-surface)] text-[var(--primitive-destructive)]"
                    : isSuccess
                      ? "bg-[var(--primitive-success-surface)] text-[var(--primitive-success)]"
                      : "bg-[color-mix(in_srgb,var(--foreground)_6%,var(--background))] text-[var(--foreground)]",
                  iconTileSize[variant],
                )}
              >
                <AnimatePresence initial={false}>
                  <motion.span
                    key={status}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={
                      isSuccess && !prefersReducedMotion
                        ? {
                            type: "spring",
                            stiffness: 420,
                            damping: 18,
                            mass: 0.6,
                          }
                        : {
                            duration: prefersReducedMotion ? 0 : 0.16,
                            ease: EASE_OUT,
                          }
                    }
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {statusGlyph}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* ── Name / Meta ── */}
              <div className="min-w-0 flex-1">
                <p
                  className={cn(
                    "truncate font-medium leading-none tracking-[-0.01em]",
                    ATTACHMENT_NAME_TEXT,
                    isBusy && !prefersReducedMotion
                      ? "wensity-attachment-shimmer-text"
                      : "text-[var(--foreground)]",
                  )}
                  title={fileName}
                >
                  {fileName}
                </p>
                <p
                  className={cn(
                    "mt-1 truncate",
                    ATTACHMENT_META_TEXT,
                    isError
                      ? "text-[var(--primitive-destructive)]"
                      : "text-[var(--muted-foreground)]",
                  )}
                >
                  {statusText}
                </p>
              </div>

              {/* ── Trailing Actions ── */}
              <div className="flex shrink-0 items-center gap-1">
                {isError && onRetry && (
                  <AttachmentIconButton
                    label={`Retry ${fileName}`}
                    onClick={onRetry}
                  >
                    <IconRefresh className="size-4" stroke={1.9} />
                  </AttachmentIconButton>
                )}

                {showDownload && (
                  <AttachmentIconButton
                    label={`Download ${fileName}`}
                    onClick={() => {
                      onDownload?.();
                      if (downloadHref)
                        window.open(
                          downloadHref,
                          "_blank",
                          "noopener,noreferrer",
                        );
                    }}
                  >
                    <IconDownload className="size-4" stroke={1.9} />
                  </AttachmentIconButton>
                )}

                {showRemove && (
                  <AttachmentIconButton
                    label={`Remove ${fileName}`}
                    onClick={handleRemove}
                  >
                    <IconX className="size-4" stroke={1.9} />
                  </AttachmentIconButton>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);
Attachment.displayName = "Attachment";

/* ─── <AttachmentImageCard> (variant="preview" with thumbnailSrc) ──── */

interface AttachmentImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  fileName: string;
  formattedSize?: string;
  thumbnailSrc: string;
  removed: boolean;
  showRemove: boolean;
  onRequestRemove: () => void;
  onRemoveComplete?: () => void;
  prefersReducedMotion: boolean;
}

const AttachmentImageCard = React.forwardRef<
  HTMLDivElement,
  AttachmentImageCardProps
>(
  (
    {
      fileName,
      formattedSize,
      thumbnailSrc,
      removed,
      showRemove,
      onRequestRemove,
      onRemoveComplete,
      prefersReducedMotion,
      className,
      ...props
    },
    ref,
  ) => {
    const extension = getFileExtension(fileName).toUpperCase();
    const meta = [extension, formattedSize].filter(Boolean).join(" · ");

    const {
      onDrag: _onDrag,
      onDragStart: _onDragStart,
      onDragEnd: _onDragEnd,
      onAnimationStart: _onAnimationStart,
      ...safeProps
    } = props;

    return (
      <AnimatePresence
        initial={false}
        onExitComplete={() => onRemoveComplete?.()}
      >
        {!removed && (
          <motion.div
            data-wensity-primitive=""
            ref={ref}
            data-slot="attachment"
            data-variant="preview"
            layout={!prefersReducedMotion}
            initial={false}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.18,
              ease: EASE_OUT,
            }}
            className={cn("group w-[136px] shrink-0", className)}
            {...safeProps}
          >
            <div
              className={cn(
                "rounded-[var(--primitive-radius-surface)] border p-2",
                "border-[var(--border)]",
                "bg-[color-mix(in_srgb,var(--foreground)_3%,var(--background))]",
                "dark:bg-[var(--primitive-surface-elevated)]",
              )}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-[var(--primitive-radius-control-sm)] bg-[color-mix(in_srgb,var(--foreground)_6%,var(--background))]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={thumbnailSrc}
                  alt=""
                  className="size-full object-cover"
                />

                {showRemove && (
                  <button
                    type="button"
                    aria-label={`Remove ${fileName}`}
                    onClick={onRequestRemove}
                    className={cn(
                      "absolute right-1.5 top-1.5 flex size-6 items-center justify-center rounded-full",
                      "bg-[var(--primitive-backdrop)] text-[var(--primitive-text-inverse)] backdrop-blur-sm",
                      "dark:text-[var(--primitive-control-solid)]",
                      "opacity-0 transition-opacity duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]",
                      "group-hover:opacity-100 focus-visible:opacity-100",
                      "outline-none focus-visible:ring-2 focus-visible:ring-[var(--primitive-ring)]",
                      "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primitive-backdrop)]",
                    )}
                  >
                    <IconX className="size-3.5" stroke={2} />
                  </button>
                )}
              </div>

              <p
                className={cn(
                  "mt-2 truncate font-medium leading-none tracking-[-0.01em] text-[var(--foreground)]",
                  ATTACHMENT_NAME_TEXT,
                )}
                title={fileName}
              >
                {fileName}
              </p>
              {meta && (
                <p
                  className={cn(
                    "mt-1 truncate text-[var(--muted-foreground)]",
                    ATTACHMENT_META_TEXT,
                  )}
                >
                  {meta}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);
AttachmentImageCard.displayName = "AttachmentImageCard";

/* ─── Icon Button ───────────────────────────────────────────── */

function AttachmentIconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      onClick={onClick}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 500, damping: 32 }}
      className={cn(
        "flex size-7 items-center justify-center rounded-[var(--primitive-radius-control-sm)] text-[var(--muted-foreground)]",
        "outline-none transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]",
        "hover:bg-[color-mix(in_srgb,var(--foreground)_6%,var(--background))] hover:text-[var(--foreground)]",
        "focus-visible:ring-2 focus-visible:ring-[var(--primitive-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
      )}
    >
      {children}
    </motion.button>
  );
}

/* ─── Shimmer Text (uploading / processing) ─────────────────── */

function useAttachmentShimmerStyles() {
  React.useEffect(() => {
    ensureAttachmentShimmerStyles();
  }, []);
}

function ensureAttachmentShimmerStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("wensity-attachment-styles")) return;

  const style = document.createElement("style");
  style.id = "wensity-attachment-styles";
  style.textContent = `
@media (prefers-reduced-motion: no-preference) {
  .wensity-attachment-shimmer-text {
    color: transparent;
    background-image: linear-gradient(
      90deg,
      var(--muted-foreground) 0%,
      var(--muted-foreground) 35%,
      var(--foreground) 50%,
      var(--muted-foreground) 65%,
      var(--muted-foreground) 100%
    );
    background-size: 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    animation: wensity-attachment-text-shimmer 1.8s ease-in-out infinite;
  }
}

@keyframes wensity-attachment-text-shimmer {
  from { background-position: 200% 0; }
  to { background-position: -200% 0; }
}
`;
  document.head.appendChild(style);
}

export default Attachment;
