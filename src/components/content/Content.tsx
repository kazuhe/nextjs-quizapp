/*
 * Import
 */
import React from 'react'
import { Article } from 'utils/types'
import styles from './style.module.scss'

/*
 * Types
 */
type Props = {
  content: Article
}

/*
 * DOM
 */
export const Content: React.FC<Props> = (props) => (
  <div className={styles.content}>
    <div className={styles.content_header}>
      <p>Article: {props.content.id}</p>
      <h1>{props.content.title}</h1>
    </div>
    {props.content.content.map((p, i) => (
      <p key={i}>{p}</p>
    ))}
  </div>
)
