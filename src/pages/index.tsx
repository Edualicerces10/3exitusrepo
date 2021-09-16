import { Box } from "@chakra-ui/react";
import HeroSection  from "../components/Hero";


export default function Home(){
  return (
      <Box as='div' minHeight="70vh" px={{ base: '4', md: '8' }}>
        <HeroSection />
      </Box>
  )
}
