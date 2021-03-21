import { combineReducers } from '@reduxjs/toolkit'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import articles from './articles'

const reducer = combineReducers({
  articles,
})

const middleware = getDefaultMiddleware({ serializableCheck: false })
export const store = configureStore({ reducer, middleware })

export type RootState = ReturnType<typeof reducer>
