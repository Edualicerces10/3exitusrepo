import { Box } from "@chakra-ui/react";
import React from "react";
import HeroSection  from "../components/Hero";
import SectionFeactures from "../components/SectionFeatures";
// import SectionMarketing from "../components/SectionMarketing";
import SectionServices from "../components/SectionServices";

import Head from 'next/head'


export default function Home(){
  return (
      <>
        <Head>
            <title>Home | exitus</title>
        </Head>
        <HeroSection />
        <SectionServices />
        {/* <SectionMarketing /> */}
        <SectionFeactures />
      </>
  )
}
