import { Ingredient, Product, ProductVariation } from '@prisma/client'

export type IProductWithVariations = Product & { productVariation: ProductVariation[]; ingredients: Ingredient[] }
