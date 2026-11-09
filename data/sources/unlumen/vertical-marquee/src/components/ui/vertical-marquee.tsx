"use client";

import * as React from "react";
import {
  TweetContainer,
  TweetHeader,
  TweetInReplyTo,
  TweetBody,
  TweetMedia,
  TweetInfo,
  TweetActions,
  QuotedTweet,
  enrichTweet,
  type EnrichedTweet,
  TweetNotFound,
  TweetSkeleton,
} from "react-tweet";
import type { Tweet } from "react-tweet/api";

export interface TweetItem {
  id: string;
  tweet?: Tweet;
}

export interface VerticalMarqueeProps {
  /** Tweets to display in the scrolling columns. */
  tweets: TweetItem[];
  /** Number of scrolling columns. @default 2 */
  columns?: 1 | 2;
  /** Scroll duration in seconds per full loop. @default 20 */
  speed?: number;
  /** Vertical gap between cards in px. @default 16 */
  gap?: number;
  /** Height of the fade zone at top and bottom in px. @default 120 */
  blurSize?: number;
  /** Smoothly pause when hovering. @default true */
  pauseOnHover?: boolean;
  className?: string;
  tweetClassName?: string;
}

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export const MagicTweet = ({
  tweet,
  className,
}: {
  tweet: Tweet;
  className?: string;
}) => {
  const enriched: EnrichedTweet = enrichTweet(tweet);

  return (
    <div className={cn("w-full", className)}>
      <TweetContainer>
        <TweetHeader tweet={enriched} />
        {enriched.in_reply_to_status_id_str && (
          <TweetInReplyTo tweet={enriched} />
        )}
        <TweetBody tweet={enriched} />
        {enriched.mediaDetails?.length ? <TweetMedia tweet={enriched} /> : null}
        {enriched.quoted_tweet && <QuotedTweet tweet={enriched.quoted_tweet} />}
        <TweetInfo tweet={enriched} />
        <TweetActions tweet={enriched} />
      </TweetContainer>
    </div>
  );
};

function MarqueeColumn({
  items,
  speed,
  gap,
  reverse,
  paused,
  tweetClassName,
}: {
  items: TweetItem[];
  speed: number;
  gap: number;
  reverse: boolean;
  paused: boolean;
  tweetClassName?: string;
}) {
  const content = (
    <div
      className="flex flex-col shrink-0"
      style={{ gap: `${gap}px`, paddingBottom: `${gap}px` }}
    >
      {items.map((item, index) =>
        item.tweet ? (
          <MagicTweet
            key={`${item.id}-${index}`}
            tweet={item.tweet}
            className={tweetClassName}
          />
        ) : (
          <TweetNotFound key={`${item.id}-${index}`} />
        ),
      )}
    </div>
  );

  return (
    <div className="relative flex-1 overflow-hidden">
      <div
        className="flex flex-col"
        style={{
          animationName: reverse
            ? "vertical-marquee-reverse"
            : "vertical-marquee",
          animationDuration: `${speed}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {content}
        {content}
      </div>
    </div>
  );
}

export function VerticalMarqueeClient({
  tweets,
  columns = 2,
  speed = 20,
  gap = 16,
  blurSize = 120,
  pauseOnHover = true,
  className,
  tweetClassName,
}: VerticalMarqueeProps) {
  const [paused, setPaused] = React.useState(false);

  const columnItems = React.useMemo(() => {
    if (columns === 1) return [tweets];
    const left: TweetItem[] = [];
    const right: TweetItem[] = [];
    tweets.forEach((item, index) => {
      (index % 2 === 0 ? left : right).push(item);
    });
    return [left, right];
  }, [tweets, columns]);

  if (!tweets.length) return null;

  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <div className="flex h-full" style={{ gap: `${gap}px` }}>
        {columnItems.map((items, index) => (
          <MarqueeColumn
            key={index}
            items={items}
            speed={speed}
            gap={gap}
            reverse={index % 2 === 1}
            paused={paused}
            tweetClassName={tweetClassName}
          />
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-background to-transparent"
        style={{ height: `${blurSize}px` }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent"
        style={{ height: `${blurSize}px` }}
      />
    </div>
  );
}

export function VerticalMarquee(props: VerticalMarqueeProps) {
  return <VerticalMarqueeClient {...props} />;
}

export { TweetBody, TweetHeader, TweetMedia, TweetNotFound, TweetSkeleton };

export default VerticalMarquee;
