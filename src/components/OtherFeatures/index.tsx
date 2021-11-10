import React from "react";

import {
  Box,
  chakra,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import DividerSections from "../DividerSections";
import TabNewMarketing from "../TabNewMarketing";
import { Image } from './image'

export default function OtherFeatures() {
  return (
    <>
    <Box
        mx="auto" 
        pt="4" 
        px={{ base: '4', md: '8' }}
        justifyContent="center"
        alignItems="center"
    >
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 32 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "xl", md: "3xl" }}
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("purple.600", "gray.400")}
              lineHeight={{ md: "shorter" }}
              textShadow="2px 0 currentcolor"
            >
              Conheça as áreas do marketing que actuamos
            </chakra.h2>
            <chakra.p
              mb={10}
              textAlign={{ base: "center", sm: "left" }}
            //   color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
              lineHeight={8}
            >
            Para melhor compressão do que fazemos, aprensentamos aqui em que podemos melhoras ou mudar o seu negócio.
            </chakra.p>

            <Image
                src='/img/businessexitus.svg'
                alt="afasdas"
              />
          </Box>
          <Box
            // py={40}
            //bg={useColorModeValue("gray.200", "gray.700")}
          >
              {/* <Image
                src='/img/designexitus.svg'
                alt="afasdas"
              /> */}
              <TabNewMarketing />
          </Box>
        </SimpleGrid>
      </Box>
    {/* <TabNewMarketing /> */}
    <DividerSections/>
    </>
  )
}