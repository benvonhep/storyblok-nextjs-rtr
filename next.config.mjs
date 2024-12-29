/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // eslint-disable-next-line no-undef
    storyblokApiToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  },
  images: {
    deviceSizes: [612, 640, 750, 828, 1080, 1200, 1504, 1920, 2048, 3840],
    loader: 'custom',
    loaderFile: './src/storyblokImageLoader.js',
  },
}

export default nextConfig
