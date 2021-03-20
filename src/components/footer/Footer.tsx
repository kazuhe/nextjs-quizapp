/*
 * Import
 */
import React from 'react'
import Image from 'next/image'
import styles from './style.module.scss'

/*
 * DOM
 */
export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <a
      href="https://github.com/kazuhe/nextjs-quizapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src="/github-mark.svg" alt="github" height={30} width={30} />
    </a>
  </footer>
)
