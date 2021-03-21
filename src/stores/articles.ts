import { createSlice } from '@reduxjs/toolkit'
import { Storage } from 'utils/storage'
import { articles as articlesData } from 'data/articles'

// articlesデータ郡を取得し各articleの{id: boolean}のペアを配列にセット
const articleContets = articlesData.flatMap((data) => data.section_contet)
const articleId: { [id: string]: boolean } = {}
articleContets.forEach((data) => (articleId[data.id] = false))

// ステートの型
type State = {
  isCorrect: {
    [id: string]: boolean
  }
}

// ステートの初期値
const initialState: State = {
  isCorrect: articleId,
}

const articles = createSlice({
  // このcreateSliceを識別するための名前
  name: 'articles',

  // ステートの初期データ
  initialState,

  // ステートを変更する為の処理
  reducers: {
    // 'Web Strage'から取得した値をセット
    initialArticleQuiz: (state) => {
      const isCorrect = new Storage('isCorrect')

      // 'Web Strage' か取得した値をしている全idを取得して配列にセット
      const correctAnswerQuizzes: string[] = []
      const strageData = isCorrect.getAllItem()
      Object.entries(strageData).forEach(([key]) =>
        correctAnswerQuizzes.push(key)
      )

      // idを元に正解しているクイズの値をtrueに変更
      Object.entries(state.isCorrect).forEach(([key]) => {
        if (correctAnswerQuizzes.includes(key)) state.isCorrect[key] = true
      })
    },

    // 正解したクイズのidをセット
    setArticleQuiz: (state, action) => {
      // Web Storageにデータを保存
      const isCorrect = new Storage('isCorrect')
      isCorrect.setItem(action.payload, 'isCorrect')
      isCorrect.save()

      // Reduxにデータを保存
      state.isCorrect[action.payload] = true
    },
  },
})

// Action Creatorsをエクスポート
export const { initialArticleQuiz, setArticleQuiz } = articles.actions

// Reducerをエクスポート
export default articles.reducer
