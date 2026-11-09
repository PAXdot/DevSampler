"use client";

import { useState } from "react";
import { Volume2Icon, VolumeOffIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export default function ToggleMuteUnmute() {
  const [muted, setMuted] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <Toggle
        size="lg"
        variant="outline"
        aria-label="Toggle mute"
        pressed={muted}
        onPressedChange={setMuted}
      >
        {muted ? <VolumeOffIcon /> : <Volume2Icon />}
        {muted ? "Muted" : "Sound"}
      </Toggle>
    </div>
  );
}
