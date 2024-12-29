/* eslint-disable react/prop-types */
import {
  storyblokEditable,
  renderRichText,
  RichTextSchema,
} from '@storyblok/react/rsc'
import Image from 'next/image'
// import { richTextResolver } from '@storyblok/richtext'
import React from 'react'

export const Tour = (props) => {
  // const { render } = richTextResolver();
  // const html = render(props.blok.body)
  return (
    <main
      {...storyblokEditable(props.blok)}
      className="container mx-auto px-4 w-full pt-32 pb-16"
    >
      <h1 className="text-3xl md:text-5xl font-bold">{props.blok.name}</h1>

      <Image
        className="mt-12"
        src={props.blok.main_image.filename}
        alt={props.blok.main_image.alt}
        width={props.blok.main_image.filename.split('/')[5].split('x')[0]}
        height={props.blok.main_image.filename.split('/')[5].split('x')[1]}
        sizes="(max-width: 612px) 100vw, 612px"
        priority={true}
      />
      <p className="mt-12 text-lg md:text-2xl md:leading-relaxed">
        {props.blok.introduction}
      </p>
      <div
        className="prose md:prose-lg mt-16 max-w-none"
        dangerouslySetInnerHTML={{
          __html: renderRichText(props.blok.body, {
            schema: {
              ...RichTextSchema,
              nodes: {
                ...RichTextSchema.nodes,
                image: (node) => ({
                  singleTag: [
                    {
                      tag: 'img',
                      attrs: {
                        src: `${node.attrs.src}/m/612x0/filters:quality(75)`,
                        alt: node.attrs.alt,
                        loading: 'lazy',
                        width: node.attrs.src.split('/')[5].split('x')[0],
                        height: node.attrs.src.split('/')[5].split('x')[1],
                      },
                    },
                  ],
                }),
              },
            },
          }),
        }}
      ></div>
    </main>
  )
}
