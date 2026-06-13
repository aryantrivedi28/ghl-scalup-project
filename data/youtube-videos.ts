// data/youtube-videos.ts
export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  uploadDate: string;
  duration: string;
}

export const youtubeVideosData: YouTubeVideo[] = [
  {
    id: "eABj1RzKSFM",
    title: "How to Connect GoDaddy Domain to GoHighLevel | GHL Domain Setup Tutorial",
    description: "Learn how to connect a GoDaddy domain to GoHighLevel in this simple step-by-step tutorial. This video explains how to connect your custom domain from GoDaddy to GoHighLevel, update the correct DNS records and verify.",
    uploadDate: "2026-05-07T10:00:00Z",
    duration: "PT2M35S", // 👈 Replace with actual duration
  },
  {
    id: "HwjlUrqWwpc",
    title: "How to Add a GoHighLevel Chat Widget to a Next.js Website | GHL AI Chatbot Tutorial",
    description: "Learn how to add a GoHighLevel chat widget to a Next.js website in this step-by-step tutorial.",
    uploadDate: "2026-06-11T10:00:00Z",
    duration: "PT6M09S", // 👈 Replace with actual duration
  },
  {
    id: "TaeUAaAff74",
    title: "Create a GoHighLevel Chat Widget in Under 10 Minutes for Your AI Chatbot | GHL Live Chat Tutorial",
    description: "Learn how to create a GoHighLevel chat widget in under 10 minutes for your AI chatbot in this tutorial.",
    uploadDate: "2026-06-08T10:00:00Z",
    duration: "PT8M14S", // 👈 Replace with actual duration
  },
  {
    id: "1L0nRQePuwo",
    title: "Build an AI Chatbot Inside GoHighLevel in Under 10 Minutes | Flow Builder Tutorial for Beginners",
    description: "Learn how to build an AI chatbot inside GoHighLevel in under 10 minutes using the Flow Builder. Perfect for beginners.",
    uploadDate: "2026-06-04T10:00:00Z",
    duration: "PT10M24S", // 👈 Replace with actual duration
  },
  {
    id: "1DUk5jB4Sbc",
    title: "GoHighLevel Forms & Workflows Tutorial For Beginners | Automate Lead Follow-Up in GHL",
    description: "Learn how to use GoHighLevel forms and workflows to automate lead follow-up in GHL. Perfect for beginners.",
    uploadDate: "2026-05-27T10:00:00Z",
    duration: "PT8M24S", // 👈 Replace with actual duration
  },
  {
    id: "DFjZjqD_MjI",
    title: "GoHighLevel Email Automation Tutorial for Agencies | Real Client Setup",
    description: "Learn GoHighLevel email automation for agencies with a real client setup. Smart workflow logic to stop sequences after booking explained step-by-step.",
    uploadDate: "2026-02-13T10:00:00Z",
    duration: "PT8M12S", // 👈 Replace with actual duration
  },
];

// Helper function to get complete video objects with URLs
export function getVideoSchemaData() {
  return youtubeVideosData.map((video) => ({
    ...video,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    url: `https://www.youtube.com/watch?v=${video.id}`,
  }));
}