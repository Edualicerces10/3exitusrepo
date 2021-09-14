import {Box, Container } from "@chakra-ui/react";

import { Image } from '@chakra-ui/react'
import React from "react";
export default function Custom404(){
    return (
        <Container>
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Image src="/img/Oops404.svg" alt="Segun Adebayo" />
        </Box>
        </Container>
    )
  }