/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // eslint-disable-next-line no-undef
    storyblokApiToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  },
}

export default nextConfig
