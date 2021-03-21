/*
 * Import
 */
import { NextPage } from 'next'
import { Wrapper } from 'components/wrapper'
import { Button } from 'components/button'

/*
 * DOM
 */
export const Correct: NextPage = () => (
  <div className="correct">
    <Wrapper>
      <h1 className="title">Correct answer!</h1>
      <p className="description">クイズに正解しました。</p>
      <div className="button">
        <Button label="一覧に戻る" link="/" />
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

export default Correct
