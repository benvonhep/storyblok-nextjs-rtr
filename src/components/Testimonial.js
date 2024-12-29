import { storyblokEditable } from '@storyblok/react/rsc'
import React from 'react'
export const Testimonial = (params) => {
  return (
    <div
      {...storyblokEditable(params.blok)}
      className="bg-white p-8 rounded-sm shadow"
    >
      <h3 className="text-xl leading-relaxed text-gray-700">
        {params.blok.comment}
      </h3>
      <p className="text-ls font-semibold mt-6">{params.blok.name}</p>
    </div>
  )
}
