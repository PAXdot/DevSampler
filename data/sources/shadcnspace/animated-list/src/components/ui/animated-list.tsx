"use client"

import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
} from "react"
import { AnimatePresence, motion, MotionProps } from "motion/react"
import { cn } from "@/lib/utils"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations: MotionProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  delay?: number
}

const AnimatedList = React.memo(
  ({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0)
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    )

    useEffect(() => {
      if (index < childrenArray.length - 1) {
        const timeout = setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length)
        }, delay)

        return () => clearTimeout(timeout)
      }
    }, [index, delay, childrenArray.length])

    const itemsToShow = useMemo(() => {
      const result = childrenArray.slice(0, index + 1).reverse()
      return result
    }, [index, childrenArray])

    return (
      <div
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)
AnimatedList.displayName = "AnimatedList"

interface Item {
  avatar: string
  title: string
  subtitle: string
}

let Messages = [
  {
    avatar:
      'https://cdn.21st.dev/assets/mirror/59/59a2b5a0dfc1531e2d1ea42d71ae8615f37582e1f8a17e4a1b1aff9afc7ef878.jpg',
    title: 'Roman Joined the Team!',
    subtitle: 'Congratulate him',
  },
  {
    avatar:
      'https://cdn.21st.dev/assets/mirror/c7/c7097eeb66ad097b6e5f9dbb95ae857cd6b55c0ad398c1ea84f3ab90a02c631e.jpg',
    title: 'New message',
    subtitle: 'Salma sent you new message',
  },
  {
    avatar:
      'https://cdn.21st.dev/assets/mirror/3a/3ac4ad42a8a76abc8f29025d958460be1771e6e4d12a771e2bef33b21b0a30d6.jpg',
    title: 'Bianca sent payment',
    subtitle: 'Check your earnings',
  },
  {
    avatar:
      'https://cdn.21st.dev/assets/mirror/c7/c70d48e47d3a2d79ad07d16bff3aa3cff686580be031b6102cad73a15b47d8fd.jpg',
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks',
  },
  {
    avatar:
      'https://cdn.21st.dev/assets/mirror/1a/1a8e0515b0f25965f064a129c3a2f652854be9dad803a7af37a3de6d126af9b1.jpg',
    title: 'John received payment',
    subtitle: '$230 deducted from account',
  },
]

Messages = Array.from({ length: 2 }, () => Messages).flat()

const Notification = ({ avatar, title, subtitle }: Item) => {
  return (
    <div
      className={cn(
        'relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl p-4',
        'transition-all duration-200 ease-in-out hover:scale-105',
        // light styles (shadcn tokens)
        'bg-background border border-border',
      )}>
      <div className='flex items-center'>
        <span className='flex-shrink-0 relative'>
          <img
            src={avatar}
            width={45}
            height={45}
            alt='shadcnspace'
            className='rounded-full'
          />
        </span>
        <div className='ps-4'>
          <h5 className='text-sm font-semibold text-foreground mb-1'>
            {title}
          </h5>
          <p className='text-xs font-normal text-muted-foreground truncate'>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function AnimatedListDemo() {
  return (
    <>
        <div
          className={cn(
            'relative h-96 flex items-center w-full flex-col overflow-hidden p-2'
          )}>
          <AnimatedList>
            {Messages.map((item, idx) => (
              <Notification {...item} key={idx} />
            ))}
          </AnimatedList>

          <div className='from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t'></div>
        </div>
    </>
  )
}
