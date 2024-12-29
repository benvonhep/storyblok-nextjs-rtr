'use client'

// import TourPage from '@/app/tours/[slug]/page'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import { Tour } from './Tour'

/** Import your components */
import Page from './Page'
import { Feature } from './Feature'
import { Grid } from './Grid'
import { Hero } from './Hero'
import { Testimonial } from './Testimonial'
import { RecommendedTours } from './RecommendedTours'
// import Teaser from "./Teaser";
// import Hometest from "./Hometest";
// import Landing from "./Landing";

const components = {
  tour: Tour,
  feature: Feature,
  grid: Grid,
  page: Page,
  hero: Hero,
  testimonial: Testimonial,
  recommended_tours: RecommendedTours,
  // landing: Landing,
  // teaser: Teaser,
  // home_test: Hometest,
}

storyblokInit({
  // eslint-disable-next-line no-undef
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
  enableFallbackComponent: true,
})

export default function StoryblokProvider({ children }) {
  console.log('StoryblokProvider initialized with components:', components)

  return children
}
