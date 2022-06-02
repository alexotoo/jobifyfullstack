module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    // async rewrites() {
    //   return [
    //     {
    //       source: "/:path*",
    //       destination: "/:path*",
    //     },
    //   ];
    // },
  };
  return nextConfig;
};
