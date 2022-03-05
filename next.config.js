const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const nextConfig = {
  images: {
    disableStaticImages: true,
  },
};

const config = withPlugins(
  [
    [
      optimizedImages,
      {
        // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
        optimizeImages: false,
      },
    ],
  ],
  nextConfig
);

module.exports = config;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   loader: 'imgix'
// }

// module.exports = nextConfig
