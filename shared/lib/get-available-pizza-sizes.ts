import { ProductVariation } from '@prisma/client'
import { IPizzaDough, pizzaSizes } from '@/shared/constants/pizza'
import { Variant } from '@/components/shared/toggle-variants'

export const getAvailablePizzaSizes = (productVariation: ProductVariation[], dough: IPizzaDough): Variant[] => {
	const filteredPizzasByDough = productVariation.filter(item => item.pizzaType === dough)

	return pizzaSizes.map(item => ({
		name: item.name,
		value: item.value,
		disabled: !filteredPizzasByDough.some(pizza => Number(pizza.size) === Number(item.value))
	}))
}
