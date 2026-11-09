"use client";

import { useState } from "react";
import { Heart, Repeat2, Share2, Bookmark } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export default function SocialToggle() {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);
  const [shared, setShared] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Toggle
        variant="outline"
        aria-label="Like"
        pressed={liked}
        onPressedChange={setLiked}
      >
        <Heart />
        {liked ? 13 : 12}
      </Toggle>
      <Toggle
        variant="outline"
        aria-label="Retweet"
        pressed={retweeted}
        onPressedChange={setRetweeted}
      >
        <Repeat2 />
        {retweeted ? 6 : 5}
      </Toggle>
      <Toggle
        variant="outline"
        aria-label="Share"
        pressed={shared}
        onPressedChange={setShared}
      >
        <Share2 />
        {shared ? 4 : 3}
      </Toggle>
      <Toggle
        variant="outline"
        aria-label="Bookmark"
        pressed={bookmarked}
        onPressedChange={setBookmarked}
      >
        <Bookmark />
        {bookmarked ? 9 : 8}
      </Toggle>
    </div>
  );
}
