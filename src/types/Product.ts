import type { CommentType } from './comment'

export type ProductType = {
  _id: string
  productName: string
  productImage: string
  price: number
  brandName: string
  gender: string
  type: string
  comments: CommentType[]
}
