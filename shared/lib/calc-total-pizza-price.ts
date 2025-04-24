import { Ingredient, ProductVariation } from '@prisma/client'
import { IPizzaDough, IPizzaSize } from '@/shared/constants/pizza'

/**
 * Функция для подсчета общей стоимости пиццы
 * @param size - размер пиццы
 * @param dough - толщина теста
 * @param productVariations - список вариаций
 * @param ingredients - список ингредиентов
 * @param selectedIngredients - выбранные ингредиенты
 *
 * @return number - общая стоимость исходя из выбранных компонентов
 */

export const calcTotalPizzaPrice = (
	size: IPizzaSize,
	dough: IPizzaDough,
	productVariations: ProductVariation[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>
) => {
	const pizzaPrice = productVariations.find(pizza => pizza.pizzaType === dough && pizza.size === size)?.price || 0

	const totalIngredientsPrice = ingredients
		.filter(ingredient => selectedIngredients.has(ingredient.id))
		.reduce((acc, ingredient) => acc + ingredient.price, 0)

	return pizzaPrice + totalIngredientsPrice
}
