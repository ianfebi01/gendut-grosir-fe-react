import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InitialState } from '../../types/redux/products'
import { IData } from '../../types/api/product.types'

const initialState: InitialState = {
  products: [],
  paginator: {
    itemCount: 0,
    limit: 25,
    totalPages: 0,
    page: 1,
    pagingCounter: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null,
  },
}

export const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, actions: PayloadAction<IData>) => {
      return {
        ...state,
        products: actions.payload.data,
        paginator: actions.payload.paginator,
      }
    },
  },
})

export const { setProducts } = products.actions
export default products.reducer
