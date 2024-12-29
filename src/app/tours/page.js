import React from 'react'
import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
import { RecommendedTour } from '@/components/RecommendedTour'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'

storyblokInit({
  // eslint-disable-next-line no-undef
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
})

const fetchToursPage = async () => {
  let sbParams = {
    // eslint-disable-next-line no-undef
    version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
    resolve_relations: 'recommended_tours.tours',
  }

  const storyblokApi = getStoryblokApi()
  try {
    const response = await storyblokApi.get(`cdn/stories/tours`, sbParams)
    return response.data.story
  } catch (error) {
    console.error('Error fetching data from Storyblok API:', error)
    throw error
  }
}

const fetchAllTours = async () => {
  const client = getStoryblokApi()
  const response = await client.getStories({
    content_type: 'tour',
    // eslint-disable-next-line no-undef
    version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
  })
  return response.data.stories
}

const ToursPage = async () => {
  const story = await fetchToursPage()
  const tours = await fetchAllTours()
  // console.log(tours, 'tours@@@@')
  // console.log(story, 'tours@@@@storyyyy')

  return (
    <div>
      <StoryblokStory story={story} />
      <div className="grid md:grid-cols-2 gap-8 container mx-auto px-4 w-full py-16">
        {tours.map((tour) => {
          console.log(tour.content._uid, 'tour@@@222')
          return <RecommendedTour story={tour} key={tour.content._uid} />
        })}
      </div>
    </div>
  )
}
export default ToursPage
