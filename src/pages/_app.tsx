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
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
      
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="%PUBLIC_URL%/3exitus.png" /> */}
        <link rel="apple-touch-icon" href="/img/3exitusicon.png" />
        <link rel="shortcut icon" href="/img/3exitus.png" />
        <meta name="theme-color" content="#06092B" />
        <meta
        name="description"
        content="3exitus Marketing Digital, uma empresa que prestadora de serviços na área digital."
        />
      </Head>
      <NabarApp />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default App