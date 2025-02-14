import { useSearchParams } from 'next/navigation'
import { useSet } from 'react-use'
import { useState } from 'react'

interface IQueryFilters extends IPriceRangeProps {
	pizzaDough?: string
	pizzaSizes?: string
	pizzaIngredients?: string
}

interface IPriceRangeProps {
	priceFrom?: number // необязательное, что бы в query было пустое если не изменялось
	priceTo?: number
}

export interface IFilters {
	selectedIngredients: Set<string>
	selectedSize: Set<string>
	selectedDough: Set<string>
	prices: IPriceRangeProps
}

interface IFiltersReturn extends IFilters {
	setIngredients: (id: string) => void
	setSize: (id: string) => void
	setDough: (id: string) => void
	setPrices: (name: keyof IPriceRangeProps, value: number) => void
}

export const useFilters = (): IFiltersReturn => {
	const searchParams = useSearchParams() as unknown as Map<keyof IQueryFilters, string>

	//сет ингредиентов
	const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
		new Set<string>(searchParams.get('pizzaIngredients')?.split(','))
	)

	// сет размера пиццы
	const [selectedSize, { toggle: toggleSizePizza }] = useSet(
		new Set<string>(searchParams.get('pizzaSizes') ? searchParams.get('pizzaSizes')?.split(',') : [])
	)

	// сет теста пиццы (Толстое / Тонкое) pizzaTypes
	const [selectedDough, { toggle: toggleTypeDough }] = useSet(
		new Set<string>(searchParams.get('pizzaDough') ? searchParams.get('pizzaDough')?.split(',') : [])
	)

	// стейт для сохранения состояния при перезагрузке страницы с предыдущего значения в price из queryParams
	const [prices, setPrices] = useState<IPriceRangeProps>({
		priceFrom: Number(searchParams.get('priceFrom')) || undefined,
		priceTo: Number(searchParams.get('priceTo')) || undefined
	})

	const updatePrice = (name: keyof IPriceRangeProps, value: number) => {
		setPrices(prev => ({ ...prev, [name]: value }))
	}

	return {
		selectedIngredients,
		selectedSize,
		selectedDough,
		prices,
		setIngredients: toggleIngredients,
		setSize: toggleSizePizza,
		setDough: toggleTypeDough,
		setPrices: updatePrice
	}
}
