/*
 * Import
 */
import Head from 'next/head'
import { Wrapper } from 'components/wrapper'
import { Card } from 'components/card'

/*
 * DOM
 */
export const Home = (): JSX.Element => (
  <div className="home">
    <Wrapper>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className="description">
        Get started by editing <code>pages/index.tsx</code>
      </p>

      <button
        onClick={() => {
          window.alert('With typescript and Jest')
        }}
      >
        Test Button
      </button>

      <div className="grid">
        <Card
          link="https://nextjs.org/docs"
          title="Documentation &rarr;"
          text="Find in-depth information about Next.js features and API."
        />
        <Card
          link="https://nextjs.org/docs"
          title="Learn &rarr;"
          text="Learn about Next.js in an interactive course with quizzes!"
        />
        <Card
          link="https://nextjs.org/docs"
          title="Examples &rarr;"
          text="Discover and deploy boilerplate example Next.js projects."
        />
      </div>
    </Wrapper>

    <style jsx>{`
      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

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

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>
  </div>
)

export default Home
