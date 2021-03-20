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
export const Wrapper: React.FC<Props> = (props) => (
  <div className={styles.wrapper}>{props.children}</div>
)
