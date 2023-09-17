import { IProduct } from '../../api/product.types'

export interface InitialState {
  collapsed: boolean
  cart: IProduct[]
}
