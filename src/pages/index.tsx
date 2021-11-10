import React from "react"
import Head from 'next/head'

import HeroSection  from "../components/Hero"
import SectionServices from "../components/SectionServices"
import { NewFeature } from "../components/NewFeatures"
import OtherFeatures from "../components/OtherFeatures"
// import TestimonalSection from "../components/Testimonals"

export default function Home(){
  return (
      <>
        <Head>
            <title>exitus</title>
        </Head>
        <HeroSection />
        <SectionServices />
        <OtherFeatures  />
        <NewFeature />
        {/* <TestimonalSection /> */}
      </>
  )
}
