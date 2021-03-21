/*
 * Import
 */
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { initialArticleQuiz } from 'stores/articles'

/*
 * Types
 */
type Props = {
  children: React.ReactNode
}

/*
 * DOM
 */
export const Initialize: React.FC<Props> = (props) => <>{props.children}</>

/*
 * Container
 */
export const InitializeContainer: React.FC = (props) => {
  const dispatch = useDispatch()
  const router = useRouter()

  // 初回マウント時に'Web Strage'から正解したクイズを'Redux'へセット
  useEffect(() => {
    dispatch(initialArticleQuiz())
  }, [router.pathname])

  return <Initialize>{props.children}</Initialize>
}
