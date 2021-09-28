import { Box } from "@chakra-ui/react";
import React from "react";
import HeroSection  from "../components/Hero";
// import SectionMarketing from "../components/SectionMarketing";
import SectionServices from "../components/SectionServices";


export default function Home(){
  return (
      <>
        <HeroSection />
        <SectionServices />
        {/* <SectionMarketing /> */}
      </>
  )
}
