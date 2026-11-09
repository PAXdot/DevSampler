"use client";

import * as React from "react";
import {
  CloudUpload,
  File as FileIconDefault,
  FileArchive,
  FileImage,
  FileText,
  Trash2,
  type LucideIcon,
} from "lucide-react";

/**
 * Ported from PureStack's `dropFiles` component (written for the `regor`
 * framework) to React.
 * Original source (MIT License, Copyright (c) 2026 Ahmed Yasin Koculu):
 * https://github.com/PureStackStudio/PureStack/blob/main/packages/ts-components/src/standard/dropFiles/dropFiles.ts
 */

export type SemanticTone = string;

export type ComponentVariant =
  | "none"
  | "solid"
  | "surface"
  | "surfaceAlt"
  | "spotlight"
  | "glass"
  | "flat"
  | "flatAlt"
  | "flatSolid"
  | "outlineFill"
  | "outline"
  | "subtle"
  | "subtleBtn"
  | "link"
  | "sheen"
  | "underline"
  | "rail"
  | "bracket";

export interface DropFileItem {
  id: string;
  file: File;
  name: string;
  type: string;
  size: number;
  sizeLabel: string;
  lastModified: number;
  icon: string;
}

export type DropFilesIconMap = Record<string, string>;

export interface DropFilesProps {
  files?: DropFileItem[];
  accept?: string | string[];
  iconMap?: DropFilesIconMap;
  label?: string;
  hint?: string;
  emptyTitle?: string;
  emptyText?: string;
  disabled?: boolean;
  multiple?: boolean;
  tone?: SemanticTone;
  variant?: ComponentVariant;
  uploadIcon?: string;
  fileIcon?: string;
  removeIcon?: string;
  onChange?: (files: DropFileItem[]) => void;
}

const DEFAULT_UPLOAD_ICON = "lucide:cloud-upload";
const DEFAULT_FILE_ICON = "lucide:file";
const DEFAULT_REMOVE_ICON = "lucide:trash-2";

const DEFAULT_ICON_MAP: DropFilesIconMap = {
  "image/*": "lucide:file-image",
  "text/*": "lucide:file-text",
  "application/pdf": "lucide:file-text",
  "application/zip": "lucide:file-archive",
  "application/x-zip-compressed": "lucide:file-archive",
  ".zip": "lucide:file-archive",
};

const LUCIDE_ICONS: Record<string, LucideIcon> = {
  "cloud-upload": CloudUpload,
  file: FileIconDefault,
  "file-image": FileImage,
  "file-text": FileText,
  "file-archive": FileArchive,
  "trash-2": Trash2,
};

function resolveLucideIcon(name: string | undefined): LucideIcon {
  if (!name) return FileIconDefault;
  const key = name.startsWith("lucide:") ? name.slice("lucide:".length) : name;
  return LUCIDE_ICONS[key] ?? FileIconDefault;
}

function DropFilesIcon({
  name,
  className,
}: {
  name?: string;
  className?: string;
}) {
  const Comp = resolveLucideIcon(name);
  return <Comp className={className} aria-hidden="true" />;
}

function normalizeAcceptToken(value: string) {
  return value.trim().toLowerCase();
}

function normalizeAccept(value: string | string[] | undefined): string[] {
  if (Array.isArray(value)) {
    return value
      .flatMap((item) => item.split(","))
      .map(normalizeAcceptToken)
      .filter(Boolean);
  }
  if (!value) return [];
  return value.split(",").map(normalizeAcceptToken).filter(Boolean);
}

function resolveAccept(
  accept: string | string[] | undefined,
  iconMap: DropFilesIconMap | undefined,
): string[] {
  const resolvedAccept = normalizeAccept(accept);
  if (resolvedAccept.length > 0) return resolvedAccept;
  return iconMap ? normalizeAccept(Object.keys(iconMap)) : [];
}

function matchesAcceptToken(file: File, token: string) {
  if (!token) return false;
  const type = file.type.toLowerCase();
  const name = file.name.toLowerCase();
  if (token.startsWith(".")) return name.endsWith(token);
  if (token.endsWith("/*")) return type.startsWith(token.slice(0, -1));
  return type === token;
}

