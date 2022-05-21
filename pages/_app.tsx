import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
        <title>Cicinho - Pode confiar!</title>
        <link rel="icon"/>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
