/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // compiler babel > SWC로 전환
  },
};

module.exports = nextConfig;
