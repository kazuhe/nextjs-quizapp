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
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <Image src="/vercel.svg" alt="Vercel Logo" height={'32'} width={'64'} />
    </a>
  </footer>
)
