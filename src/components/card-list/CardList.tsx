/*
 * Import
 */
import React from 'react'
import { CardContainer } from 'components/card'
import { Articles } from 'utils/types'
import styles from './style.module.scss'

/*
 * Types
 */
type Props = {
  data: Articles
}

/*
 * DOM
 */
export const CardList: React.FC<Props> = (props) => (
  <div className={styles.cardList}>
    {props.data.map((data, i) => (
      <section key={`articles-${i}`}>
        <div className={styles.cardList_title}>
          <h2>{data.section_title}</h2>
          <p>{data.section_subtitle}</p>
        </div>
        <ul>
          {data.section_contet.map((data) => (
            <li key={data.id}>
              <CardContainer
                id={data.id}
                link={`/articles/${data.id}`}
                title={data.title}
                text={data.introduction}
              />
            </li>
          ))}
        </ul>
      </section>
    ))}
  </div>
)
