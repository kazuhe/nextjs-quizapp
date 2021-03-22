# nextjs-quizapp

Next.js+TypeScript の小説クイズアプリ。  
https://nextjs-quizapp.vercel.app/

1 つの小説に対して 1 つのクイズが紐付けられており、クイズに正解すると Web Storage に小説の id が保存される。

# ディレクトリ構成

```bash
src
 ├─ components  # DOMとロジックを持つコンポーネント郡
 ├─ data  # 小説とクイズのデータを扱う
 ├─ pages  # 各ページを表す
 ├─ stores  # Redux Toolkitに関するファイル郡
 ├─ styles  # アプリ全体で使うcss
 ├─ test  # testファイル郡（仮）
 └─ utils  # 利用頻度が高いfunction/class/typeを定義
```

# コンポーネント設計

基本のコンポーネントは下記の 4 層で構成している。

- Import 層
- Types 層
- DOM 層
- Container 層

DOM 層は状態を持たずロジックも簡単な for などに限定する。DOM 層を export して振る舞いを test する。  
Container 層で DOM 層に依存を注入する。この構成によって「見た目」と「状態」責務の完全に分離する。

```tsx
/*
 * Import
 */
import React, { useState } from 'react'
import styles from './style.module.scss'

/*
 * Types
 */
export type Props = {
  name: string
  nameHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

/*
 * DOM
 */
export const Example: React.FC<Props> = (props) => (
  <div className={styles.example}>
    <label htmlFor="username">Name</label>
    <input
      id="username"
      typeof="username"
      type="text"
      value={props.name}
      onChange={props.nameHandler}
      autoComplete="username"
    />
  </div>
)

/*
 * Container
 */
export const ExampleContainer: React.FC = () => {
  const [name, setName] = useState('')

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  return <Signup name={name} nameHandler={nameHandler} />
}
```

# Web Storage の扱い

`stores/article`で Web Storage とデータの受け渡しを行う。ここで Redux へデータを保存して各コンポーネントからデータにアクセスすることが可能になる。

<img src="https://user-images.githubusercontent.com/57878514/111955047-54a73c00-8b2c-11eb-9432-19f866c79105.png" width="500">

なお、`components/initialize`コンポーネントの初回マウント時に Redux の初期化（Web Storage のデータセット）メソッドをコールしている。

▼ \_app.tsx

```tsx
<Provider store={store}>
  <InitializeContainer>
    <ProgressContainer />
    <Main>
      <Component {...pageProps} />
    </Main>
    <Footer />
  </InitializeContainer>
</Provider>
```

# 記事とクイズデータの扱い

更新頻度が少なく非エンジニアがデータを編集することは想定していない為、記事データは`data/articles.ts`・クイズデータは`data/quizzez.ts`にそれぞれデータを保存している。データは`utils/helper.ts`の関数を使って取得する。

今後頻繁に記事を更新することになった場合はヘッドレス CMS に置き換えることも容易に可能な様に設計している。
