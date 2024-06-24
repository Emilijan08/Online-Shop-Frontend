import type { CommentType } from './Comment'

export type ProductType = {
  _id: string
  name: string
  description: string
  image: string
  price: number
  brand: string
  category: string
  comments: CommentType[]
  quantity: number
}
