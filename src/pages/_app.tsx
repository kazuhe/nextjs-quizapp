/*
 * Import
 */
import React from 'react'
import { AppProps } from 'next/app'
import { Footer } from 'components/footer'
import 'styles/globals.scss'

/*
 * Root
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
