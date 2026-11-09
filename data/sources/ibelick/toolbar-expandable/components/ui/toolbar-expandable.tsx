"use client"

import * as React from "react"
import { motion, MotionConfig } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const transition = {
  type: "spring",
  bounce: 0.1,
  duration: 0.2,
}

interface SearchToolbarProps {
  placeholder?: string
  onSearch?: (value: string) => void
  leftIcon: React.ReactNode
  searchIcon: React.ReactNode
  backIcon: React.ReactNode
}

export function SearchToolbar({
  placeholder = "Search...",
  onSearch,
  leftIcon,
  searchIcon,
  backIcon,
}: SearchToolbarProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <MotionConfig transition={transition}>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2" ref={containerRef}>
        <Card>
          <motion.div
            animate={{
              width: isOpen ? "300px" : "98px",
            }}
            initial={false}
          >
            <div className="overflow-hidden p-2">
              {!isOpen ? (
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled
                    className="h-9 w-9"
                  >
                    {leftIcon}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => setIsOpen(true)}
                  >
                    {searchIcon}
                  </Button>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => setIsOpen(false)}
                  >
                    {backIcon}
                  </Button>
                  <div className="relative w-full">
                    <Input
                      className="h-9"
                      autoFocus
                      placeholder={placeholder}
                      onChange={(e) => onSearch?.(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </Card>
      </div>
    </MotionConfig>
  )
}