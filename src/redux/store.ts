import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './feature/product-slice'
import usersReducer from './feature/users-slice'
import authReducer from './feature/auth-slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: { productsReducer, usersReducer, authReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
