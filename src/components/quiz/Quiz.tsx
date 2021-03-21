/*
 * Import
 */
import React, { useState } from 'react'
import Image from 'next/image'
import { Quiz as QuizType } from 'utils/types'
import { getQuizByArticle } from 'utils/helper'
import styles from './style.module.scss'

/*
 * Types
 */
type ContainerProps = {
  articleId: string
  handleShowQuiz: () => void
}
type Props = {
  quiz: QuizType
  handleShowQuiz: () => void
  chosen: string
  handleChangeChoices: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/*
 * DOM
 */
export const Quiz: React.FC<Props> = (props) => (
  <div className={styles.quiz}>
    <div className={styles.quiz_inner}>
      <div onClick={props.handleShowQuiz} className={styles.quiz_close}>
        <Image src="/x-square.svg" alt="" height={30} width={30} />
      </div>
      <p className={styles.quiz_question}>{props.quiz.question}</p>
      <ul className={styles.quiz_choices}>
        {props.quiz.choices.map((data, i) => (
          <li key={`choices-${i}`}>
            <label htmlFor={`choices-${i}`}>
              <input
                type="radio"
                id={`choices-${i}`}
                onChange={props.handleChangeChoices}
                name="quiz"
                value={data}
              />
              <span>{data}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

/*
 * Container
 */
export const QuizContainer: React.FC<ContainerProps> = (props) => {
  // 現在のarticleに紐づくクイズを取得
  const quiz = getQuizByArticle(props.articleId)

  // クイズの選択肢の状態
  const [chosen, setChosen] = useState('')
  const handleChangeChoices = (event) => {
    setChosen(event.target.value)
  }

  return (
    <Quiz
      quiz={quiz}
      handleShowQuiz={props.handleShowQuiz}
      chosen={chosen}
      handleChangeChoices={handleChangeChoices}
    />
  )
}
