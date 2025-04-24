import React, { useEffect } from 'react'
import { IPizzaDough, IPizzaSize } from '@/shared/constants/pizza'
import { useSet } from 'react-use'
import { getAvailablePizzaSizes } from '@/shared/lib'
import { ProductVariation } from '@prisma/client'
import { Variant } from '@/components/shared/toggle-variants'

interface IReturnProps {
	size: IPizzaSize
	dough: IPizzaDough
	addIngredient: (key: number) => void
	availableSizes: Variant[]
	setSize: (size: IPizzaSize) => void
	setDough: (dough: IPizzaDough) => void
	selectedIngredients: Set<number>
}

export const usePizzaOptions = (productVariation: ProductVariation[]): IReturnProps => {
	const [size, setSize] = React.useState<IPizzaSize>(30)
	const [dough, setDough] = React.useState<IPizzaDough>(1)

	const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]))

	const availableSizes = getAvailablePizzaSizes(productVariation, dough)

	useEffect(() => {
		const isAvailableSize = availableSizes?.find(item => Number(item.value) === size && !item.disabled)
		const availableSize = availableSizes?.find(item => !item.disabled)

		if (!isAvailableSize && availableSize) {
			setSize(Number(availableSize.value) as IPizzaSize)
		}
	}, [dough])

	return {
		size,
		dough,
		availableSizes,
		setSize,
		setDough,
		selectedIngredients,
		addIngredient
	}
}
