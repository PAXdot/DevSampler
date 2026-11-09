"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import CharacterCount from "@tiptap/extension-character-count";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, type Editor, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Code, Heading2, Italic, Link2, List, ListOrdered, Quote, Redo2, Strikethrough, Undo2 } from "lucide-react";

/* Layro System · RichTextEditor. Composed from the Layro UI source into one file.
   Themed with shadcn/ui tokens; follows your globals.css in light and dark. */

/* ------------------------------------------------------------ tokens -- */

const SQUIRCLE = "[corner-shape:squircle]";

/* =========================================================== tooltip == */

/* ==========================================================================
   Tooltip

   A label for a control that only shows an icon.

   Three things it has to get right, all of which the hand-rolled `title`
   attribute gets wrong: it must appear fast enough to answer a hesitation but
   not so fast that sweeping the cursor across a toolbar sets off a chain of
   them; it must appear on keyboard focus, not only on hover, or the icon
   buttons are unlabelled for anyone using Tab; and it must not be clipped by
   the toolbar it lives in. Radix handles all three: the delay is paid once per
   group (wrap a toolbar in <TooltipProvider>), focus opens it, and it renders
   in a portal that flips to stay on screen.

     <Tooltip label="Zoom in" keys="⌘+">
       <IconButton label="Zoom in"><ZoomIn /></IconButton>
     </Tooltip>

   Without a provider above it, each Tooltip brings its own — it still works,
   it just pays the delay every time.
   ========================================================================== */

const ProviderPresent = React.createContext(false);

export function TooltipProvider({
  delayDuration = 400,
  skipDelayDuration = 500,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <ProviderPresent.Provider value={true}>
      <TooltipPrimitive.Provider delayDuration={delayDuration} skipDelayDuration={skipDelayDuration} {...props} />
    </ProviderPresent.Provider>
  );
}

export const TooltipRoot = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(function TooltipContent({ className, sideOffset = 6, style, ...props }, ref) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        collisionPadding={12}
        style={{ zIndex: 90, ...style }}
        className={cn(
          "pointer-events-none rounded-[7px] bg-primary px-2 py-1 text-[11.5px] leading-snug font-medium whitespace-nowrap text-primary-foreground",
          "shadow-[0_8px_20px_-8px_rgb(0_0_0/0.4)]",
          "motion-safe:data-[state=delayed-open]:animate-in motion-safe:data-[state=delayed-open]:fade-in-0 motion-safe:data-[state=delayed-open]:zoom-in-95 motion-safe:data-[state=instant-open]:animate-in motion-safe:data-[state=instant-open]:fade-in-0 motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out-0",
          "data-[side=bottom]:[--pop-y:-3px] data-[side=top]:[--pop-y:3px]",
          SQUIRCLE,
          className,
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  );
});

export interface TooltipProps {
  /** The label. Keep it to a few words — it is a name, not documentation. */
  label: React.ReactNode;
  /** The shortcut, shown dimmed after the label: "Zoom in ⌘+". */
  keys?: string;
  side?: "top" | "bottom" | "left" | "right";
  /** Delay before the first tooltip in a group, in ms. Used when no provider is present. */
  delay?: number;
  children: React.ReactElement;
}

export function Tooltip({ label, keys, side = "top", delay = 400, children }: TooltipProps) {
  const hasProvider = React.useContext(ProviderPresent);
  const tip = (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipContent side={side}>
        {label}
        {keys && <span className="ml-1.5 opacity-70">{keys}</span>}
      </TooltipContent>
    </TooltipPrimitive.Root>
  );
  return hasProvider ? tip : <TooltipProvider delayDuration={delay}>{tip}</TooltipProvider>;
}

/* ================================================== rich-text-editor == */

/* ==========================================================================
   Rich Text Editor

   Tiptap (ProseMirror) underneath, which means real documents, not
   contenteditable soup: undo that works, paste that is cleaned, markdown
   shortcuts (## for a heading, - for a list, > for a quote, `code`), and
   HTML or JSON out.

     <RichTextEditor defaultValue="<p>Hello</p>" onChange={(html) => save(html)}
                     placeholder="Write a reply…" maxLength={2000} />

   The toolbar is a real toolbar: one Tab stop, arrow keys move between its
   buttons, each button reports whether its mark is on (aria-pressed) and has
   a tooltip with its shortcut. Adding a link opens an address field under the
   toolbar (Enter applies, Escape cancels). The counter appears near the limit.
   ========================================================================== */

