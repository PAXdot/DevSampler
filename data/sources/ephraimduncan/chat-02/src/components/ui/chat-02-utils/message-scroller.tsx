'use client';

import { IconArrowDown } from '@tabler/icons-react';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type MessageScrollerContextValue = {
  viewportRef: React.RefObject<HTMLDivElement | null>;
  atBottom: boolean;
  setAtBottom: (v: boolean) => void;
  scrollToEnd: (behavior?: ScrollBehavior) => void;
};

const MessageScrollerContext =
  React.createContext<MessageScrollerContextValue | null>(null);

function useMessageScrollerContext() {
  const ctx = React.useContext(MessageScrollerContext);
  if (!ctx) {
    throw new Error(
      'MessageScroller components must be used within a MessageScrollerProvider'
    );
  }
  return ctx;
}

function MessageScrollerProvider({
  autoScroll = false,
  children,
}: {
  autoScroll?: boolean;
  children: React.ReactNode;
}) {
  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const [atBottom, setAtBottom] = React.useState(true);

  const scrollToEnd = React.useCallback((behavior: ScrollBehavior = 'smooth') => {
    const el = viewportRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior });
    }
  }, []);

  React.useEffect(() => {
    if (autoScroll && atBottom) {
      scrollToEnd('auto');
    }
  });

  const value = React.useMemo(
    () => ({ viewportRef, atBottom, setAtBottom, scrollToEnd }),
    [atBottom, scrollToEnd]
  );

  return (
    <MessageScrollerContext.Provider value={value}>
      {children}
    </MessageScrollerContext.Provider>
  );
}

function MessageScroller({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'group/message-scroller relative flex size-full min-h-0 flex-col overflow-hidden',
        className
      )}
      data-slot="message-scroller"
      {...props}
    />
  );
}

function MessageScrollerViewport({
  className,
  onScroll,
  ...props
}: React.ComponentProps<'div'>) {
  const { viewportRef, setAtBottom } = useMessageScrollerContext();

  return (
    <div
      className={cn(
        'size-full min-h-0 min-w-0 overflow-y-auto overscroll-contain',
        className
      )}
      data-slot="message-scroller-viewport"
      onScroll={(e) => {
        const el = e.currentTarget;
        const distance = el.scrollHeight - el.scrollTop - el.clientHeight;
        setAtBottom(distance < 48);
        onScroll?.(e);
      }}
      ref={viewportRef}
      {...props}
    />
  );
}

function MessageScrollerContent({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex h-max min-h-full flex-col gap-6', className)}
      data-slot="message-scroller-content"
      {...props}
    />
  );
}

function MessageScrollerItem({
  className,
  messageId,
  scrollAnchor,
  ...props
}: React.ComponentProps<'div'> & {
  messageId?: string;
  scrollAnchor?: boolean;
}) {
  return (
    <div
      className={cn('min-w-0 shrink-0', className)}
      data-message-id={messageId}
      data-slot="message-scroller-item"
      {...props}
    />
  );
}

function MessageScrollerButton({
  className,
  children,
  size = 'icon-sm',
  variant = 'secondary',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { atBottom, scrollToEnd } = useMessageScrollerContext();

  return (
    <Button
      className={cn(
        'absolute inset-s-1/2 bottom-4 -translate-x-1/2 border-border bg-background text-foreground transition-[translate,scale,opacity] duration-200 hover:bg-muted hover:text-foreground',
        atBottom
          ? 'pointer-events-none translate-y-full scale-95 opacity-0'
          : 'translate-y-0 scale-100 opacity-100',
        className
      )}
      data-active={!atBottom}
      data-slot="message-scroller-button"
      onClick={() => scrollToEnd('smooth')}
      size={size}
      variant={variant}
      {...props}
    >
      {children ?? (
        <>
          <IconArrowDown />
          <span className="sr-only">Scroll to end</span>
        </>
      )}
    </Button>
  );
}

export {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
};
