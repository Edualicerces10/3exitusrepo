import {Box, Container } from "@chakra-ui/react";

import { Image } from '@chakra-ui/react'
import React from "react";
import TextError404 from "../components/ErrorCustom/text";
export default function Custom404(){
    return (
        <Container>
        <TextError404 />
        <Box
            as='div'
            display="flex"
            // alignItems="center"
            // justifyContent="center"
            px={{ base: '4', md: '8' }}
        >
            <Image src="/img/Oops404.svg" alt="Segun Adebayo" />
        </Box>
        </Container>
    )
  }