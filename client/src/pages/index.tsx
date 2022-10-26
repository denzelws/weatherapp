import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import GlobalStyles from 'styles/global'
import TopButtons from 'components/TopButtons'
import Input from 'components/Input'

export default function Home() {
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
      <div>
        <TopButtons />
        <Input />
      </div>
    </ThemeProvider>
  )
}
