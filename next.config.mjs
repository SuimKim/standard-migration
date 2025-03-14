/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos", // 와일드카드로 모든 하위 경로 허용
      },
    ],
  },
};

export default nextConfig;
