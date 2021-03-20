/*
 * Import
 */
import React from 'react'
import { AppProps } from 'next/app'
import { Main } from 'components/main'
import { Footer } from 'components/footer'
import 'styles/globals.scss'

/*
 * Root
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  )
}

export default MyApp
