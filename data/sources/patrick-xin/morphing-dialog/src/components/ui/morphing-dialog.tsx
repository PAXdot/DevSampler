"use client";

import type { DialogRootActions } from "@base-ui/react/dialog";
import { PlusIcon, X } from "lucide-react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/morphing-dialog-utils/button";
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogPopup,
  DialogPortal,
  DialogTitle,
  DialogViewport,
} from "@/components/ui/morphing-dialog-utils/dialog";
import { ScrollArea } from "@/components/ui/morphing-dialog-utils/scroll-area";

export function MorphingDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<(typeof ITEMS)[0] | null>(null);

  const actionsRef = useRef<DialogRootActions>({
    close: () => {},
    unmount: () => {},
  });

  const handleOpen = (item: (typeof ITEMS)[0]) => {
    setActiveItem(item);
    setIsOpen(true);
  };

  const handleClose = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <div>
      <LayoutGroup>
        <ScrollArea
          className="w-screen whitespace-nowrap container"
          noScrollBar
        >
          <div className="flex gap-2 md:gap-6 lg:gap-10 mx-auto">
            {ITEMS.map((item) => (
              <motion.button
                className="relative group flex flex-col cursor-pointer bg-muted hover:bg-muted/80 transition-colors flex-1 size-64 lg:size-80 rounded focus-visible:outline focus-visible:outline-ring focus-visible:ring-4 focus-visible:ring-ring/10"
                key={item.id}
                layoutId={`card-container-${item.id}`}
                onClick={() => handleOpen(item)}
                style={{
                  opacity: activeItem?.id === item.id && isOpen ? 0 : 1,
                  pointerEvents:
                    activeItem?.id === item.id && isOpen ? "none" : "auto",
                }}
              >
                <div className="relative h-48 w-full overflow-hidden rounded rounded-b-none">
                  <motion.div
                    className="w-full h-full"
                    layoutId={`image-container-${item.id}`}
                  >
                    <img
                      alt={item.title}
                      className="h-full w-full object-cover dark:brightness-20 dark:grayscale-25"
                      height={500}
                      src={item.image}
                      width={500}
                    />
                  </motion.div>
                </div>
                <div className="flex flex-1 p-4 justify-between items-center rounded rounded-t-none">
                  <motion.h3
                    className="text-lg font-semibold"
                    layoutId={`title-${item.id}`}
                    transition={{ duration: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>

                  <PlusIcon className="group-hover:text-foreground text-muted-foreground transition-all" />
                </div>
              </motion.button>
            ))}
          </div>
        </ScrollArea>
        <Dialog
          actionsRef={actionsRef}
          onOpenChange={handleClose}
          open={isOpen}
        >
          <AnimatePresence mode="popLayout">
            {isOpen && activeItem && (
              <DialogPortal keepMounted>
                <DialogBackdrop />
                <DialogViewport
                  className="grid place-items-center p-4 pt-32"
                  hidden={false}
                >
                  <DialogPopup
                    className="relative w-full max-w-4xl flex flex-col overflow-hidden rounded"
                    hidden={false}
                    render={
                      <motion.div
                        layoutId={`card-container-${activeItem.id}`}
                        onLayoutAnimationComplete={() => {
                          if (!isOpen) {
                            actionsRef.current?.unmount();
                            setTimeout(() => setActiveItem(null), 50);
                          }
                        }}
                      />
                    }
                  >
                    <ScrollArea className="h-[calc(100vh-4rem)]" noScrollBar>
                      <motion.div
                        animate={{ opacity: 1 }}
                        className="flex flex-col h-full pb-[10vh]"
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        transition={{
                          duration: 0.15,
                        }}
                      >
                        <div className="relative h-64 sm:h-96 w-full shrink-0 overflow-hidden">
                          <motion.div
                            className="w-full h-full"
                            layoutId={`image-container-${activeItem.id}`}
                          >
                            <img
                              alt={activeItem.title}
                              className="h-full w-full object-cover dark:brightness-20 dark:grayscale-25"
                              height={500}
                              src={activeItem.image}
                              width={500}
                            />
                          </motion.div>
                        </div>

                        <div className="flex flex-col p-4 sm:p-8 justify-start text-left space-y-6">
                          <DialogTitle
                            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold"
                            render={
                              <motion.h2 layoutId={`title-${activeItem.id}`}>
                                {activeItem.title}
                              </motion.h2>
                            }
                          />
                          <motion.div
                            animate={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.2 }}
                          >
                            {activeItem.content}
                          </motion.div>
                        </div>

                        <DialogClose
                          className="absolute right-4 top-4 z-20"
                          render={
                            <Button
                              className="rounded-full shadow-lg"
                              size="icon"
                              variant="secondary"
                            >
                              <X size={16} />
                            </Button>
                          }
                        />
                      </motion.div>
                    </ScrollArea>
                  </DialogPopup>
                </DialogViewport>
              </DialogPortal>
            )}
          </AnimatePresence>
        </Dialog>
      </LayoutGroup>
    </div>
  );
}

