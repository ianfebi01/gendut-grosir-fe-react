import { IProduct } from '../../api/product.types'

export interface InitialState {
  collapsed: boolean
  cart: IProductCart[]
}

export interface IProductCart extends IProduct {
  qty: number
}
