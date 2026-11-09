"use client";

import * as React from "react";
import { useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { PauseIcon, PlayIcon } from "@hugeicons/core-free-icons";

export interface VoiceNoteProps {
  /** Audio file URL. */
  src: string;
  /** Names it for screen readers ("Voice message from Maryam"). */
  label: string;
  className?: string;
}

const clock = (s: number) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

export default function VoiceNote({ src, label, className }: VoiceNoteProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [paused, setPaused] = useState(true);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [failed, setFailed] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (paused) audio.play();
    else audio.pause();
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setCurrent(value);
    if (audioRef.current) audioRef.current.currentTime = value;
  };

  return (
    <div
      className={["note", className].filter(Boolean).join(" ")}
      role="group"
      aria-label={label}
    >
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onError={() => setFailed(true)}
      />
      {failed ? (
        <span className="failed">This voice message couldn’t be played.</span>
      ) : (
        <>
          <button
            type="button"
            className="play"
            aria-label={paused ? "Play" : "Pause"}
            onClick={togglePlay}
          >
            <HugeiconsIcon icon={paused ? PlayIcon : PauseIcon} size={16} />
          </button>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={current}
            onChange={handleSeek}
            aria-label="Position"
            aria-valuetext={`${clock(current)} of ${clock(duration || 0)}`}
            style={
              {
                "--at": `${duration ? (current / duration) * 100 : 0}%`,
              } as React.CSSProperties
            }
          />
          <span className="time">
            {clock(paused && !current ? duration || 0 : current)}
          </span>
        </>
      )}
    </div>
  );
}
