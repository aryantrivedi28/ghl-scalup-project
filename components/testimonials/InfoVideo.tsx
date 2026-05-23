// components/testimonials/InfoVideo.tsx - UPDATED VERSION
'use client';
import { useState } from 'react';
import { Play } from 'lucide-react';

interface InfoVideoProps {
  videoSrc: string;
  poster?: string;
  title?: string;
  description?: string;
  fallbackImage?: string;
}

export default function InfoVideo({
  videoSrc,
  title,
  description,
}: InfoVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Convert YouTube URLs to embed format
  const getYouTubeEmbedUrl = (url: string) => {
    // Handle youtu.be format
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    // Handle youtube.com/watch?v= format
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(url.split('?')[1]);
      const videoId = urlParams.get('v');
      return `https://www.youtube.com/embed/${videoId}`;
    }
    // If it's already an embed URL, return as is
    if (url.includes('youtube.com/embed/')) {
      return url;
    }
    return url;
  };

  const embedUrl = getYouTubeEmbedUrl(videoSrc);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl group bg-gradient-to-br from-[#1C2E4A] to-[#111E30]">
      <div className="aspect-video">
        {!isPlaying ? (
          // Thumbnail with play button
          <div 
            className="relative w-full h-full cursor-pointer bg-cover bg-center"
            style={{ 
              backgroundImage: `url(https://img.youtube.com/vi/${embedUrl.split('/embed/')[1]}/maxresdefault.jpg)`,
              backgroundSize: 'cover'
            }}
            onClick={() => setIsPlaying(true)}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
              <div className="w-16 h-16 rounded-full bg-[#F8D000] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-[#1C2E4A] ml-1" />
              </div>
            </div>
            {(title || description) && (
              <div className="absolute bottom-4 left-4 right-4">
                {title && <h4 className="text-white font-semibold text-sm md:text-base">{title}</h4>}
                {description && <p className="text-white/70 text-xs md:text-sm">{description}</p>}
              </div>
            )}
          </div>
        ) : (
          // YouTube iframe
          <iframe
            src={`${embedUrl}?autoplay=1&mute=0&controls=1&rel=0`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title || "Video content"}
          />
        )}
      </div>
    </div>
  );
}