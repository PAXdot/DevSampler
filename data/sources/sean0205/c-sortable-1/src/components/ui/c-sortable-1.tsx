"use client";

import { useState } from "react";
import {
  ImageIcon,
  FileTextIcon,
  MusicIcon,
  VideoIcon,
  GripVerticalIcon,
} from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/c-sortable-1-utils/badge";
import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from "@/components/ui/sortable";

interface SortableFileItem {
  id: string;
  title: string;
  description: string;
  type: "image" | "document" | "audio" | "video";
  size: string;
}

const defaultItems: SortableFileItem[] = [
  {
    id: "1",
    title: "Product Demo",
    description: "Main product image",
    type: "image",
    size: "2.4 MB",
  },
  {
    id: "2",
    title: "Product Specification",
    description: "Technical details document",
    type: "document",
    size: "1.2 MB",
  },
  {
    id: "3",
    title: "Product Demo Video",
    description: "How to use the product",
    type: "video",
    size: "15.7 MB",
  },
  {
    id: "4",
    title: "Product Audio Guide",
    description: "Audio instructions",
    type: "audio",
    size: "8.3 MB",
  },
  {
    id: "5",
    title: "Product Specification",
    description: "Additional product view",
    type: "image",
    size: "3.1 MB",
  },
];

const getTypeIcon = (type: SortableFileItem["type"]) => {
  switch (type) {
    case "image":
      return <ImageIcon className="h-4 w-4" />;
    case "document":
      return <FileTextIcon className="h-4 w-4" />;
    case "audio":
      return <MusicIcon className="h-4 w-4" />;
    case "video":
      return <VideoIcon className="h-4 w-4" />;
  }
};

const getTypeColor = (type: SortableFileItem["type"]) => {
  switch (type) {
    case "image":
      return "primary-light" as const;
    case "document":
      return "success-light" as const;
    case "audio":
      return "destructive-light" as const;
    case "video":
      return "info-light" as const;
  }
};

function SortableFileList() {
  const [items, setItems] = useState<SortableFileItem[]>(defaultItems);

  const handleValueChange = (newItems: SortableFileItem[]) => {
    setItems(newItems);

    // Show toast with new order
    toast.success("Items reordered successfully!", {
      description: newItems
        .map((item, index) => `${index + 1}. ${item.title}`)
        .join(", "),
    });
  };

  const getItemValue = (item: SortableFileItem) => item.id;

  return (
    <div className="mx-auto w-full max-w-xl space-y-8 p-6">
      <Sortable
        value={items}
        onValueChange={handleValueChange}
        getItemValue={getItemValue}
        strategy="vertical"
        className="space-y-2"
      >
        {items.map((item) => (
          <SortableItem key={item.id} value={item.id}>
            <div className="bg-background border-border hover:bg-accent/50 rounded-md flex cursor-pointer items-center gap-3 border p-3 transition-colors">
              <SortableItemHandle className="text-muted-foreground hover:text-foreground">
                <GripVerticalIcon className="h-4 w-4" />
              </SortableItemHandle>

              <div className="text-muted-foreground flex items-center gap-2">
                {getTypeIcon(item.type)}
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-medium">{item.title}</h4>
                <p className="text-muted-foreground truncate text-xs">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant={getTypeColor(item.type)}>{item.type}</Badge>
                <span className="text-muted-foreground text-xs">
                  {item.size}
                </span>
              </div>
            </div>
          </SortableItem>
        ))}
      </Sortable>
    </div>
  );
}

export default SortableFileList;