type CardItem = {
  id: string;
  title: string;
  image: string;
  content: React.ReactNode;
};

const ITEMS: CardItem[] = [
  {
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Modern development is human + AI. We optimized Lumi UI's structure so
          that AI assistants generate correct, idiomatic code on the first
          attempt.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Flat Semantic Exports:</strong>{" "}
            Every component is accessible at the root level, making it easier
            for AI to infer usage and reducing context tokens.
          </li>
          <li>
            <strong className="text-foreground">
              Composites as Living Examples:
            </strong>{" "}
            Our composite components serve as executable documentation.
          </li>
          <li>
            <strong className="text-foreground">Immutable Logic Blocks:</strong>{" "}
            Primitives are stable building blocks. You compose them rather than
            modifying core logic.
          </li>
        </ul>
        <div className="pt-8">
          <h4 className="text-foreground font-semibold mb-4 text-lg">
            Deep Dive: Optimization
          </h4>
          <div className="grid gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div className="bg-muted/50 rounded-lg p-4 space-y-2" key={i}>
                <div className="h-4 w-1/3 bg-muted rounded" />
                <div className="h-20 w-full bg-muted rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    id: "card-1",
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9Im5vbmUiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IiNFQUVBRUEiIHJ4PSIzIi8+PGcgb3BhY2l0eT0iLjUiPjxnIG9wYWNpdHk9Ii41Ij48cGF0aCBmaWxsPSIjRkFGQUZBIiBkPSJNNjAwLjcwOSA3MzYuNWMtNzUuNDU0IDAtMTM2LjYyMS02MS4xNjctMTM2LjYyMS0xMzYuNjIgMC03NS40NTQgNjEuMTY3LTEzNi42MjEgMTM2LjYyMS0xMzYuNjIxIDc1LjQ1MyAwIDEzNi42MiA2MS4xNjcgMTM2LjYyIDEzNi42MjEgMCA3NS40NTMtNjEuMTY3IDEzNi42Mi0xMzYuNjIgMTM2LjYyWiIvPjxwYXRoIHN0cm9rZT0iI0M5QzlDOSIgc3Ryb2tlLXdpZHRoPSIyLjQxOCIgZD0iTTYwMC43MDkgNzM2LjVjLTc1LjQ1NCAwLTEzNi42MjEtNjEuMTY3LTEzNi42MjEtMTM2LjYyIDAtNzUuNDU0IDYxLjE2Ny0xMzYuNjIxIDEzNi42MjEtMTM2LjYyMSA3NS40NTMgMCAxMzYuNjIgNjEuMTY3IDEzNi42MiAxMzYuNjIxIDAgNzUuNDUzLTYxLjE2NyAxMzYuNjItMTM2LjYyIDEzNi42MloiLz48L2c+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIuNDE4IiBkPSJNMC0xLjIwOWg1NTMuNTgxIiB0cmFuc2Zvcm09InNjYWxlKDEgLTEpIHJvdGF0ZSg0NSAxMTYzLjExIDkxLjE2NSkiLz48cGF0aCBzdHJva2U9InVybCgjYikiIHN0cm9rZS13aWR0aD0iMi40MTgiIGQ9Ik00MDQuODQ2IDU5OC42NzFoMzkxLjcyNiIvPjxwYXRoIHN0cm9rZT0idXJsKCNjKSIgc3Ryb2tlLXdpZHRoPSIyLjQxOCIgZD0iTTU5OS41IDc5NS43NDJWNDA0LjAxNyIvPjxwYXRoIHN0cm9rZT0idXJsKCNkKSIgc3Ryb2tlLXdpZHRoPSIyLjQxOCIgZD0ibTc5NS43MTcgNzk2LjU5Ny0zOTEuNDQxLTM5MS40NCIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02MDAuNzA5IDY1Ni43MDRjLTMxLjM4NCAwLTU2LjgyNS0yNS40NDEtNTYuODI1LTU2LjgyNCAwLTMxLjM4NCAyNS40NDEtNTYuODI1IDU2LjgyNS01Ni44MjUgMzEuMzgzIDAgNTYuODI0IDI1LjQ0MSA1Ni44MjQgNTYuODI1IDAgMzEuMzgzLTI1LjQ0MSA1Ni44MjQtNTYuODI0IDU2LjgyNFoiLz48ZyBjbGlwLXBhdGg9InVybCgjZSkiPjxwYXRoIGZpbGw9IiM2NjYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYxNi40MjYgNTg2LjU4aC0zMS40MzR2MTYuMTc2bDMuNTUzLTMuNTU0LjUzMS0uNTMxaDkuMDY4bC4wNzQtLjA3NCA4LjQ2My04LjQ2M2gyLjU2NWw3LjE4IDcuMTgxVjU4Ni41OFptLTE1LjcxNSAxNC42NTQgMy42OTggMy42OTkgMS4yODMgMS4yODItMi41NjUgMi41NjUtMS4yODItMS4yODMtNS4yLTUuMTk5aC02LjA2NmwtNS41MTQgNS41MTQtLjA3My4wNzN2Mi44NzZhMi40MTggMi40MTggMCAwIDAgMi40MTggMi40MThoMjYuNTk4YTIuNDE4IDIuNDE4IDAgMCAwIDIuNDE4LTIuNDE4di04LjMxN2wtOC40NjMtOC40NjMtNy4xODEgNy4xODEtLjA3MS4wNzJabS0xOS4zNDcgNS40NDJ2NC4wODVhNi4wNDUgNi4wNDUgMCAwIDAgNi4wNDYgNi4wNDVoMjYuNTk4YTYuMDQ0IDYuMDQ0IDAgMCAwIDYuMDQ1LTYuMDQ1di03LjEwOGwxLjM1Ni0xLjM1NS0xLjI4Mi0xLjI4My0uMDc0LS4wNzN2LTE3Ljk4OWgtMzguNjg5djIzLjQzbC0uMTQ2LjE0Ni4xNDYuMTQ3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0M5QzlDOSIgc3Ryb2tlLXdpZHRoPSIyLjQxOCIgZD0iTTYwMC43MDkgNjU2LjcwNGMtMzEuMzg0IDAtNTYuODI1LTI1LjQ0MS01Ni44MjUtNTYuODI0IDAtMzEuMzg0IDI1LjQ0MS01Ni44MjUgNTYuODI1LTU2LjgyNSAzMS4zODMgMCA1Ni44MjQgMjUuNDQxIDU2LjgyNCA1Ni44MjUgMCAzMS4zODMtMjUuNDQxIDU2LjgyNC01Ni44MjQgNTYuODI0WiIvPjwvZz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSI1NTQuMDYxIiB4Mj0iLS40OCIgeTE9Ii4wODMiIHkyPSIuMDg3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0M5QzlDOSIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIuMjA4IiBzdG9wLWNvbG9yPSIjQzlDOUM5Ii8+PHN0b3Agb2Zmc2V0PSIuNzkyIiBzdG9wLWNvbG9yPSIjQzlDOUM5Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQzlDOUM5IiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ijc5Ni45MTIiIHgyPSI0MDQuNTA3IiB5MT0iNTk5Ljk2MyIgeTI9IjU5OS45NjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjQzlDOUM5IiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9Ii4yMDgiIHN0b3AtY29sb3I9IiNDOUM5QzkiLz48c3RvcCBvZmZzZXQ9Ii43OTIiIHN0b3AtY29sb3I9IiNDOUM5QzkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNDOUM5QzkiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iNjAwLjc5MiIgeDI9IjYwMC43OTQiIHkxPSI0MDMuNjc3IiB5Mj0iNzk2LjA4MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNDOUM5QzkiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iLjIwOCIgc3RvcC1jb2xvcj0iI0M5QzlDOSIvPjxzdG9wIG9mZnNldD0iLjc5MiIgc3RvcC1jb2xvcj0iI0M5QzlDOSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M5QzlDOSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgxPSI0MDQuODUiIHgyPSI3OTYuOTcyIiB5MT0iNDAzLjkwMyIgeTI9Ijc5Ni4wMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNDOUM5QzkiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iLjIwOCIgc3RvcC1jb2xvcj0iI0M5QzlDOSIvPjxzdG9wIG9mZnNldD0iLjc5MiIgc3RvcC1jb2xvcj0iI0M5QzlDOSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M5QzlDOSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48Y2xpcFBhdGggaWQ9ImUiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01ODEuMzY0IDU4MC41MzVoMzguNjg5djM4LjY4OWgtMzguNjg5eiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==",
    title: "Discoverable",
  },
  {
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Base UI provides the behavioral foundation, but we provide the visual
          consistency. Every component adapts to your needs following a unified
          language.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">The Utility Pattern:</strong> We
            use utility classes to provide consistent styling across all
            components.
          </li>
          <li>
            <strong className="text-foreground">Global Animation:</strong> All
            interactive elements use globally configured animation utilities for
            cohesive transitions.
          </li>
          <li>
            <strong className="text-foreground">Hit-Test Philosophy:</strong> We
            use pseudo-elements to separate visual highlights from interactive
            containers, creating forgiving, clickable areas.
          </li>
        </ul>
        <div className="pt-8">
          <h4 className="text-foreground font-semibold mb-4 text-lg">
            Design System Specs
          </h4>
          <div className="grid gap-4">
            <div className="aspect-video bg-muted rounded-lg w-full flex items-center justify-center text-muted-foreground">
              Animation Curve Visualization
            </div>
            <div className="aspect-video bg-muted rounded-lg w-full flex items-center justify-center text-muted-foreground">
              Spacing Scale
            </div>
          </div>
        </div>
      </div>
    ),
    id: "card-2",
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9Im5vbmUiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IiNFQUVBRUEiIHJ4PSIzIi8+PGcgb3BhY2l0eT0iLjUiPjxnIG9wYWNpdHk9Ii41Ij48cGF0aCBmaWxsPSIjRkFGQUZBIiBkPSJNNjAwLjcwOSA3MzYuNWMtNzUuNDU0IDAtMTM2LjYyMS02MS4xNjctMTM2LjYyMS0xMzYuNjIgMC03NS40NTQgNjEuMTY3LTEzNi42MjEgMTM2LjYyMS0xMzYuNjIxIDc1LjQ1MyAwIDEzNi42MiA2MS4xNjcgMTM2LjYyIDEzNi42MjEgMCA3NS40NTMtNjEuMTY3IDEzNi42Mi0xMzYuNjIgMTM2LjYyWiIvPjxwYXRoIHN0cm9rZT0iI0M5QzlDOSIgc3Ryb2tlLXdpZHRoPSIyLjQxOCIgZD0iTTYwMC43MDkgNzM2LjVjLTc1LjQ1NCAwLTEzNi42MjEtNjEuMTY3LTEzNi42MjEtMTM2LjYyIDAtNzUuNDU0IDYxLjE2Ny0xMzYuNjIxIDEzNi42MjEtMTM2LjYyMSA3NS40NTMgMCAxMzYuNjIgNjEuMTY3IDEzNi42MiAxMzYuNjIxIDAgNzUuNDUzLTYxLjE2NyAxMzYuNjItMTM2LjYyIDEzNi42MloiLz48L2c+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIuNDE4IiBkPSJNMC0xLjIwOWg1NTMuNTgxIiB0cmFuc2Zvcm09InNjYWxlKDEgLTEpIHJvdGF0ZSg0NSAxMTYzLjExIDkxLjE2NSkiLz48cGF0aCBzdHJva2U9InVybCgjYikiIHN0cm9rZS13aWR0aD0iMi40MTgiIGQ9Ik00MDQuODQ2IDU5OC42NzFoMzkxLjcyNiIvPjxwYXRoIHN0cm9rZT0idXJsKCNjKSIgc3Ryb2tlLXdpZHRoPSIyLjQxOCIgZD0iTTU5OS41IDc5NS43NDJWNDA0LjAxNyIvPjxwYXRoIHN0cm9rZT0idXJsKCNkKSIgc3Ryb2tlLXdpZHRoPSIyLjQxOCIgZD0ibTc5NS43MTcgNzk2LjU5Ny0zOTEuNDQxLTM5MS40NCIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02MDAuNzA5IDY1Ni43MDRjLTMxLjM4NCAwLTU2LjgyNS0yNS40NDEtNTYuODI1LTU2LjgyNCAwLTMxLjM4NCAyNS40NDEtNTYuODI1IDU2LjgyNS01Ni44MjUgMzEuMzgzIDAgNTYuODI0IDI1LjQ0MSA1Ni44MjQgNTYuODI1IDAgMzEuMzgzLTI1LjQ0MSA1Ni44MjQtNTYuODI0IDU2LjgyNFoiLz48ZyBjbGlwLXBhdGg9InVybCgjZSkiPjxwYXRoIGZpbGw9IiM2NjYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYxNi40MjYgNTg2LjU4aC0zMS40MzR2MTYuMTc2bDMuNTUzLTMuNTU0LjUzMS0uNTMxaDkuMDY4bC4wNzQtLjA3NCA4LjQ2My04LjQ2M2gyLjU2NWw3LjE4IDcuMTgxVjU4Ni41OFptLTE1LjcxNSAxNC42NTQgMy42OTggMy42OTkgMS4yODMgMS4yODItMi41NjUgMi41NjUtMS4yODItMS4yODMtNS4yLTUuMTk5aC02LjA2NmwtNS41MTQgNS41MTQtLjA3My4wNzN2Mi44NzZhMi40MTggMi40MTggMCAwIDAgMi40MTggMi40MThoMjYuNTk4YTIuNDE4IDIuNDE4IDAgMCAwIDIuNDE4LTIuNDE4di04LjMxN2wtOC40NjMtOC40NjMtNy4xODEgNy4xODEtLjA3MS4wNzJabS0xOS4zNDcgNS40NDJ2NC4wODVhNi4wNDUgNi4wNDUgMCAwIDAgNi4wNDYgNi4wNDVoMjYuNTk4YTYuMDQ0IDYuMDQ0IDAgMCAwIDYuMDQ1LTYuMDQ1di03LjEwOGwxLjM1Ni0xLjM1NS0xLjI4Mi0xLjI4My0uMDc0LS4wNzN2LTE3Ljk4OWgtMzguNjg5djIzLjQzbC0uMTQ2LjE0Ni4xNDYuMTQ3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0M5QzlDOSIgc3Ryb2tlLXdpZHRoPSIyLjQxOCIgZD0iTTYwMC43MDkgNjU2LjcwNGMtMzEuMzg0IDAtNTYuODI1LTI1LjQ0MS01Ni44MjUtNTYuODI0IDAtMzEuMzg0IDI1LjQ0MS01Ni44MjUgNTYuODI1LTU2LjgyNSAzMS4zODMgMCA1Ni44MjQgMjUuNDQxIDU2LjgyNCA1Ni44MjUgMCAzMS4zODMtMjUuNDQxIDU2LjgyNC01Ni44MjQgNTYuODI0WiIvPjwvZz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSI1NTQuMDYxIiB4Mj0iLS40OCIgeTE9Ii4wODMiIHkyPSIuMDg3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0M5QzlDOSIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIuMjA4IiBzdG9wLWNvbG9yPSIjQzlDOUM5Ii8+PHN0b3Agb2Zmc2V0PSIuNzkyIiBzdG9wLWNvbG9yPSIjQzlDOUM5Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQzlDOUM5IiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ijc5Ni45MTIiIHgyPSI0MDQuNTA3IiB5MT0iNTk5Ljk2MyIgeTI9IjU5OS45NjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjQzlDOUM5IiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9Ii4yMDgiIHN0b3AtY29sb3I9IiNDOUM5QzkiLz48c3RvcCBvZmZzZXQ9Ii43OTIiIHN0b3AtY29sb3I9IiNDOUM5QzkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNDOUM5QzkiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iNjAwLjc5MiIgeDI9IjYwMC43OTQiIHkxPSI0MDMuNjc3IiB5Mj0iNzk2LjA4MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNDOUM5QzkiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iLjIwOCIgc3RvcC1jb2xvcj0iI0M5QzlDOSIvPjxzdG9wIG9mZnNldD0iLjc5MiIgc3RvcC1jb2xvcj0iI0M5QzlDOSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M5QzlDOSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgxPSI0MDQuODUiIHgyPSI3OTYuOTcyIiB5MT0iNDAzLjkwMyIgeTI9Ijc5Ni4wMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNDOUM5QzkiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iLjIwOCIgc3RvcC1jb2xvcj0iI0M5QzlDOSIvPjxzdG9wIG9mZnNldD0iLjc5MiIgc3RvcC1jb2xvcj0iI0M5QzlDOSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M5QzlDOSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48Y2xpcFBhdGggaWQ9ImUiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01ODEuMzY0IDU4MC41MzVoMzguNjg5djM4LjY4OWgtMzguNjg5eiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==",
    title: "Predictable",
  },
  {
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          We refuse the false dichotomy between speed and control. Our Dual
          Layer Architecture accommodates both prototyping and polishing modes.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Composites = Velocity:</strong>{" "}
            Pre-assembled components that combine structure, styling, and logic
            for MVPs and standard use cases.
          </li>
          <li>
            <strong className="text-foreground">Primitives = Control:</strong>{" "}
            Thin wrappers around Base UI that enforce zero visual layout, giving
            you complete control over DOM structure.
          </li>
          <li>
            <strong className="text-foreground">Mix and Match:</strong> Use
            composites for speed and primitive blocks for unique custom designs
            in the same project.
          </li>
        </ul>
        <div className="pt-8">
          <h4 className="text-foreground font-semibold mb-4 text-lg">
            Component Architecture
          </h4>
          <div className="flex flex-col gap-4">
            <div className="h-32 bg-muted rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
              Composite Layer
            </div>
            <div className="h-10 text-center text-muted-foreground text-sm">
              ↓ Adapts to ↓
            </div>
            <div className="h-32 bg-muted rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
              Primitive Layer
            </div>
          </div>
        </div>
      </div>
    ),
    id: "card-3",
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9Im5vbmUiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IiNFQUVBRUEiIHJ4PSIzIi8+PGcgb3BhY2l0eT0iLjUiPjxnIG9wYWNpdHk9Ii41Ij48cGF0aCBmaWxsPSIjRkFGQUZBIiBkPSJNNjAwLjcwOSA3MzYuNWMtNzUuNDU0IDAtMTM2LjYyMS02MS4xNjctMTM2LjYyMS0xMzYuNjIgMC03NS40NTQgNjEuMTY3LTEzNi42MjEgMTM2LjYyMS0xMzYuNjIxIDc1LjQ1MyAwIDEzNi42MiA2MS4xNjcgMTM2LjYyIDEzNi42MjEgMCA3NS40NTMtNjEuMTY3IDEzNi42Mi0xMzYuNjIgMTM2LjYyWiIvPjxwYXRoIHN0cm9rZT0iI0M5QzlDOSIgc3Ryb2tlLXdpZHRoPSIyLjQxOCIgZD0iTTYwMC43MDkgNzM2LjVjLTc1LjQ1NCAwLTEzNi42MjEtNjEuMTY3LTEzNi42MjEtMTM2LjYyIDAtNzUuNDU0IDYxLjE2Ny0xMzYuNjIxIDEzNi42MjEtMTM2LjYyMSA3NS40NTMgMCAxMzYuNjIgNjEuMTY3IDEzNi42MiAxMzYuNjIxIDAgNzUuNDUzLTYxLjE2NyAxMzYuNjItMTM2LjYyIDEzNi42MloiLz48L2c+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIuNDE4IiBkPSJNMC0xLjIwOWg1NTMuNTgxIiB0cmFuc2Zvcm09InNjYWxlKDEgLTEpIHJvdGF0ZSg0NSAxMTYzLjExIDkxLjE2NSkiLz48cGF0aCBzdHJva2U9InVybCgjYikiIHN0cm9rZS13aWR0aD0iMi40MTgiIGQ9Ik00MDQuODQ2IDU5OC42NzFoMzkxLjcyNiIvPjxwYXRoIHN0cm9rZT0idXJsKCNjKSIgc3Ryb2tlLXdpZHRoPSIyLjQxOCIgZD0iTTU5OS41IDc5NS43NDJWNDA0LjAxNyIvPjxwYXRoIHN0cm9rZT0idXJsKCNkKSIgc3Ryb2tlLXdpZHRoPSIyLjQxOCIgZD0ibTc5NS43MTcgNzk2LjU5Ny0zOTEuNDQxLTM5MS40NCIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02MDAuNzA5IDY1Ni43MDRjLTMxLjM4NCAwLTU2LjgyNS0yNS40NDEtNTYuODI1LTU2LjgyNCAwLTMxLjM4NCAyNS40NDEtNTYuODI1IDU2LjgyNS01Ni44MjUgMzEuMzgzIDAgNTYuODI0IDI1LjQ0MSA1Ni44MjQgNTYuODI1IDAgMzEuMzgzLTI1LjQ0MSA1Ni44MjQtNTYuODI0IDU2LjgyNFoiLz48ZyBjbGlwLXBhdGg9InVybCgjZSkiPjxwYXRoIGZpbGw9IiM2NjYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYxNi40MjYgNTg2LjU4aC0zMS40MzR2MTYuMTc2bDMuNTUzLTMuNTU0LjUzMS0uNTMxaDkuMDY4bC4wNzQtLjA3NCA4LjQ2My04LjQ2M2gyLjU2NWw3LjE4IDcuMTgxVjU4Ni41OFptLTE1LjcxNSAxNC42NTQgMy42OTggMy42OTkgMS4yODMgMS4yODItMi41NjUgMi41NjUtMS4yODItMS4yODMtNS4yLTUuMTk5aC02LjA2NmwtNS41MTQgNS41MTQtLjA3My4wNzN2Mi44NzZhMi40MTggMi40MTggMCAwIDAgMi40MTggMi40MThoMjYuNTk4YTIuNDE4IDIuNDE4IDAgMCAwIDIuNDE4LTIuNDE4di04LjMxN2wtOC40NjMtOC40NjMtNy4xODEgNy4xODEtLjA3MS4wNzJabS0xOS4zNDcgNS40NDJ2NC4wODVhNi4wNDUgNi4wNDUgMCAwIDAgNi4wNDYgNi4wNDVoMjYuNTk4YTYuMDQ0IDYuMDQ0IDAgMCAwIDYuMDQ1LTYuMDQ1di03LjEwOGwxLjM1Ni0xLjM1NS0xLjI4Mi0xLjI4My0uMDc0LS4wNzN2LTE3Ljk4OWgtMzguNjg5djIzLjQzbC0uMTQ2LjE0Ni4xNDYuMTQ3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0M5QzlDOSIgc3Ryb2tlLXdpZHRoPSIyLjQxOCIgZD0iTTYwMC43MDkgNjU2LjcwNGMtMzEuMzg0IDAtNTYuODI1LTI1LjQ0MS01Ni44MjUtNTYuODI0IDAtMzEuMzg0IDI1LjQ0MS01Ni44MjUgNTYuODI1LTU2LjgyNSAzMS4zODMgMCA1Ni44MjQgMjUuNDQxIDU2LjgyNCA1Ni44MjUgMCAzMS4zODMtMjUuNDQxIDU2LjgyNC01Ni44MjQgNTYuODI0WiIvPjwvZz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSI1NTQuMDYxIiB4Mj0iLS40OCIgeTE9Ii4wODMiIHkyPSIuMDg3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0M5QzlDOSIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIuMjA4IiBzdG9wLWNvbG9yPSIjQzlDOUM5Ii8+PHN0b3Agb2Zmc2V0PSIuNzkyIiBzdG9wLWNvbG9yPSIjQzlDOUM5Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQzlDOUM5IiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ijc5Ni45MTIiIHgyPSI0MDQuNTA3IiB5MT0iNTk5Ljk2MyIgeTI9IjU5OS45NjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjQzlDOUM5IiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9Ii4yMDgiIHN0b3AtY29sb3I9IiNDOUM5QzkiLz48c3RvcCBvZmZzZXQ9Ii43OTIiIHN0b3AtY29sb3I9IiNDOUM5QzkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNDOUM5QzkiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iNjAwLjc5MiIgeDI9IjYwMC43OTQiIHkxPSI0MDMuNjc3IiB5Mj0iNzk2LjA4MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNDOUM5QzkiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iLjIwOCIgc3RvcC1jb2xvcj0iI0M5QzlDOSIvPjxzdG9wIG9mZnNldD0iLjc5MiIgc3RvcC1jb2xvcj0iI0M5QzlDOSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M5QzlDOSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgxPSI0MDQuODUiIHgyPSI3OTYuOTcyIiB5MT0iNDAzLjkwMyIgeTI9Ijc5Ni4wMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNDOUM5QzkiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iLjIwOCIgc3RvcC1jb2xvcj0iI0M5QzlDOSIvPjxzdG9wIG9mZnNldD0iLjc5MiIgc3RvcC1jb2xvcj0iI0M5QzlDOSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M5QzlDOSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48Y2xpcFBhdGggaWQ9ImUiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01ODEuMzY0IDU4MC41MzVoMzguNjg5djM4LjY4OWgtMzguNjg5eiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==",
    title: "Composable",
  },
];

export default MorphingDialog;
