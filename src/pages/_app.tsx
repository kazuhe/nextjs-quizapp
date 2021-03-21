/*
 * Import
 */
import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'stores'
import { InitializeContainer } from 'components/initialize'
import { Main } from 'components/main'
import { Footer } from 'components/footer'
import 'styles/globals.scss'

/*
 * Root
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <InitializeContainer>
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </InitializeContainer>
    </Provider>
  )
}

export default MyApp