function acceptsFile(file: File, accept: string[]) {
  if (accept.length === 0) return true;
  return accept.some((token) => matchesAcceptToken(file, token));
}

function resolveFileIcon(
  file: File,
  iconMap: DropFilesIconMap | undefined,
  fallback: string,
) {
  const mergedMap = { ...DEFAULT_ICON_MAP, ...(iconMap ?? {}) };
  for (const [accept, icon] of Object.entries(mergedMap)) {
    if (matchesAcceptToken(file, normalizeAcceptToken(accept)) && icon) {
      return icon;
    }
  }
  return fallback;
}

function hasFileTransfer(dataTransfer: DataTransfer | null) {
  if (!dataTransfer) return false;
  return Array.from(dataTransfer.types).includes("Files");
}

function isSameFile(left: File, right: File) {
  return (
    left.name === right.name &&
    left.size === right.size &&
    left.type === right.type &&
    left.lastModified === right.lastModified
  );
}

function formatFileSize(size: number) {
  if (!Number.isFinite(size) || size <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  let value = size;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    ++unit;
  }
  return `${value >= 10 || unit === 0 ? value.toFixed(0) : value.toFixed(1)} ${units[unit]}`;
}

function createFileId(file: File, sequence: number) {
  return [sequence, file.name, file.size, file.lastModified].join(":");
}

interface AddDropFilesOptions {
  accept?: string | string[];
  iconMap?: DropFilesIconMap;
  fileIcon?: string;
  multiple?: boolean;
  idSequence?: number;
}

interface AddDropFilesResult {
  files: DropFileItem[];
  idSequence: number;
  acceptedCount: number;
}

function createDropFileItem(
  file: File,
  options: AddDropFilesOptions,
): DropFileItem {
  return {
    id: "",
    file,
    name: file.name,
    type: file.type,
    size: file.size,
    sizeLabel: formatFileSize(file.size),
    lastModified: file.lastModified,
    icon: resolveFileIcon(
      file,
      options.iconMap,
      options.fileIcon || DEFAULT_FILE_ICON,
    ),
  };
}

export function addDropFiles(
  currentFiles: DropFileItem[],
  files: File[],
  options: AddDropFilesOptions = {},
): AddDropFilesResult {
  const accept = resolveAccept(options.accept, options.iconMap);
  const accepted = files
    .filter((file) => acceptsFile(file, accept))
    .map((file) => createDropFileItem(file, options));

  let idSequence = options.idSequence ?? 0;
  const sequenced = accepted.map((item) => {
    ++idSequence;
    return { ...item, id: createFileId(item.file, idSequence) };
  });
  if (sequenced.length === 0) {
    return { files: currentFiles, idSequence, acceptedCount: 0 };
  }

  if (options.multiple === false) {
    return { files: [sequenced[0]], idSequence, acceptedCount: 1 };
  }

  const next = [...currentFiles];
  let addedCount = 0;
  for (const item of sequenced) {
    if (!next.some((existing) => isSameFile(existing.file, item.file))) {
      next.push(item);
      ++addedCount;
    }
  }

  return { files: next, idSequence, acceptedCount: addedCount };
}

