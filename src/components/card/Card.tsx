/*
 * Import
 */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from 'stores'
import styles from './style.module.scss'

/*
 * Types
 */
export type ContainerProps = {
  id: string
  link: string
  title: string
  text: string
}
export type Props = {
  link: string
  title: string
  text: string
  isCorrect: boolean
}

/*
 * DOM
 */
export const Card: React.FC<Props> = (props) => (
  <Link href={props.link} passHref>
    <a className={styles.card}>
      <h3>
        {props.title}
        {props.isCorrect ? (
          <span>
            <Image src="/check-circle.svg" alt="" height={22} width={22} />
          </span>
        ) : (
          ''
        )}
      </h3>
      <p>{props.text}</p>
    </a>
  </Link>
)

/*
 * Container
 */
export const CardContainer: React.FC<ContainerProps> = (props) => {
  // クイズに正解している場合は'true'
  const isCorrect = useSelector(
    (state: RootState) => state.articles.isCorrect[props.id]
  )

  return (
    <Card
      link={`/articles/${props.id}`}
      title={props.title}
      text={props.text}
      isCorrect={isCorrect}
    />
  )
}
