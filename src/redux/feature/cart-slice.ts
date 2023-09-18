import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProductCart, InitialState } from '../../types/redux/cart'
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
      const tmp: IProductCart[] = JSON.parse(JSON.stringify(state.cart))
      const index = tmp.findIndex((item) => item._id === actions.payload._id)
      if (index !== -1) {
        tmp[index].qty += 1
        return {
          ...state,
          cart: tmp,
        }
      } else {
        tmp.push({
          ...actions.payload,
          qty: 1,
        })

        return {
          ...state,
          cart: tmp,
        }
      }
    },
    plus: (state, actions: PayloadAction<string>) => {
      const tmp: IProductCart[] = JSON.parse(JSON.stringify(state.cart))
      const index = tmp.findIndex((item) => item._id === actions.payload)
      if (index !== -1) {
        tmp[index].qty += 1
        return {
          ...state,
          cart: tmp,
        }
      }
    },
    minus: (state, actions: PayloadAction<string>) => {
      const tmp: IProductCart[] = JSON.parse(JSON.stringify(state.cart))
      const index = tmp.findIndex((item) => item._id === actions.payload)
      if (index !== -1) {
        if (tmp[index].qty > 0) {
          tmp[index].qty -= 1
          return {
            ...state,
            cart: tmp,
          }
        }
      }
    },
    removeFromCart: (state, actions: PayloadAction<string>) => {
      const tmp: IProductCart[] = JSON.parse(JSON.stringify(state.cart))
      const index = tmp.findIndex((item) => item._id === actions.payload)
      if (index !== -1) {
        tmp.splice(index, 1)
        return {
          ...state,
          cart: tmp,
        }
      }
    },
  },
})

export const { setCollapsed, addToCart, removeFromCart, plus, minus } =
  cart.actions
export default cart.reducer
