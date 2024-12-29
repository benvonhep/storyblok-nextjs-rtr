import React from 'react'
import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'

storyblokInit({
  // eslint-disable-next-line no-undef
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
})

const fetchHomePage = async () => {
  let sbParams = {
    // eslint-disable-next-line no-undef
    version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
    resolve_relations: 'recommended_tours.tours',
  }

  const storyblokApi = getStoryblokApi()
  try {
    const response = await storyblokApi.getStory(`home`, sbParams)
    console.log(response.data.story, 'response')

    return response.data.story
  } catch (error) {
    console.error('Error fetching data from Storyblok API:', error)
    throw error
  }
}

const HomePage = async () => {
  const story = await fetchHomePage()
  // console.log(story, 'story')

  return <StoryblokStory story={story} />
  // return <div>hello home page</div>
}
export default HomePage
