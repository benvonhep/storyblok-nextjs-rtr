/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'

export const RecommendedTour = (props) => {
  console.log(props.story.full_slug, 'paramsXXX')

  return (
    <section>
      <Link href={`/${props.story.full_slug}`}>
        <h3>{props.story.content.name}</h3>
      </Link>
    </section>
  )
}
