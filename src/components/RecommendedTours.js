import { storyblokEditable } from '@storyblok/react/rsc'
import { RecommendedTour } from './RecommendedTour'
import React from 'react'
export const RecommendedTours = (params) => {
  // console.log(params.blok.tours[0].id, "paramsXXXXXXX");
  //   const test = params.map((param) => {
  //     console.log(param, "paramZZZZ");
  //   });
  // console.log(params, 'paramZZZZ')

  return (
    <section
      {...storyblokEditable(params.blok)}
      className="py-16 container mx-auto w-full px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        {params.blok.headline}
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {params.blok.tours.map((tour) => {
          // console.log(tour.content._uid, "tourr")

          return <RecommendedTour blok={tour} key={tour.content._uid} />
        })}
      </div>
    </section>
  )
}
