export interface IProductResponse {
  message: string
  data: IData
}

export interface IData {
  data: IProduct[]
  paginator: IPaginator
}

export interface IPaginator {
  itemCount: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: null
  nextPage: null
}

export interface IProduct {
  _id: string
  name: string
  category: ICategory
  buyPrice: number
  wholesalerPrice: number
  retailPrice: number
  barcode: number
  image: string
  stock: number
  createdAt: Date
  updatedAt: Date
  __v: number
}

export interface ICategory {
  _id: string
  name: string
}
