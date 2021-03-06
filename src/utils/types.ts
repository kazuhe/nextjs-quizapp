export type Article = {
  id: string
  isCompletedQuiz: boolean
  title: string
  introduction: string
  content: string[]
}

export type Articles = {
  section_title: string
  section_subtitle: string
  section_contet: Article[]
}[]

export type Quiz = {
  id: string
  question: string
  choices: string[]
  answer: string
}
