"use client";

import { useState } from "react";
import Chat, { type User } from "@/components/ui/chat-messages-2-utils/chat";
import type { Message } from "@/components/ui/chat-messages-2-utils/chat-message";
import IphoneFrame from "@/components/ui/chat-messages-2-utils/iphone-frame";

export default function ChatMessagesReverse() {
  const users: User[] = [
    {
      name: "User1",
      avatar:
        "https://res.cloudinary.com/harshitproject/image/upload/v1746774430/member-five.png", // Replace with actual avatar URL
    },
    {
      name: "User2",
      avatar:
        "https://res.cloudinary.com/harshitproject/image/upload/v1746774430/member-four.png", // Replace with actual avatar URL
    },
  ];

  const [messages] = useState<Message[]>([
    {
      id: "n1",
      name: "User1",
      message: "Hey, what is the best component library?",
    },
    {
      id: "n2",
      name: "User2",
      message: "I think Solace UI is awesome it is simple and easy to use.",
    },
    {
      id: "n3",
      name: "User1",
      message: "So, it is reliable and has a clean design?",
    },
    {
      id: "n4",
      name: "User2",
      message: "Yes, exactly. It makes development a breeze.",
    },
  ]);

  return (
    <main className="relative flex flex-col items-center justify-center p-4 ">
      {/* Clipping Wrapper */}
      <div className="mx-auto overflow-hidden w-[300px] h-[360px] sm:w-[350px] sm:h-[420px]">
        <IphoneFrame>
          <Chat
            messages={messages}
            currentUser="User1"
            users={users} // Pass the users array with avatars
          />
        </IphoneFrame>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 z-50 h-24 sm:h-32 bg-linear-to-t from-background to-transparent pointer-events-none"
        aria-hidden="true"
      ></div>
    </main>
  );
}
