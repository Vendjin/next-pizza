import { IPizzaDough, IPizzaSize, mapPizzaDough } from '@/shared/constants/pizza'
import { Ingredient } from '@prisma/client'

export const getCartItemDetails = (
	doughType: IPizzaDough,
	pizzaSize: IPizzaSize,
	ingredients: Ingredient[]
): string => {
	const details = []

	if (pizzaSize && doughType) {
		const dough = mapPizzaDough[doughType]
		details.push(`${dough} ${pizzaSize} см`)
	}

	if (ingredients) {
		details.push(ingredients.map(ingredient => ingredient.name))
	}

	return details.join(', ')
}
