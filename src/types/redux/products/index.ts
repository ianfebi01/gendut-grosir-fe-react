import { IPaginator, IProduct } from '../../api/product.types'

export interface InitialState {
  products: IProduct[]
  paginator: IPaginator
}
