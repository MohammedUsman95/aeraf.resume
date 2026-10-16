"use client";

import { useRef, useState } from "react";

interface VideoTestimonialCardProps {
  src?: string;
  poster?: string;
  title?: string;
}

export default function VideoTestimonialCard({
  src = "",
  poster = "",
  title,
}: VideoTestimonialCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current || !src) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <div
      onClick={togglePlay}
      className="group relative w-full aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-800 via-zinc-900 to-black border border-zinc-200/80 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center select-none"
    >
      {/* Video element - ready for video path when added */}
      {src && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          className="w-full h-full object-cover"
        />
      )}

      {/* Decorative dark background subtle glow/shimmer for empty placeholder state */}
      {!src && (
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.15),transparent_60%)]" />
        </div>
      )}

      {/* Centered Play Button (exact styling from reference image) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/25 transition-colors">
          <div className="w-16 h-12 md:w-18 md:h-13 bg-neutral-900/85 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 group-hover:bg-neutral-900 transition-all duration-300">
            <svg
              className="w-6 h-6 text-white fill-white translate-x-0.5"
              viewBox="0 0 24 24"
            >
              <polygon points="6 3 20 12 6 21" />
            </svg>
          </div>
        </div>
      )}

      {title && (
        <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
          <p className="text-white text-xs font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full w-fit">
            {title}
          </p>
        </div>
      )}
    </div>
  );
}
