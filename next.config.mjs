/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // eslint-disable-next-line no-undef
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN,
  },
}

export default nextConfig
