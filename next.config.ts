import { withIntlayer } from "next-intlayer/server";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/coming-soon',
        destination: '/fr/coming-soon',
        permanent: true,
      },
    ];
  },
};

export default withIntlayer(nextConfig);