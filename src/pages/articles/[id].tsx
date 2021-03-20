/*
 * Import
 */
import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { Wrapper } from 'components/wrapper'
import { getArticleById } from 'utils/helper'
import { articles } from 'data/articles'
import { Article } from 'utils/types'

/*
 * Types
 */
type Props = {
  article: Article
}

/*
 * DOM
 */
export const ArticleId: NextPage<Props> = (props) => (
  <div>
    <Wrapper>
      <div>
        <p>Article: {props.article.id}</p>
        <h1>{props.article.title}</h1>
      </div>
      {props.article.content.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </Wrapper>
  </div>
)

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

export default ArticleId