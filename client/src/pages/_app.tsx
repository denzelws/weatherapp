import TopButtons from 'components/TopButtons'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Cloudy</title>
        <link rel="shortcut icon" href="/img/faviconcloud.png" />
        <link rel="apple-touch-icon" href="/img/faviconcloud.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="An weather app project to call API and show information"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <TopButtons />
    </ThemeProvider>
  )
}

export default App
