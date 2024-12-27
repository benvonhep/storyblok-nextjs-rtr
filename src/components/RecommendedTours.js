import { RecommendedTour } from './RecommendedTour'
import React from 'react'
export const RecommendedTours = (params) => {
  // console.log(params.blok.tours[0].id, "paramsXXXXXXX");
  //   const test = params.map((param) => {
  //     console.log(param, "paramZZZZ");
  //   });
  console.log(params, 'paramZZZZ')

  return (
    <section>
      <h2>{params.blok.headline}</h2>
      {params.blok.tours.map((tour) => {
        // console.log(tour.content._uid, "tourr")

        return <RecommendedTour blok={tour} key={tour.content._uid} />
      })}
    </section>
  )
}
