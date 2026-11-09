"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Folder, FolderOpen, File } from "lucide-react"

// --- Types ---
interface TreeNode {
  id: string
  name: string
  children?: TreeNode[]
}

interface TreeViewProps {
  data: TreeNode[]
  defaultExpandedIds?: string[]
  className?: string
  indent?: number
}

// --- Smooth Animation Variants ---
const treeContainerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      height: {
        type: "spring",
        bounce: 0,
        duration: 0.35,
      },
      opacity: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      height: {
        type: "spring",
        bounce: 0,
        duration: 0.28,
      },
      opacity: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  },
}

// --- Tree Root Component ---
export function TreeView({
  data,
  defaultExpandedIds = ["leads", "accounts", "activities"],
  className = "",
  indent = 20,
}: TreeViewProps) {
  const [expandedIds, setExpandedIds] = React.useState<Set<string>>(
    new Set(defaultExpandedIds)
  )
  const [selectedId, setSelectedId] = React.useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div
      role="tree"
      style={{ ["--tree-indent" as any]: `${indent}px` }}
      className={`select-none text-sm font-normal text-foreground outline-none ${className}`}
    >
      {data.map((node) => (
        <TreeItem
          key={node.id}
          node={node}
          level={0}
          indent={indent}
          expandedIds={expandedIds}
          selectedId={selectedId}
          onToggle={toggleExpand}
          onSelect={setSelectedId}
        />
      ))}
    </div>
  )
}

// --- Tree Item Component with Micro-Interactions ---
function TreeItem({
  node,
  level,
  indent,
  expandedIds,
  selectedId,
  onToggle,
  onSelect,
}: {
  node: TreeNode
  level: number
  indent: number
  expandedIds: Set<string>
  selectedId: string | null
  onToggle: (id: string) => void
  onSelect: (id: string) => void
}) {
  const hasChildren = Boolean(node.children && node.children.length > 0)
  const isExpanded = expandedIds.has(node.id)
  const isSelected = selectedId === node.id

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onSelect(node.id)
    if (hasChildren) {
      onToggle(node.id)
    }
  }

  return (
    <div role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined}>
      <motion.div
        onClick={handleClick}
        whileTap={{ scale: 0.985 }}
        style={{ paddingLeft: `${level * indent + 8}px` }}
        className={`group relative flex items-center gap-2 py-1.5 pr-2.5 rounded-lg cursor-pointer transition-all duration-150 ${
          isSelected
            ? "bg-accent/80 text-accent-foreground font-medium shadow-xs"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        }`}
      >
        {/* Expand / Collapse Icon */}
        {hasChildren ? (
          <motion.span
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="flex items-center justify-center p-0.5 rounded-sm hover:bg-muted/80 text-muted-foreground group-hover:text-foreground"
          >
            <ChevronRight className="h-3.5 w-3.5 shrink-0" />
          </motion.span>
        ) : (
          <span className="w-3.5" />
        )}

        {/* Node Icon */}
        <span className="shrink-0 transition-colors">
          {hasChildren ? (
            isExpanded ? (
              <FolderOpen className="h-4 w-4 text-foreground/80" />
            ) : (
              <Folder className="h-4 w-4 text-muted-foreground group-hover:text-foreground/80" />
            )
          ) : (
            <File className="h-4 w-4 text-muted-foreground/70 group-hover:text-foreground/70" />
          )}
        </span>

        {/* Node Label */}
        <span className="truncate tracking-tight">{node.name}</span>
      </motion.div>

      {/* Animated Folder Children */}
      <AnimatePresence initial={false}>
        {hasChildren && isExpanded && (
          <motion.div
            variants={treeContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative overflow-hidden"
          >
            {node.children!.map((child) => (
              <TreeItem
                key={child.id}
                node={child}
                level={level + 1}
                indent={indent}
                expandedIds={expandedIds}
                selectedId={selectedId}
                onToggle={onToggle}
                onSelect={onSelect}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// --- Demo Dataset ---
const treeData: TreeNode[] = [
  {
    id: "crm",
    name: "CRM",
    children: [
      {
        id: "leads",
        name: "Leads",
        children: [
          { id: "new-lead", name: "New Lead" },
          { id: "contacted-lead", name: "Contacted Lead" },
          { id: "qualified-lead", name: "Qualified Lead" },
        ],
      },
      {
        id: "accounts",
        name: "Accounts",
        children: [
          {
            id: "acme-corp",
            name: "Acme Corp",
            children: [
              {
                id: "acme-contacts",
                name: "Contacts",
                children: [
                  { id: "john-smith", name: "John Smith" },
                  { id: "jane-doe", name: "Jane Doe" },
                ],
              },
              {
                id: "acme-opportunities",
                name: "Opportunities",
                children: [
                  { id: "website-redesign", name: "Website Redesign" },
                  { id: "annual-maintenance", name: "Annual Maintenance" },
                ],
              },
            ],
          },
          {
            id: "globex-inc",
            name: "Globex Inc",
            children: [
              {
                id: "globex-contacts",
                name: "Contacts",
                children: [{ id: "alice-johnson", name: "Alice Johnson" }],
              },
              {
                id: "globex-opportunities",
                name: "Opportunities",
                children: [{ id: "cloud-migration", name: "Cloud Migration" }],
              },
            ],
          },
        ],
      },
      {
        id: "activities",
        name: "Activities",
        children: [
          { id: "calls", name: "Calls" },
          { id: "meetings", name: "Meetings" },
          { id: "emails", name: "Emails" },
        ],
      },
      {
        id: "support",
        name: "Support",
        children: [
          { id: "open-tickets", name: "Open Tickets" },
          { id: "closed-tickets", name: "Closed Tickets" },
        ],
      },
    ],
  },
]

export default function TreeDemo() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-border/80 bg-card p-3.5 shadow-sm">
      <TreeView data={treeData} />
    </div>
  )
}

export const Component = TreeDemo