export default function DropFiles({
  files,
  accept,
  iconMap,
  label,
  hint,
  emptyTitle,
  emptyText,
  disabled = false,
  multiple = true,
  tone,
  variant,
  uploadIcon,
  fileIcon,
  removeIcon,
  onChange,
}: DropFilesProps) {
  const controlled = files !== undefined;
  const [internalFiles, setInternalFiles] = React.useState<DropFileItem[]>(
    () => files ?? [],
  );
  const currentFiles = controlled ? (files as DropFileItem[]) : internalFiles;

  const [dragging, setDragging] = React.useState(false);
  const dragDepthRef = React.useRef(0);
  const idSequenceRef = React.useRef(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const acceptValue = React.useMemo(
    () => resolveAccept(accept, iconMap).join(","),
    [accept, iconMap],
  );
  const resolvedUploadIcon = uploadIcon || DEFAULT_UPLOAD_ICON;
  const resolvedRemoveIcon = removeIcon || DEFAULT_REMOVE_ICON;
  const hasFiles = currentFiles.length > 0;

  const writeFiles = React.useCallback(
    (next: DropFileItem[]) => {
      if (!controlled) setInternalFiles(next);
      onChange?.(next);
    },
    [controlled, onChange],
  );

  const addFileList = React.useCallback(
    (fileList: FileList | null | undefined) => {
      if (!fileList || fileList.length === 0) return;
      const result = addDropFiles(currentFiles, Array.from(fileList), {
        accept,
        iconMap,
        fileIcon,
        multiple,
        idSequence: idSequenceRef.current,
      });
      idSequenceRef.current = result.idSequence;
      if (result.acceptedCount === 0) return;
      writeFiles(result.files);
    },
    [currentFiles, accept, iconMap, fileIcon, multiple, writeFiles],
  );

  const openFileDialog = () => {
    if (disabled) return;
    inputRef.current?.click();
  };

  const handleZoneKeydown = (event: React.KeyboardEvent) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openFileDialog();
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    addFileList(event.currentTarget.files);
    event.currentTarget.value = "";
  };

  const handlePaste = (event: React.ClipboardEvent) => {
    if (disabled) return;
    const pastedFiles = event.clipboardData?.files;
    if (!pastedFiles || pastedFiles.length === 0) return;
    event.preventDefault();
    addFileList(pastedFiles);
  };

  const handleDragEnter = (event: React.DragEvent) => {
    if (disabled || !hasFileTransfer(event.dataTransfer)) return;
    event.preventDefault();
    dragDepthRef.current += 1;
    setDragging(true);
  };

  const handleDragOver = (event: React.DragEvent) => {
    if (disabled || !hasFileTransfer(event.dataTransfer)) return;
    event.preventDefault();
    if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
  };

  const handleDragLeave = (event: React.DragEvent) => {
    if (disabled || !hasFileTransfer(event.dataTransfer)) return;
    event.preventDefault();
    dragDepthRef.current = Math.max(0, dragDepthRef.current - 1);
    if (dragDepthRef.current === 0) setDragging(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    if (disabled || !hasFileTransfer(event.dataTransfer)) return;
    event.preventDefault();
    dragDepthRef.current = 0;
    setDragging(false);
    addFileList(event.dataTransfer?.files);
  };

  const removeFile = (id: string) => {
    if (disabled) return;
    writeFiles(currentFiles.filter((item) => item.id !== id));
  };

  const zoneClassName = [
    "drop-files__zone",
    dragging ? "drop-files__zone--dragging" : "",
    disabled ? "drop-files__zone--disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="drop-files" data-tone={tone} data-variant={variant}>
      {label ? <span className="drop-files__label">{label}</span> : null}
      <input
        ref={inputRef}
        className="drop-files__input"
        type="file"
        accept={acceptValue}
        multiple={multiple}
        disabled={disabled}
        tabIndex={-1}
        onChange={handleInput}
      />
      <div
        className={zoneClassName}
        role="button"
        tabIndex={0}
        aria-disabled={disabled}
        onClick={openFileDialog}
        onKeyDown={handleZoneKeydown}
        onPaste={handlePaste}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <DropFilesIcon
          className="drop-files__zone-icon"
          name={resolvedUploadIcon}
        />
        <span className="drop-files__zone-title">
          {emptyTitle || "Add files"}
        </span>
        <span className="drop-files__zone-text">
          {emptyText || "Click, tap, paste, or drag files here."}
        </span>
        {hint ? <span className="drop-files__hint">{hint}</span> : null}
      </div>
      {hasFiles ? (
        <ul className="drop-files__list" aria-label="Selected files">
          {currentFiles.map((item) => (
            <li className="drop-files__item" key={item.id}>
              <span className="drop-files__item-icon">
                <DropFilesIcon name={item.icon} />
              </span>
              <span className="drop-files__item-body">
                <span className="drop-files__item-name">{item.name}</span>
                <span className="drop-files__item-meta">{item.sizeLabel}</span>
              </span>
              <button
                className="drop-files__remove"
                type="button"
                title="Remove file"
                aria-label="Remove file"
                disabled={disabled}
                onClick={() => removeFile(item.id)}
              >
                <DropFilesIcon name={resolvedRemoveIcon} />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
