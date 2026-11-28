/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: "/blog/how-to-get-first-gohighlevel-saas-clients",
        destination: "/blog/get-first-10-gohighlevel-saas-clients",
        permanent: true,
      },
      {
        source: "/services/saas-setup",
        destination: "/services/gohighlevel-saas-mode",
        permanent: true,
      },
      {
        source: "/services/membership-sites",
        destination: "/services/training",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;