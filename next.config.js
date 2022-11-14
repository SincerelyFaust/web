/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  async redirects() {
    return [
      {
        source: "/twitter",
        destination: "https://twitter.com/@sincerelyfaust",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/sincerelyfaust",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://linkedin.com/in/marinhedes",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/marinhedes",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
