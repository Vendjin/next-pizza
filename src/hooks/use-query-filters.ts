import { useEffect } from 'react'
import qs from 'qs'
import { IFilters } from '@/hooks/use-filters'
import { useRouter } from 'next/navigation'

export const useQueryFilters = (filters: IFilters) => {
	const router = useRouter()

	useEffect(() => {
		const filtersParams = {
			...filters.prices,
			pizzaDough: Array.from(filters.selectedDough),
			pizzaSizes: Array.from(filters.selectedSize),
			pizzaIngredients: Array.from(filters.selectedIngredients)
		}

		// comma - убрать из массива ингредиентов ключи, те что бы элементы шли просто перечислением через запятую
		const queryString = qs.stringify(filtersParams, { arrayFormat: 'comma', skipNulls: true })

		router.push(`?${queryString}`, {
			scroll: false // убрать подергивание при установке чекбоксов
		})
	}, [filters, router])
}
