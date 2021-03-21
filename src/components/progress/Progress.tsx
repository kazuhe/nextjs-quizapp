/*
 * Import
 */
import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from 'stores'
import { Wrapper } from 'components/wrapper'
import styles from './style.module.scss'

/*
 * Types
 */
export type Props = {
  quizzes: number
  correctQuizzes: number
}

/*
 * DOM
 */
export const Progress: React.FC<Props> = (props) => (
  <div className={styles.progress}>
    <Wrapper>
      <div className={styles.progress_inner}>
        <div className={styles.progress_logo}>
          <Link href="/" passHref>
            <a>nextjs-quizapp</a>
          </Link>
        </div>
        <div className={styles.progress_body}>
          <div className={styles.progress_mater}>
            <div
              style={{
                width: `calc((100% / ${props.quizzes}) * ${props.correctQuizzes})`,
              }}
            />
          </div>
          <div className={styles.progress_value}>
            {props.quizzes === props.correctQuizzes ? (
              'Completed'
            ) : (
              <span>
                {props.correctQuizzes}/{props.quizzes}
              </span>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  </div>
)

/*
 * Container
 */
export const ProgressContainer: React.FC = () => {
  // クイズの総数と正解したクイズの数を取得
  const isCorrect = useSelector((state: RootState) => state.articles.isCorrect)
  const quizzes: string[] = [] // 全てのクイズ
  const correctAnswerQuizzes: string[] = [] // 正解したクイズ

  Object.entries(isCorrect).forEach(([key, value]) => {
    quizzes.push(key)
    if (value) correctAnswerQuizzes.push(key)
  })

  return (
    <Progress
      quizzes={quizzes.length}
      correctQuizzes={correctAnswerQuizzes.length}
    />
  )
}
