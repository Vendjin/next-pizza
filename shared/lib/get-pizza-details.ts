import { IPizzaDough, IPizzaSize, mapPizzaDough } from '@/shared/constants/pizza'
import { calcTotalPizzaPrice } from '@/shared/lib/calc-total-pizza-price'
import { Ingredient, ProductVariation } from '@prisma/client'

export const getPizzaDetails = (
	size: IPizzaSize,
	dough: IPizzaDough,
	productVariation: ProductVariation[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>
) => {
	const totalPrice = calcTotalPizzaPrice(size, dough, productVariation, ingredients, selectedIngredients)

	const textDetails = `${size} cм, ${mapPizzaDough[dough]} пицца`

	return {
		totalPrice,
		textDetails
	}
}
