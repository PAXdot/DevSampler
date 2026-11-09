'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from './drawer';

export function useMeasure<T extends HTMLElement>() {
  const [node, setNode] = React.useState<T | null>(null);
  const [size, setSize] = React.useState({ width: 0, height: 0 });

  const ref = React.useCallback((el: T | null) => {
    setNode(el);
  }, []);

  React.useEffect(() => {
    if (!node) return;
    const update = () => {
      const { width, height } = node.getBoundingClientRect();
      setSize({ width, height });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);

  return [ref, size] as const;
}

export function AnimatedTabs({ defaultValue, children }: { defaultValue?: string; children?: React.ReactNode }) {
  const [ref, bounds] = useMeasure<HTMLDivElement>();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const childArray = React.Children.toArray(children);
  const list = childArray.find(
    c => React.isValidElement(c) && (c.type as React.ComponentType)?.displayName === 'AnimatedTabsList',
  );
  const panels = childArray.filter(
    c => React.isValidElement(c) && (c.type as React.ComponentType)?.displayName === 'AnimatedTabsContent',
  );

  return (
    <TabsPrimitive.Root data-slot="tabs" defaultValue={defaultValue} className="gap-2 group/tabs flex flex-col">
      {list}
      {mounted && (
        <motion.div
          animate={{ height: bounds.height > 0 ? bounds.height : 300 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
          className="overflow-hidden will-change-transform"
        >
          <div ref={ref}>{panels}</div>
        </motion.div>
      )}
    </TabsPrimitive.Root>
  );
}

export function AnimatedTabsList({ className, children, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'inline-flex h-12 w-full items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </TabsPrimitive.List>
  );
}
AnimatedTabsList.displayName = 'AnimatedTabsList';

export function AnimatedTabsTrigger({ value, children, className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      value={value}
      data-slot="tabs-trigger"
      className={cn(
        'relative z-10 inline-flex h-[calc(100%-2px)] flex-1 items-center justify-center whitespace-nowrap rounded-xl px-3 py-1.5 text-sm font-medium transition-all',
        'text-muted-foreground hover:text-foreground',
        'data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
        'focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
}
AnimatedTabsTrigger.displayName = 'AnimatedTabsTrigger';

export function AnimatedTabsContent({ value, children, className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      value={value}
      data-slot="tabs-content"
      className={cn('text-sm outline-none', className)}
      {...props}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={value}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </TabsPrimitive.Content>
  );
}
AnimatedTabsContent.displayName = 'AnimatedTabsContent';
