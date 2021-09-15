import { ColorModeScript } from '@chakra-ui/react'

import Document, {
    Html,
    Head,
    Main,
    NextScript,
  } from 'next/document' 
import ColorTheme from '../styles/ColorTheme'

  export default class MyDocument extends Document {
    render() {
      return (
        <Html lang="pt-PT">
          <Head>
            <link rel="icon" href="%PUBLIC_URL%/3exitus.png" />
            <link rel="shortcut icon" href="/img/3exitus.png" />
            <meta name="theme-color" content="#06092B" />
            <meta
            name="description"
            content="3exitus Marketing Digital, uma empresa que prestadora de serviços na área digital."
            />
          </Head>
          <body>
          <ColorModeScript initialColorMode={ColorTheme.config.initialColorMode} />
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }