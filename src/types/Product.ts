import type { CommentType } from './Comment'

export type ProductType = {
  _id: string
  productName: string
  productImage: string
  productDescription: string
  price: number
  brandName: string
  gender: string
  type: string
  quantity: number
  comments: CommentType[]
}
