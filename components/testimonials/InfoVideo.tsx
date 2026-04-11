'use client';
import { useEffect, useRef, useState } from 'react';

interface InfoVideoProps {
  videoSrc: string;
  poster?: string;
  title?: string;
  description?: string;
}

export default function InfoVideo({
  videoSrc,
  poster,
  title,
  description,
}: InfoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      setHasInteracted(true);
    }
  };

  const handleMouseEnter = () => setShowControls(true);
  const handleMouseLeave = () => setShowControls(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl group bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted={isMuted}
        playsInline
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Center CTA (Enable Sound) */}
      {isMuted && !hasInteracted && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={toggleMute}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-5 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg"
          >
            🔊 Enable Sound
          </button>
        </div>
      )}

      {/* Bottom Content */}
      {(title || description) && (
        <div
          className={`absolute bottom-4 left-4 right-16 transition-all duration-300 ${
            showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
          }`}
        >
          {title && (
            <h4 className="text-white font-semibold text-sm md:text-base">
              {title}
            </h4>
          )}
          {description && (
            <p className="text-white/70 text-xs md:text-sm">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Sound Toggle Button */}
      <button
        onClick={toggleMute}
        className={`absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-2 transition-all duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </button>
    </div>
  );
}