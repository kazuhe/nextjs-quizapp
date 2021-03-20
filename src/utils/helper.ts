import { articles } from 'data/articles'
import { Article } from 'utils/types'

export function getArticleById(id: string): Article {
  const sectionContets = articles.flatMap((data) => data.section_contet)
  return sectionContets.find((data) => data.id === id)
}
