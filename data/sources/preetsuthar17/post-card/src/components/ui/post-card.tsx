"use client";

import {
  FaRegPaperPlane,
  FaRegHeart,
  FaHeart,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export const PostCard: React.FC = () => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
  };

  const handleBookmark = () => {
    setBookmarked((prev) => !prev);
  };

  return (

   <div className="m-4 max-w-[30rem] w-full rounded-4xl bg-background border border-primary/10 shadow-2xl/10 p-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 card-header">
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.21st.dev/assets/mirror/ec/ece1c487950b3d91d59a8b34b9f73f07f2c63b2fe913297599e786934f632d60.png"
            alt="HextaStudio"
            width={35}
            height={35}
            className="rounded-full"
          />
          <div>
            <h3 className="flex flex-col">
              HextaStudio
              <span className="flex items-center gap-2 opacity-70 text-sm">
                <small>@HextaStudio</small>
                <span>·</span>
                <small>7h</small>
              </span>
            </h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-col gap-6">
        <p className="whitespace-pre-wrap">
          HextaUI – Gorgeous web components without any effort! ✨
          <br />
          <br />
          🚀 HextaStudio launched their new product HextaUI, a collection of
          beautiful web components.
          <br />
          <br />
          🥳 Check it out now!
        </p>
        <Image
          src="https://cdn.21st.dev/assets/mirror/e6/e621b97a97799ea2e5ba109264ba4ed3a5955c88c3db05eb6b946c492d20736a.png"
          alt="HextaUI"
          width={1920}
          height={1080}
          className="max-w-full rounded-lg object-cover"
        />
      </div>

      {/* Actions */}
      <div className="mt-4 flex justify-evenly gap-2">
        <button
          onClick={handleLike}
          className="flex grow items-center justify-center gap-3 rounded-xl px-4 py-2 transition hover:bg-secondary"
        >
          {liked ? <FaHeart color="red" /> : <FaRegHeart />}
          <span className="inline font-medium opacity-90 text-[14px] transition hover:opacity-100 max-sm:hidden">
            {liked ? "Liked" : "Like"}
          </span>
        </button>

        <button
          onClick={handleBookmark}
          className="flex grow items-center justify-center gap-3 rounded-xl px-4 py-2 transition hover:bg-secondary"
        >
          {bookmarked ? <FaBookmark color="#00bfff" /> : <FaRegBookmark />}
          <span className="inline font-medium opacity-90 text-[14px] transition hover:opacity-100 max-sm:hidden">
            {bookmarked ? "Saved" : "Save"}
          </span>
        </button>

        <button className="flex grow items-center justify-center gap-3 rounded-xl px-4 py-2 transition hover:bg-white/5">
          <FaRegPaperPlane />
          <span className="inline font-medium opacity-90 text-[14px] transition hover:opacity-100 max-sm:hidden">
            Share
          </span>
        </button>
      </div>
    </div>
  )
}