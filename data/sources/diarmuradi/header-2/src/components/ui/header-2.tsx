"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

import { Button } from "@/components/ui/header-2-utils/button";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/ui/header-2-utils/icons";
import { EqualIcon, XIcon } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex w-full justify-center px-4">
      <nav className="flex w-full max-w-md flex-col gap-2 sm:h-14 sm:max-w-fit sm:flex-row sm:items-center sm:gap-2 sm:px-2">
        <div className="flex h-14 w-full items-center justify-between sm:w-auto sm:shrink-0">
          <Link
            href="#"
            className="flex size-10 shrink-0 items-center justify-center rounded-xl"
          >
            <Icons.Logo className="size-6 text-foreground" />
          </Link>

          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="ghost"
            className="size-10 shrink-0 rounded-xl text-foreground sm:hidden *:[&>svg]:size-5"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <XIcon /> : <EqualIcon />}
          </Button>
        </div>

        <div className="hidden h-5 items-center justify-center sm:flex">
          <Separator orientation="vertical" className="bg-border/50" />
        </div>

        <div className="group hidden items-center gap-1 sm:flex">
          {NAV_LINKS.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              className="h-9 bg-transparent text-muted-foreground shadow-none transition-colors duration-300 ease-in-out group-has-[a:hover]:text-muted-foreground/50 hover:bg-transparent hover:text-foreground hover:group-has-[a:hover]:text-foreground focus:bg-transparent focus:text-foreground"
              render={<Link href={link.href} />}
              nativeButton={false}
            >
              {link.label}
            </Button>
          ))}
        </div>

        <div className="hidden h-5 items-center justify-center sm:flex">
          <Separator orientation="vertical" className="bg-border/50" />
        </div>

        <div className="hidden shrink-0 items-center gap-1 sm:flex">
          <Button
            variant="secondary"
            size="lg"
            className="h-10 rounded-l-full rounded-r-lg px-4"
          >
            Sign up
          </Button>
          <Button size="lg" className="h-10 rounded-l-none rounded-r-lg px-4">
            Sign in
          </Button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex w-full flex-col gap-2 rounded-3xl bg-popover p-2 shadow-elevated-sm sm:hidden"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    className="h-11 w-full justify-start rounded-2xl px-4 text-muted-foreground hover:bg-transparent hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                    render={<Link href={link.href} />}
                    nativeButton={false}
                  >
                    {link.label}
                  </Button>
                ))}
              </div>

              <Separator className="bg-border/50" />

              <div className="grid grid-cols-2 gap-1">
                <Button
                  variant="secondary"
                  size="lg"
                  className="h-11 w-full min-w-0 rounded-l-2xl rounded-r-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Sign up
                </Button>
                <Button
                  size="lg"
                  className="h-11 w-full min-w-0 rounded-l-none rounded-r-2xl"
                  onClick={() => setIsOpen(false)}
                >
                  Sign in
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
export default SiteHeader;
