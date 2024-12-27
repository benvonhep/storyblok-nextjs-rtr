import React from 'react'
import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'

const fetchHomePage = async () => {
  let sbParams = {
    version: 'draft',
    resolve_relations: 'recommended_tours.tours',
  }

  const storyblokApi = getStoryblokApi()
  try {
    const response = await storyblokApi.get(`cdn/stories/home`, sbParams)
    // console.log(response, "response");

    return response.data.story
  } catch (error) {
    console.error('Error fetching data from Storyblok API:', error)
    throw error
  }
}

const HomePage = async () => {
  const story = await fetchHomePage()
  // console.log(story, "story");

  return <StoryblokStory story={story} />
  // return <div>hello home page</div>;
}
export default HomePage
