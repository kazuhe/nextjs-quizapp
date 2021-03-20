/*
 * Import
 */
import React from 'react'
import styles from './style.module.scss'

/*
 * Types
 */
type Props = {
  children: React.ReactNode
}

/*
 * DOM
 */
export const Main: React.FC<Props> = (props) => (
  <main className={styles.main}>{props.children}</main>
)
