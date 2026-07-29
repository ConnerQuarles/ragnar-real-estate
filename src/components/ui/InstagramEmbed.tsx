import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

let scriptPromise: Promise<void> | null = null;

function loadInstagramEmbedScript(): Promise<void> {
  if (window.instgrm) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
  return scriptPromise;
}

interface InstagramEmbedProps {
  /** Full post or reel URL, e.g. https://www.instagram.com/p/SHORTCODE/ */
  permalink: string;
  className?: string;
}

/**
 * Instagram's oEmbed widget renders into a cross-origin iframe once
 * embed.js processes the blockquote below, so none of its inner chrome
 * (white background, Instagram-blue link, avatar placeholder) can be
 * recolored from this page — that's a hard platform limitation, not
 * something CSS can reach past. The `className` on the wrapper is our
 * lever instead: frame it in the site's own card styling so it still
 * reads as part of the page.
 */
export default function InstagramEmbed({ permalink, className = "" }: InstagramEmbedProps) {
  useEffect(() => {
    let cancelled = false;
    loadInstagramEmbedScript().then(() => {
      if (!cancelled) window.instgrm?.Embeds.process();
    });
    return () => {
      cancelled = true;
    };
  }, [permalink]);

  return (
    <div className={className}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={permalink}
        data-instgrm-captioned=""
        data-instgrm-version="14"
        style={{ background: "#FFF", margin: 0, maxWidth: "100%", minWidth: "unset", width: "100%" }}
      />
    </div>
  );
}
