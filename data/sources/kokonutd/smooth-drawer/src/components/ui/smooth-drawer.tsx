"use client";

/**
 * @author: @dorianbaffier
 * @description: Smooth Drawer
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { Fingerprint } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface PriceTagProps {
  price: number;
  discountedPrice: number;
}

function PriceTag({ price, discountedPrice }: PriceTagProps) {
  return (
    <div className="mx-auto flex max-w-fit items-center justify-around gap-4">
      <div className="flex items-baseline gap-2">
        <span className="bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text font-bold text-4xl text-transparent dark:from-white dark:to-zinc-300">
          ${discountedPrice}
        </span>
        <span className="text-lg text-zinc-400 line-through dark:text-zinc-500">
          ${price}
        </span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <span className="font-medium text-sm text-zinc-900 dark:text-zinc-100">
          Lifetime access
        </span>
        <span className="text-xs text-zinc-700 dark:text-zinc-300">
          One-time payment
        </span>
      </div>
    </div>
  );
}

interface DrawerDemoProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  price?: number;
  discountedPrice?: number;
}

const drawerVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
    rotateX: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
  },
};

export default function SmoothDrawer({
  title = "KokonutUI - Pro",
  description = "100+ collection of UI Components and templates built for React, Next.js, and Tailwind CSS. Spend no time on design and focus on shipping.",
  primaryButtonText = "Buy Now",
  secondaryButtonText = "Maybe Later",
  onSecondaryAction,
  price = 169,
  discountedPrice = 99,
}: DrawerDemoProps) {
  const handleSecondaryClick = () => {
    onSecondaryAction?.();
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="mx-auto max-w-fit rounded-2xl p-6 shadow-xl">
        <motion.div
          animate="visible"
          className="mx-auto w-full max-w-[340px] space-y-6"
          initial="hidden"
          variants={drawerVariants as any}
        >
          <motion.div variants={itemVariants as any}>
            <DrawerHeader className="space-y-2.5 px-0">
              <DrawerTitle className="flex items-center gap-2.5 font-semibold text-2xl tracking-tighter">
                <motion.div variants={itemVariants as any}>
                  <div className="rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 p-1.5 shadow-inner dark:from-zinc-800 dark:to-zinc-900">
                    <Image
                      alt="Logo"
                      height={32}
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHN0eWxlPgogIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHsKICAgIC50aGVtZS1wcmltYXJ5IHsgZmlsbDogd2hpdGU7IH0KICAgIC50aGVtZS1hY2NlbnQgeyBmaWxsOiAjM0JCNDRCOyB9CiAgfQogIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KSB7CiAgICAudGhlbWUtcHJpbWFyeSB7IGZpbGw6ICMwQzBDMEM7IGZpbGwtb3BhY2l0eTogMC44MjsgfQogICAgLnRoZW1lLXByaW1hcnktc29saWQgeyBmaWxsOiAjMTExMTExOyB9CiAgICAudGhlbWUtYWNjZW50IHsgZmlsbDogIzJDRDI0MjsgfQogIH0KPC9zdHlsZT4KPHBhdGggY2xhc3M9InRoZW1lLXByaW1hcnkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMzY0OCAyNC4xNDA1QzE0LjYwNjQgMjguMDYwNCAyMC44MTAzIDI5LjY5NyAyNC42OTI5IDI3LjQzMzlDMjcuODg0NSAyNS41NzM2IDI5LjMwODYgMjEuMjAyNyAyOC40NjkzIDE3LjUyODVDMjguMTA5NiAxNS45NTQxIDI3LjEwNzQgMTQuNjEzNCAyNS44NzQ3IDEzLjU4MjVDMjUuNjg2MyAxMy40MjUgMjUuNDk1NiAxMy4yNzM1IDI1LjMwMjcgMTMuMTI4M0MyNS43NzQgMTMuNjM4OCAyNi4xOTc3IDE0LjIxMzEgMjYuNTYwMiAxNC44NDcxQzI4Ljk2NzMgMTkuMDU2MyAyNy43NzEyIDI0LjMwMzEgMjMuODg4NiAyNi41NjYyQzIwLjAwNiAyOC44Mjk0IDE0LjkwNzIgMjcuMjUxNyAxMi41MDAxIDIzLjA0MjVDMTEuODc1NSAyMS45NTA0IDExLjQ5MzUgMjAuNzg4NCAxMS4zMzgxIDE5LjYyNjhDMTEuMjc5NSAyMS4yMjQ0IDExLjYwMjQgMjIuODA3NCAxMi4zNjQ4IDI0LjE0MDVaIi8+CjxwYXRoIGNsYXNzPSJ0aGVtZS1wcmltYXJ5LXNvbGlkIHRoZW1lLXByaW1hcnkiIGQ9Ik0yNS45MTY4IDE5LjI2ODdDMjUuOTE2OCAyMi41OTQyIDIzLjI0NjUgMjUuMjkwMSAxOS45NTI2IDI1LjI5MDFDMTYuNjU4NiAyNS4yOTAxIDEzLjk4ODMgMjIuNTk0MiAxMy45ODgzIDE5LjI2ODdDMTMuOTg4MyAxNS45NDMxIDE2LjY1ODYgMTMuMjQ3MiAxOS45NTI2IDEzLjI0NzJDMjMuMjQ2NSAxMy4yNDcyIDI1LjkxNjggMTUuOTQzMSAyNS45MTY4IDE5LjI2ODdaIi8+CjxwYXRoIGNsYXNzPSJ0aGVtZS1hY2NlbnQiIGQ9Ik0xMC41MDkzIDE3LjUyMDFDMTAuNDIwNSAxNi44NDE3IDUuNjk0NjIgNy4xNjM2MiAxMC41MDk0IDUuMTczNzRDMTUuMzI0MyAzLjE4Mzg2IDE4LjE1NzYgMi44MTQ0OSAxOC4xNTc2IDIuODE0NDlDMTguMTU3NiAyLjgxNDQ5IDIxLjE2NCAyLjM2MjI0IDIzLjMyOSAwLjI4MTg5OUMyNS40OTQxIC0xLjc5ODQ0IDIyLjM2NzcgOC4yNDkwMiAyMS4xNjQgMTAuMzI5NEMxOS45NjAzIDEyLjQwOTcgMTcuNDYzNiAxMi4xMzgzIDE2LjAzNyAxMy41NDAzQzE0LjYxMDQgMTQuOTQyMyAxMy4zMDg3IDE3LjUyMDEgMTMuMzA4NyAxNy41MjAxQzEzLjMwODcgMTcuNTIwMSAxMi42NDM1IDE1LjQ5NDUgMTIuNjQzNSAxMy41NDAzQzEyLjY0MzUgMTEuNTg2MSAxNy40MTkxIDYuMTY4NjkgMTcuNDE5MSA2LjE2ODY5QzE5LjUxNDMgNC43MjE1MSAxMy45ODYzIDcuNzE5MjUgMTIuMDI0NyAxMS42NDA5QzEwLjQ1MjEgMTQuNzg0OCAxMC40ODQyIDE3LjEwMjQgMTAuNTEyOSAxNy41NDg0QzEwLjUyNTkgMTcuNjU0NiAxMC41MTk1IDE3LjY1MDQgMTAuNTEyOSAxNy41NDg0QzEwLjUxMTkgMTcuNTM5NyAxMC41MTA3IDE3LjUzMDMgMTAuNTA5MyAxNy41MjAxWiIvPgo8cGF0aCBjbGFzcz0idGhlbWUtYWNjZW50IiBkPSJNMTAuOTk0MiAyMC4yOTM5QzEwLjU2ODUgMjAuMzUwOCA0LjQ5NTM0IDIzLjM3ODEgMy4yNDY2NCAyMC4yOTM5QzEuOTk3OTUgMTcuMjA5NiAxLjc2NjE2IDE1LjM5NDcgMS43NjYxNiAxNS4zOTQ3QzEuNzY2MTYgMTUuMzk0NyAxLjQ4MjM2IDEzLjQ2ODkgMC4xNzY4OTggMTIuMDgyQy0xLjEyODU3IDEwLjY5NTIgNS4xNzY0NSAxMi42OTc5IDYuNDgxOTEgMTMuNDY4OUM3Ljc4NzM2IDE0LjI0IDcuNjE3MDggMTUuODM5MyA4LjQ5Njg0IDE2Ljc1MzFDOS4zNzY2MSAxNy42NjY5IDEwLjk5NDIgMTguNTAwNyAxMC45OTQyIDE4LjUwMDdDMTAuOTk0MiAxOC41MDA3IDkuNzIzMTQgMTguOTI2OSA4LjQ5Njg0IDE4LjkyNjlDNy4yNzA1NCAxOC45MjY5IDMuODcxIDE1Ljg2NzcgMy44NzEgMTUuODY3N0MyLjk2Mjg1IDE0LjUyNTYgNC44NDQwMSAxOC4wNjY3IDcuMzA0OTEgMTkuMzIzMkM5LjI3Nzc4IDIwLjMzMDYgMTAuNzMyMSAyMC4zMSAxMS4wMTIgMjAuMjkxNkMxMS4wNzg2IDIwLjI4MzMgMTEuMDc2IDIwLjI4NzQgMTEuMDEyIDIwLjI5MTZDMTEuMDA2NiAyMC4yOTIzIDExLjAwMDYgMjAuMjkzMSAxMC45OTQyIDIwLjI5MzlaIi8+Cjwvc3ZnPg=="
                      width={32}
                    />
                  </div>
                </motion.div>
                <motion.span variants={itemVariants as any}>
                  {title}
                </motion.span>
              </DrawerTitle>
              <motion.div variants={itemVariants as any}>
                <DrawerDescription className="text-sm text-zinc-600 leading-relaxed tracking-tighter dark:text-zinc-400">
                  {description}
                </DrawerDescription>
              </motion.div>
            </DrawerHeader>
          </motion.div>

          <motion.div variants={itemVariants as any}>
            <PriceTag discountedPrice={discountedPrice} price={price} />
          </motion.div>

          <motion.div variants={itemVariants as any}>
            <DrawerFooter className="flex flex-col gap-3 px-0">
              <div className="w-full">
                <Link
                  className="group relative inline-flex h-11 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 font-semibold text-sm text-white tracking-wide shadow-lg shadow-rose-500/20 transition-all duration-500 hover:from-rose-600 hover:to-pink-600 hover:shadow-rose-500/30 hover:shadow-xl dark:from-rose-600 dark:to-pink-600 dark:hover:from-rose-500 dark:hover:to-pink-500"
                  href="https://kokonutui.pro/#pricing"
                  target="_blank"
                >
                  <motion.span
                    className="absolute inset-0 translate-x-[-200%] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: 0,
                    }}
                    whileHover={{
                      x: ["-200%", "200%"],
                    }}
                  />
                  <motion.div
                    animate={{ opacity: 1 }}
                    className="relative flex items-center gap-2 tracking-tighter"
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {primaryButtonText}
                    <motion.div
                      animate={{
                        rotate: [0, 15, -15, 0],
                        y: [0, -2, 2, 0],
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 1,
                      }}
                    >
                      <Fingerprint className="h-4 w-4" />
                    </motion.div>
                  </motion.div>
                </Link>
              </div>
              <DrawerClose asChild>
                <Button
                  className="h-11 w-full rounded-xl border-zinc-200 font-semibold text-sm tracking-tighter transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800/80"
                  onClick={handleSecondaryClick}
                  variant="outline"
                >
                  {secondaryButtonText}
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </motion.div>
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
}
