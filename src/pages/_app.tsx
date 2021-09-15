import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Footer } from '../components/Footer'
import NabarApp from '../components/Navbar'
import { theme } from '../styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700&display=swap" rel="stylesheet"/>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="%PUBLIC_URL%/3exitus.png" />
      </Head>
      <NabarApp />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default App