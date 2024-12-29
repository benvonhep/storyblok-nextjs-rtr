/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'

export const RecommendedTour = (props) => {
  // console.log(props, 'paramsXXX')
  const story = props.story || props.blok

  return (
    <div className="bg-white rounded-sm shadow">
      <img
        className="aspect-video object-cover w-full"
        src={`${story.content.main_image.filename}/m/612x508/filters:quality(70)`}
        alt={story.content.main_image.alt}
        width={612}
        height={508}
        loading={'lazy'}
      />
      <div className="p-8">
        <div className="flex gap-4 justify-content text-lg font-bold">
          <h3>{story.content.name}</h3>
          <p>
            {Number(story.content.price).toLocaleString('en-US', {
              style: 'currency',
              currency: 'TWD',
              minimumFractionDigits: 0,
            })}
          </p>
        </div>
        <p className="text-gray-700 uppercase font-bold mt-2 text-sm tracking-wide">
          {story.content.location}, Taiwan
        </p>
        <Link
          className="font-bold text-base mt-8 block underline"
          href={`/${story.full_slug}`}
        >
          View Tour
        </Link>
      </div>
    </div>
  )
}
