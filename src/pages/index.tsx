import React from "react";
import HeroSection  from "../components/Hero";
import SectionFeactures from "../components/SectionFeatures";
import SectionServices from "../components/SectionServices";


import Head from 'next/head'

export default function Home(){
  return (
      <>
        <Head>
            <title>exitus</title>
        </Head>
        <HeroSection />
        <SectionServices />
        <SectionFeactures />
      </>
  )
}
