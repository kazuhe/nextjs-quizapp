/*
 * Import
 */
import React from 'react'
import Link from 'next/link'
import styles from './style.module.scss'

/*
 * Types
 */
export type Props = {
  link: string
  title: string
  text: string
}

/*
 * DOM
 */
export const Card: React.FC<Props> = (props) => (
  <Link href={props.link} passHref>
    <a className={styles.card}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </a>
  </Link>
)
