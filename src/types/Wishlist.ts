import type { ProductType } from './Product'

export type WishlistItemType = {
  productId: string
  addedAt: Date
  product: ProductType
}
