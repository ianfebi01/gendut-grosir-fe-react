import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InitialState } from '../../types/redux/cart'
import { IProduct } from '../../types/api/product.types'

const initialState: InitialState = {
  collapsed: true,
  cart: [],
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
    addToCart: (state, actions: PayloadAction<IProduct>) => {
      const tmp = JSON.parse(JSON.stringify(state.cart))
      tmp.push(actions.payload)
      return {
        ...state,
        cart: tmp,
      }
    },
  },
})

export const { setCollapsed, addToCart } = cart.actions
export default cart.reducer
