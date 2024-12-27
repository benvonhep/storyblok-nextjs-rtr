/* eslint-disable react/prop-types */
import React from 'react'
import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'

const fetchData = async (slug) => {
  // console.log(slug, "slug");

  let sbParams = { version: 'draft' }

  const storyblokApi = getStoryblokApi()
  try {
    const response = await storyblokApi.get(
      `cdn/stories/tours/${slug}`,
      sbParams,
    )

    return response.data.story
  } catch (error) {
    console.error('Error fetching data from Storyblok API:', error)
    throw error
  }
}

const TourPage = async ({ params }) => {
  const path = (params && params.slug) || ''
  // console.log(path, "props");

  if (!params || !params.slug) {
    console.error('params or params.slug is undefined')
    return <div>Error: Invalid tour parameters</div>
  }

  try {
    const story = await fetchData(path)
    // console.log(story, "params");

    return (
      <div>
        <StoryblokStory story={story} />
      </div>
    )
  } catch (error) {
    console.error('Error fetching tour data:', error)
    return <div>Error loading tour data</div>
  }
}
export default TourPage

// import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

// export default async function TourPage({ params }) {
//   // const { slug } = params;

//   try {
//     const story = await fetchData(params.slug);
//     console.log(story, "params");

//     return (
//       <div>
//         <StoryblokStory story={story} />
//         {/* {JSON.stringify(story, null, 2)} */}
//       </div>
//     );
//   } catch (error) {
//     // console.error("Error fetching tour data:", error);
//     return <div>Error loading tour data</div>;
//   }
// }

// const fetchData = async (slug) => {
//   console.log(slug, "slug");

//   let sbParams = { version: "draft" };

//   const storyblokApi = getStoryblokApi();
//   try {
//     const response = await storyblokApi.get(
//       `cdn/stories/tours/${slug}`,
//       sbParams
//     );

//     return response.data.story;
//   } catch (error) {
//     console.error("Error fetching data from Storyblok API:", error);
//     throw error;
//   }
// };
