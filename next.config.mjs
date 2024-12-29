/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  compiler: {
    styledComponents: true, // styled-components用の設定
  },
};

export default nextConfig;
