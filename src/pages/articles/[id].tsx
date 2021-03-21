/*
 * Import
 */
import React, { useState } from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { Wrapper } from 'components/wrapper'
import { Content } from 'components/content'
import { Button } from 'components/button'
import { QuizContainer } from 'components/quiz'
import { getArticleById } from 'utils/helper'
import { articles } from 'data/articles'
import { Article } from 'utils/types'

/*
 * Types
 */
type ContainerProps = {
  article: Article
}
type Props = {
  article: Article
  showQuiz: boolean
  handleShowQuiz: () => void
}

/*
 * DOM
 */
export const ArticleId: React.FC<Props> = (props) => (
  <div>
    <Wrapper>
      <Content content={props.article} />
      <div className="button">
        <Button label="クイズにチャレンジ" onClick={props.handleShowQuiz} />
      </div>
      {props.showQuiz ? (
        <QuizContainer
          articleId={props.article.id}
          handleShowQuiz={props.handleShowQuiz}
        />
      ) : (
        ''
      )}
    </Wrapper>

    <style jsx>{`
      .button {
        text-align: center;
        margin: 5rem 0 0;
      }
    `}</style>
  </div>
)

/*
 * Container
 */
export const ArticleIdContainer: NextPage<ContainerProps> = (props) => {
  // クイズモーダル表示/非表示の状態管理
  const [showQuiz, setShowQuiz] = useState(false)
  const handleShowQuiz = () => {
    setShowQuiz(!showQuiz)
  }

  return (
    <ArticleId
      article={props.article}
      showQuiz={showQuiz}
      handleShowQuiz={handleShowQuiz}
    />
  )
}

/*
 * Get static props
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id as string
  const article = getArticleById(id)

  return {
    props: {
      article,
    },
  }
}

/*
 * Get static paths
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const sectionContets = articles.flatMap((data) => data.section_contet)
  const paths = sectionContets.map((data) => {
    return {
      params: {
        id: data.id,
      },
    }
  })
  return { paths, fallback: false }
}

export default ArticleIdContainer
