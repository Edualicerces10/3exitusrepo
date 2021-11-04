import React from "react";

import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import DividerSections from "../DividerSections";
import base from "@emotion/styled/types/base";
import NewMarketing from "../NewMarketing";

export default function OtherFeatures() {
  return (
    <>
    <Flex
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={14}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
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
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
            Para melhro compressão do que fazemos, aprensentamos aqui em que podemos melhoras ou mudar o seu negócio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus necessitatibus architecto consectetur.
            </chakra.p>
          </Box>
          <Box
            w="full"
            h="full"
            py={40}
            bg={useColorModeValue("gray.200", "gray.700")}
          ></Box>
        </SimpleGrid>
        <NewMarketing />
      </Box>
    </Flex>
    <DividerSections/>
    </>
  )
}