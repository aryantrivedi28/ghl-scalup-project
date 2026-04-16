// components/testimonials/InfoVideo.tsx
'use client';
import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';

interface InfoVideoProps {
  videoSrc: string;
  poster?: string;
  title?: string;
  description?: string;
  fallbackImage?: string;
}

export default function InfoVideo({
  videoSrc,
  poster,
  title,
  description,
  fallbackImage = '/images/video-placeholder.jpg'
}: InfoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current && !videoError) {
      videoRef.current.play().catch(() => {
        // Auto-play was prevented, but that's fine
        console.log('Auto-play was prevented by browser');
      });
    }
  }, [videoError]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      setHasInteracted(true);
    }
  };

  const handleMouseEnter = () => setShowControls(true);
  const handleMouseLeave = () => setShowControls(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  // If video fails to load, show fallback image with play button
  if (videoError) {
    return (
      <div className="relative rounded-2xl overflow-hidden shadow-2xl group bg-gradient-to-br from-[#1C2E4A] to-[#111E30]">
        <div className="aspect-video flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-20 h-20 rounded-full bg-[#F8D000]/20 flex items-center justify-center mx-auto mb-4">
              <Play className="w-10 h-10 text-[#F8D000] ml-1" />
            </div>
            <p className="text-white/80 font-medium">Video coming soon</p>
            <p className="text-white/50 text-sm mt-2">Check back for client testimonials</p>
          </div>
        </div>
        {(title || description) && (
          <div className="absolute bottom-4 left-4 right-16">
            {title && <h4 className="text-white font-semibold text-sm md:text-base">{title}</h4>}
            {description && <p className="text-white/70 text-xs md:text-sm">{description}</p>}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl group bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onError={handleVideoError}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

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

      {(title || description) && (
        <div
          className={`absolute bottom-4 left-4 right-16 transition-all duration-300 ${
            showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
          }`}
        >
          {title && <h4 className="text-white font-semibold text-sm md:text-base">{title}</h4>}
          {description && <p className="text-white/70 text-xs md:text-sm">{description}</p>}
        </div>
      )}

      <button
        onClick={toggleMute}
        className={`absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-2 transition-all duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-white" />
        ) : (
          <Volume2 className="w-5 h-5 text-white" />
        )}
      </button>
    </div>
  );
}