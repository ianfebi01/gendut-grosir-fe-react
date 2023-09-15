import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './feature/product-slice'

import authReducer from './feature/auth-slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: { productsReducer, authReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
