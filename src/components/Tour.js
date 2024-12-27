/* eslint-disable react/prop-types */
import { renderRichText } from '@storyblok/react/rsc'
// import { richTextResolver } from '@storyblok/richtext'
import React from 'react'

export const Tour = (props) => {
  // const { render } = richTextResolver();
  // const html = render(props.blok.body)
  return (
    <main className="container mx-auto px-4 w-full pt-32 pb-16">
      <h1 className="text-3xl md:text-5xl font-bold">{props.blok.name}</h1>
      <img className="mt-12" src={props.blok.main_image.filename} />
      <p className="mt-12 text-lg md:text-2xl md:leading-relaxed">
        {props.blok.introduction}
      </p>
      <div
        className="prose md:prose-lg mt-16 max-w-none"
        dangerouslySetInnerHTML={{ __html: renderRichText(props.blok.body) }}
      ></div>
    </main>
  )
}
