import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InitialState } from '../../types/redux/cart'

const initialState: InitialState = {
  collapsed: true,
}

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCollapsed: (state, actions: PayloadAction<boolean>) => {
      return {
        ...state,
        collapsed: actions.payload,
      }
    },
  },
})

export const { setCollapsed } = cart.actions
export default cart.reducer
