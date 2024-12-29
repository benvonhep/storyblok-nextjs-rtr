import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc'
import React from 'react'

export const Grid = (params) => {
  console.log(params, 'params')

  return (
    <section {...storyblokEditable(params.blok)} className="bg-blue-100 py-16">
      <div className="container mx-auto w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          {params.blok.headline}
        </h2>
        <div className="grid md:grid-flow-col auto-cols-fr mt-12 gap-8">
          {params.blok.items.map((blok) => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))}
        </div>
      </div>
    </section>
  )
}
