/*
 * Import
 */
import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Wrapper } from 'components/wrapper'
import { Button } from 'components/button'

/*
 * Types
 */
type Props = {
  toBack: () => void
}

/*
 * DOM
 */
export const Incorrect: React.FC<Props> = (props) => (
  <div className="incorrect">
    <Wrapper>
      <h1 className="title">Incorrect answer...</h1>
      <p className="description">不正解です。再度チャレンジしてください。</p>
      <div className="button">
        <Button label="再チャレンジ" onClick={props.toBack} />
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

/*
 * Container
 */
export const IncorrectContainer: NextPage = () => {
  const router = useRouter()
  const toBack = () => {
    router.back()
  }

  return <Incorrect toBack={toBack} />
}

export default IncorrectContainer
