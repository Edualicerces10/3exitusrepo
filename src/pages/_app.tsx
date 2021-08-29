import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        {/* <title>3exitus Marketing Digital</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" /> */}
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="3xitus Marketing Digital, uma empresa que prestadora de serviços na área digital."
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App