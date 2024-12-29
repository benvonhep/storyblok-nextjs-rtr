import { getStoryblokApi, storyblokInit, apiPlugin } from '@storyblok/react/rsc'

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
})
