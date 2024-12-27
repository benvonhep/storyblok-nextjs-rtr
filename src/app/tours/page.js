import React from 'react'
import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
import { RecommendedTour } from '@/components/RecommendedTour'

const fetchToursPage = async () => {
  let sbParams = {
    version: 'draft',
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
    version: 'draft',
  })
  return response.data.stories
}

const ToursPage = async () => {
  const story = await fetchToursPage()
  const tours = await fetchAllTours()
  console.log(tours, 'tours@@@@')

  return (
    <div>
      <StoryblokStory story={story} />
      {tours.map((tour) => {
        console.log(tour.content._uid, 'tour@@@222')
        return <RecommendedTour story={tour} key={tour.content._uid} />
      })}
    </div>
  )
}
export default ToursPage
