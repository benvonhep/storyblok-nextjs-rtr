import { getStoryblokApi, storyblokInit, apiPlugin } from '@storyblok/react/rsc'

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
})
