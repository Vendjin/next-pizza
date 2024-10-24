'use client'

import { Ingredient } from '@prisma/client'
import React from 'react'
import { Api } from '../../services/api-client'
import { useSet } from 'react-use'

interface IFilterIngredientsReturn {
	ingredients: Ingredient[]
	loading: boolean
	selectedIdsIngredients: Set<string>
	toggleIngredients: (id: string) => void
}

export const useFilterIngredients = (): IFilterIngredientsReturn => {
	const [ingredients, setIngredients] = React.useState<Ingredient[]>([])
	const [loading, setLoading] = React.useState(true)
	const [selectedIdsIngredients, { toggle: toggleIngredients }] = useSet(new Set<string>([]))

	React.useEffect(() => {
		async function fetchIngredients() {
			try {
				setLoading(true)
				const ingredients = await Api.ingredients.getAll()
				setIngredients(ingredients)
			} catch (e) {
				console.log(e)
			} finally {
				setLoading(false)
			}
		}

		fetchIngredients()
	}, [])

	return { ingredients, loading, selectedIdsIngredients, toggleIngredients }
}
