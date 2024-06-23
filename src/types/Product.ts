import type { CommentType } from './Comment'

export type ProductType = {
  _id: string
  productName: string
  productImage: string
  productDescription: string
  productCategory: string
  price: number
  brandName: string
  quantity: number
  comments: CommentType[]
}
