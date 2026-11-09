"use client";

import { useState, useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import { format, parseISO } from "date-fns";

const messages = [
  {
    id: 1,
    sender: "Sarah Miller",
    avatar: "https://cdn.21st.dev/assets/mirror/5b/5b5b2f3487692d40f629010ea6448d150907f780d8c262c4ca194b7386115c2d.jpg",
    message: "Hey! Are we still on for the meeting tomorrow?",
    timestamp: "2024-01-15T09:15:00",
    isOwn: false
  },
  {
    id: 2,
    sender: "You",
    avatar: "https://cdn.21st.dev/assets/mirror/f0/f02fed36023656a5b5df6f247c83c96c53bfa9db5b98085cdee93ffc938a5f37.jpg",
    message: "Yes, absolutely! 2 PM works for me.",
    timestamp: "2024-01-15T09:18:00",
    isOwn: true
  },
  {
    id: 3,
    sender: "Sarah Miller",
    avatar: "https://cdn.21st.dev/assets/mirror/5b/5b5b2f3487692d40f629010ea6448d150907f780d8c262c4ca194b7386115c2d.jpg",
    message: "Perfect! I'll send the agenda later today.",
    timestamp: "2024-01-15T09:20:00",
    isOwn: false
  },
  {
    id: 4,
    sender: "Mike Johnson",
    avatar: "https://cdn.21st.dev/assets/mirror/10/10e2bfa5446e5c116e269b649b5f5e0106d96643f0a903048f3a056e40c35cd8.jpg",
    message: "Can I join the meeting as well?",
    timestamp: "2024-01-15T10:30:00",
    isOwn: false
  },
  {
    id: 5,
    sender: "You",
    avatar: "https://cdn.21st.dev/assets/mirror/f0/f02fed36023656a5b5df6f247c83c96c53bfa9db5b98085cdee93ffc938a5f37.jpg",
    message: "Of course! The more the merrier.",
    timestamp: "2024-01-15T10:32:00",
    isOwn: true
  },
  {
    id: 6,
    sender: "Emma Wilson",
    avatar: "https://cdn.21st.dev/assets/mirror/fa/fae47bb0faba45d1e0696b6557ca36c551a738c7d6e3950e82bb69dd2f963a72.jpg",
    message: "I've prepared the presentation slides. Should I share them now?",
    timestamp: "2024-01-15T11:45:00",
    isOwn: false
  },
  {
    id: 7,
    sender: "You",
    avatar: "https://cdn.21st.dev/assets/mirror/f0/f02fed36023656a5b5df6f247c83c96c53bfa9db5b98085cdee93ffc938a5f37.jpg",
    message: "Yes please, that would be great!",
    timestamp: "2024-01-15T11:47:00",
    isOwn: true
  },
  {
    id: 8,
    sender: "David Brown",
    avatar: "https://cdn.21st.dev/assets/mirror/4f/4fb45af36b546e069b72527fdf4d904855a2b11b301fa738c8bc4d235595c4df.jpg",
    message: "Just reviewed the slides. They look excellent!",
    timestamp: "2024-01-15T14:20:00",
    isOwn: false
  },
  {
    id: 9,
    sender: "Sarah Miller",
    avatar: "https://cdn.21st.dev/assets/mirror/5b/5b5b2f3487692d40f629010ea6448d150907f780d8c262c4ca194b7386115c2d.jpg",
    message: "Thanks everyone for the quick responses. See you all tomorrow!",
    timestamp: "2024-01-15T15:00:00",
    isOwn: false
  },
  {
    id: 10,
    sender: "You",
    avatar: "https://cdn.21st.dev/assets/mirror/f0/f02fed36023656a5b5df6f247c83c96c53bfa9db5b98085cdee93ffc938a5f37.jpg",
    message: "Looking forward to it!",
    timestamp: "2024-01-15T15:02:00",
    isOwn: true
  }
];

function formatMessageTime(timestamp: string): string {
  const date = parseISO(timestamp);
  return format(date, "h:mm a");
}

export default function Example() {
  const [message, setMessage] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToBottom = () => {
      if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector(
          '[data-slot="scroll-area-viewport"]'
        ) as HTMLElement;
        if (viewport) {
          viewport.scrollTop = viewport.scrollHeight;
        }
      }
    };

    scrollToBottom();
    const timeout = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending:", message);
      setMessage("");
      setTimeout(() => {
        if (scrollAreaRef.current) {
          const viewport = scrollAreaRef.current.querySelector(
            '[data-slot="scroll-area-viewport"]'
          ) as HTMLElement;
          if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
          }
        }
      }, 100);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-muted/30 relative flex h-[500px] w-full max-w-sm flex-col overflow-hidden rounded-lg border">
      <div className="relative min-h-0 flex-1">
        <div ref={scrollAreaRef} className="h-full">
          <ScrollArea className="h-full">
            <div className="space-y-4 p-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.isOwn ? "flex-row-reverse" : "flex-row"}`}>
                  <Avatar className="h-8 w-8 shrink-0">
                    <AvatarImage src={msg.avatar} alt={msg.sender} />
                    <AvatarFallback>
                      {msg.sender === "You"
                        ? "Y"
                        : msg.sender
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`flex max-w-[75%] flex-col gap-1 ${
                      msg.isOwn ? "items-end" : "items-start"
                    }`}>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium">{msg.sender}</span>
                      <span className="text-muted-foreground text-xs">
                        {formatMessageTime(msg.timestamp)}
                      </span>
                    </div>
                    <div
                      className={`rounded-lg px-3 py-2 text-sm ${
                        msg.isOwn ? "bg-primary text-primary-foreground" : "bg-background border"
                      }`}>
                      {msg.message}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="from-muted/30 pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-12 bg-linear-to-t to-transparent" />
      </div>
      <div className="bg-background relative z-20 shrink-0 border-t p-3">
        <div className="flex gap-2">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon" disabled={!message.trim()}>
            <SendIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
