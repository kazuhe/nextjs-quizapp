/*
 * Import
 */
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from 'components/button'
import { Quiz as QuizType } from 'utils/types'
import { getQuizByArticle } from 'utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { setArticleQuiz } from 'stores/articles'
import { RootState } from 'stores'
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
  isCorrect: boolean
  toAnswer: () => void
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
      {props.isCorrect ? (
        <div>
          <p>正解です。</p>
        </div>
      ) : (
        <>
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
          <div className={styles.quiz_button}>
            <Button label="回答する" onClick={props.toAnswer} />
          </div>
        </>
      )}
    </div>
  </div>
)

/*
 * Container
 */
export const QuizContainer: React.FC<ContainerProps> = (props) => {
  const dispatch = useDispatch()

  // 現在のarticleに紐づくクイズを取得
  const quiz = getQuizByArticle(props.articleId)

  // 選択肢の中から選択されている項目を持つ
  const [chosen, setChosen] = useState('')
  const handleChangeChoices = (event) => {
    setChosen(event.target.value)
  }

  // クイズに正解した場合は正解したクイズidをdispatch
  const toAnswer = () => {
    if (chosen === quiz.answer) {
      dispatch(setArticleQuiz(quiz.id))
    }
  }

  // クイズに正解している場合は'true'
  const isCorrect = useSelector(
    (state: RootState) => state.articles.isCorrect[props.articleId]
  )
  console.log(isCorrect)

  return (
    <Quiz
      quiz={quiz}
      handleShowQuiz={props.handleShowQuiz}
      chosen={chosen}
      handleChangeChoices={handleChangeChoices}
      isCorrect={isCorrect}
      toAnswer={toAnswer}
    />
  )
}
