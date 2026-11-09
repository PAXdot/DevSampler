'use client';

import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

export function cn(...inputs: (string | false | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

export const Drawer = DrawerPrimitive.Root;
export const DrawerTrigger = DrawerPrimitive.Trigger;
export const DrawerClose = DrawerPrimitive.Close;
export const DrawerTitle = DrawerPrimitive.Title;
export const DrawerDescription = DrawerPrimitive.Description;

export function DrawerContent({ className, children, ...props }: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPrimitive.Portal>
      <DrawerPrimitive.Overlay
        className={cn(
          'bg-black/80 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        )}
      />
      <DrawerPrimitive.Content
        className={cn(
          'bg-popover fixed z-50 flex h-auto flex-col outline-none',
          'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24',
          'data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-[36px]',
          'data-[vaul-drawer-direction=bottom]:md:mx-auto data-[vaul-drawer-direction=bottom]:md:w-full data-[vaul-drawer-direction=bottom]:md:max-w-[361px]',
          'p-0 border-0',
          'overflow-hidden',
          className,
        )}
        {...props}
      >
        {children}
      </DrawerPrimitive.Content>
    </DrawerPrimitive.Portal>
  );
}
