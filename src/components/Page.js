import React from 'react'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc'

const Page = (params) => {
  // console.log(params, "params");

  return (
    <main {...storyblokEditable(params.blok)}>
      {params.blok.blocks.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  )
}
export default Page
