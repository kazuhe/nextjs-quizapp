import { articles } from 'data/articles'
import { quizzes } from 'data/quizzes'
import { Article, Quiz } from 'utils/types'

export function getArticleById(id: string): Article {
  const sectionContets = articles.flatMap((data) => data.section_contet)
  return sectionContets.find((data) => data.id === id)
}

export function getQuizByArticle(article: string): Quiz {
  return quizzes.find((data) => data.id === article)
}
