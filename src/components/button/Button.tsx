/*
 * Import
 */
import React from 'react'
import styles from './style.module.scss'

/*
 * Types
 */
export type Props = {
  label: string
  link?: string
  isEnabled?: boolean
  onClick?: () => void
}

/*
 * DOM
 */
export const Button: React.FC<Props> = ({ isEnabled = true, ...props }) => (
  <>
    {props.link ? (
      <a
        href={props.link}
        className={[styles.button, !isEnabled ? styles.isDisabled : ''].join(
          ' '
        )}
      >
        <span>{props.label}</span>
      </a>
    ) : (
      <button
        onClick={props.onClick}
        className={styles.button}
        disabled={!isEnabled}
      >
        <span>{props.label}</span>
      </button>
    )}
  </>
)
