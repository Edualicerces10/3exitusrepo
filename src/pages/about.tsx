import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import SectionHistory from '../components/SectionHistory'
import TestimonalSection from '../components/Testimonals'


export default function About() {
    return(
    <>
        <Head>
            <title>Sobre Nós | exitus</title>
        </Head>
        <Box as='div' minHeight="70vh" px={{ base: '4', md: '8' }}>
            <SectionHistory />
            <TestimonalSection />
        </Box> 
    </>
    )
}