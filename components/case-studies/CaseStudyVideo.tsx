// components/case-studies/CaseStudyVideo.tsx
'use client';

interface CaseStudyVideoProps {
  video: {
    videoUrl?: string;
    videoFile?: any;
    caption?: string;
  };
}

export default function CaseStudyVideo({ video }: CaseStudyVideoProps) {
  if (!video?.videoUrl && !video?.videoFile) return null;

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('watch?v=', 'embed/');
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  };

  return (
    <div className="my-8">
      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black">
        {video.videoUrl ? (
          <iframe
            src={getEmbedUrl(video.videoUrl)}
            title="Case Study Video"
            className="w-full aspect-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            src={video.videoFile?.asset?.url}
            controls
            className="w-full aspect-video"
            poster="/video-poster.jpg"
          />
        )}
      </div>
      {video.caption && (
        <p className="text-center text-sm text-[#8A9BB0] mt-3">{video.caption}</p>
      )}
    </div>
  );
}