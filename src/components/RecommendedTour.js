/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'

export const RecommendedTour = (props) => {
  // console.log(props, 'paramsXXX')
  const story = props.story || props.blok

  return (
    <section>
      <Link href={`/${story.full_slug}`}>
        <h3>{story.content.name}</h3>
      </Link>
    </section>
  )
}
