import { Box, Divider } from "@chakra-ui/react";
import React from "react";
import DividerSections from "../components/DividerSections";
import HeroSection  from "../components/Hero";


export default function Home(){
  return (
      <Box as='div' minHeight="70vh" px={{ base: '4', md: '8' }}>
        <HeroSection />
      </Box>
  )
}