export interface RichTextEditorProps {
  defaultValue?: string;
  /** HTML on every change. */
  onChange?: (html: string, editor: Editor) => void;
  placeholder?: string;
  maxLength?: number;
  /** Minimum height of the writing area in px. Default 140. */
  minHeight?: number;
  /** Which tools to show. Default: all. */
  tools?: Array<"heading" | "bold" | "italic" | "strike" | "code" | "bullet" | "ordered" | "quote" | "link" | "history">;
  editable?: boolean;
  /** Accessible name for the writing area. */
  label?: string;
  className?: string;
}

const ALL: NonNullable<RichTextEditorProps["tools"]> = ["heading", "bold", "italic", "strike", "code", "bullet", "ordered", "quote", "link", "history"];

export function RichTextEditor({
  defaultValue = "",
  onChange,
  placeholder = "Write something…",
  maxLength,
  minHeight = 140,
  tools = ALL,
  editable = true,
  label = "Editor",
  className,
}: RichTextEditorProps) {
  const [, force] = React.useReducer((n: number) => n + 1, 0);
  const [linkOpen, setLinkOpen] = React.useState(false);
  const [linkUrl, setLinkUrl] = React.useState("https://");
  const editor = useEditor({
    immediatelyRender: false,
    editable,
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Link.configure({ openOnClick: false, autolink: true, HTMLAttributes: { rel: "noopener noreferrer" } }),
      Placeholder.configure({ placeholder }),
      CharacterCount.configure({ limit: maxLength }),
    ],
    content: defaultValue,
    editorProps: {
      attributes: {
        "aria-label": label,
        "aria-multiline": "true",
        role: "textbox",
        class: cn(
          "layro-prose max-w-none px-3.5 py-3 text-[13.5px] leading-relaxed text-foreground outline-none",
          "[&_h2]:mt-3 [&_h2]:mb-1.5 [&_h2]:text-[16px] [&_h2]:font-semibold [&_h3]:mt-3 [&_h3]:mb-1 [&_h3]:text-[14.5px] [&_h3]:font-semibold",
          "[&_p]:my-1.5 [&_ul]:my-1.5 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-1.5 [&_ol]:list-decimal [&_ol]:pl-5",
          "[&_blockquote]:my-2 [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-3 [&_blockquote]:text-muted-foreground",
          "[&_code]:rounded-[5px] [&_code]:bg-muted [&_code]:px-1 [&_code]:py-px [&_code]:font-mono [&_code]:text-[12.5px]",
          "[&_pre]:my-2 [&_pre]:rounded-[10px] [&_pre]:bg-muted [&_pre]:p-3 [&_pre_code]:bg-transparent [&_pre_code]:p-0",
          "[&_a]:text-foreground [&_a]:underline [&_a]:decoration-foreground/30 [&_a]:underline-offset-4",
          "[&_.is-editor-empty:first-child]:before:pointer-events-none [&_.is-editor-empty:first-child]:before:float-left [&_.is-editor-empty:first-child]:before:h-0 [&_.is-editor-empty:first-child]:before:text-muted-foreground [&_.is-editor-empty:first-child]:before:content-[attr(data-placeholder)]",
        ),
      },
    },
    onUpdate: ({ editor: e }) => onChange?.(e.getHTML(), e),
    onSelectionUpdate: () => force(),
    onTransaction: () => force(),
  });

  const toolbar = React.useRef<HTMLDivElement>(null);
  const onToolbarKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    const btns = [...(toolbar.current?.querySelectorAll<HTMLButtonElement>("button:not(:disabled)") ?? [])];
    const i = btns.indexOf(document.activeElement as HTMLButtonElement);
    const next = e.key === "Home" ? 0 : e.key === "End" ? btns.length - 1 : (i + (e.key === "ArrowRight" ? 1 : -1) + btns.length) % btns.length;
    btns.forEach((b, k) => (b.tabIndex = k === next ? 0 : -1));
    btns[next]?.focus();
    e.preventDefault();
  };

  const count = editor?.storage.characterCount?.characters?.() ?? 0;
  const near = maxLength !== undefined && count >= maxLength * 0.8;

  const btn = (key: string, name: string, icon: React.ReactNode, on: boolean, run: () => void, keys?: string, disabled?: boolean, first?: boolean) => (
    <Tooltip key={key} label={name} keys={keys}>
      <button
        type="button"
        tabIndex={first ? 0 : -1}
        aria-label={name}
        aria-pressed={key === "undo" || key === "redo" || key === "link" ? undefined : on}
        disabled={disabled}
        onMouseDown={(e) => e.preventDefault()}
        onClick={run}
        className={cn(
          "grid size-7 cursor-pointer place-items-center rounded-[7px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-40",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none [&_svg]:size-4",
          on && "bg-accent text-foreground",
        )}
      >
        {icon}
      </button>
    </Tooltip>
  );

  const e = editor;
  const items: React.ReactNode[] = [];
  const has = (t: (typeof ALL)[number]) => tools.includes(t);
  if (e) {
    let first = true;
    const push = (...a: Parameters<typeof btn>) => {
      items.push(btn(a[0], a[1], a[2], a[3], a[4], a[5], a[6], first));
      first = false;
    };
    if (has("heading")) push("h2", "Heading", <Heading2 />, e.isActive("heading", { level: 2 }), () => e.chain().focus().toggleHeading({ level: 2 }).run(), "##");
    if (has("bold")) push("bold", "Bold", <Bold />, e.isActive("bold"), () => e.chain().focus().toggleBold().run(), "⌘B");
    if (has("italic")) push("italic", "Italic", <Italic />, e.isActive("italic"), () => e.chain().focus().toggleItalic().run(), "⌘I");
    if (has("strike")) push("strike", "Strikethrough", <Strikethrough />, e.isActive("strike"), () => e.chain().focus().toggleStrike().run(), "⌘⇧S");
    if (has("code")) push("code", "Inline code", <Code />, e.isActive("code"), () => e.chain().focus().toggleCode().run(), "⌘E");
    if (has("bullet")) push("bullet", "Bulleted list", <List />, e.isActive("bulletList"), () => e.chain().focus().toggleBulletList().run(), "-");
    if (has("ordered")) push("ordered", "Numbered list", <ListOrdered />, e.isActive("orderedList"), () => e.chain().focus().toggleOrderedList().run(), "1.");
    if (has("quote")) push("quote", "Quote", <Quote />, e.isActive("blockquote"), () => e.chain().focus().toggleBlockquote().run(), ">");
    if (has("link"))
      push("link", e.isActive("link") ? "Remove link" : "Add link", <Link2 />, e.isActive("link"), () => {
        if (e.isActive("link")) return e.chain().focus().unsetLink().run();
        setLinkUrl("https://");
        setLinkOpen(true);
      }, "⌘K");
    if (has("history")) {
      push("undo", "Undo", <Undo2 />, false, () => e.chain().focus().undo().run(), "⌘Z", !e.can().undo());
      push("redo", "Redo", <Redo2 />, false, () => e.chain().focus().redo().run(), "⌘⇧Z", !e.can().redo());
    }
  }

  return (
    <TooltipProvider>
      <div
        className={cn(
          "overflow-hidden rounded-[12px] bg-card ring-1 ring-inset ring-input transition-shadow has-[.ProseMirror:focus-visible]:ring-2 has-[.ProseMirror:focus-visible]:ring-ring",
          SQUIRCLE,
          className,
        )}
      >
        {editable && (
          <div
            ref={toolbar}
            role="toolbar"
            aria-label="Formatting"
            aria-controls={undefined}
            onKeyDown={onToolbarKey}
            className="flex flex-wrap items-center gap-0.5 border-b border-border px-1.5 py-1"
          >
            {items}
          </div>
        )}
        {linkOpen && e && (
          <form
            className="flex items-center gap-2 border-b border-border px-2.5 py-1.5"
            onSubmit={(ev) => {
              ev.preventDefault();
              const url = linkUrl.trim();
              if (url && url !== "https://") e.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
              setLinkOpen(false);
            }}
          >
            <label className="sr-only" htmlFor="rte-link">Link address</label>
            <input
              id="rte-link"
              autoFocus
              value={linkUrl}
              onChange={(ev) => setLinkUrl(ev.target.value)}
              onKeyDown={(ev) => {
                if (ev.key === "Escape") {
                  ev.preventDefault();
                  setLinkOpen(false);
                  e.commands.focus();
                }
              }}
              className="h-7 min-w-0 flex-1 bg-transparent text-[12.5px] outline-none placeholder:text-muted-foreground"
            />
            <button type="submit" className="h-7 cursor-pointer rounded-[7px] bg-primary px-2.5 text-[12px] font-medium text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
              Add link
            </button>
          </form>
        )}
        <div className="relative" style={{ minHeight }}>
          <EditorContent editor={editor} />
          {near && (
            <span aria-live="polite" className={cn("absolute right-3 bottom-2 text-[11px] tabular-nums", count >= maxLength! ? "text-red-700 dark:text-red-400" : "text-muted-foreground")}>
              {maxLength! - count} left
            </span>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}

export { RichTextEditor as Component };
