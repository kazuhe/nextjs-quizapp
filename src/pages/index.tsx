/*
 * Import
 */
import { NextPage } from 'next'
import Head from 'next/head'
import { Wrapper } from 'components/wrapper'
import { CardList } from 'components/card-list'
import { articles } from 'data/articles'

/*
 * DOM
 */
export const Home: NextPage = () => (
  <div className="home">
    <Wrapper>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">nextjs-quizapp</h1>
      <p className="description">クイズは全て「Option A」が正解です。</p>
      <div>
        <CardList data={articles} />
      </div>
    </Wrapper>

    <style jsx>{`
      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      .button {
        margin: 3rem 0 0;
    `}</style>
  </div>
)

export default Home
