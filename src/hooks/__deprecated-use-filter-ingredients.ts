// 'use client'
//
// import { Ingredient } from '@prisma/client'
// import React from 'react'
// import { Api } from '../../services/api-client'
// import { useSet } from 'react-use'
//
// interface IFilterIngredientsReturn {
// 	ingredientsData: Ingredient[]
// 	loading: boolean
// 	selectedIdsIngredients: Set<string>
// 	toggleIngredients: (id: string) => void
// }
//
// export const useFilterIngredients = (values: string[] = []): IFilterIngredientsReturn => {
// 	const [ingredients, setIngredients] = React.useState<Ingredient[]>([])
// 	const [loading, setLoading] = React.useState(true)
// 	const [selectedIdsIngredients, { toggle: toggleIngredients }] = useSet(new Set<string>(values))
//
// 	React.useEffect(() => {
// 		async function fetchIngredients() {
// 			try {
// 				setLoading(true)
// 				const ingredients = await Api.ingredients.getAll()
// 				setIngredients(ingredients)
// 			} catch (e) {
// 				console.log(e)
// 			} finally {
// 				setLoading(false)
// 			}
// 		}
//
// 		fetchIngredients()
// 	}, [])
//
// 	return { ingredientsData: ingredients, loading, selectedIdsIngredients, toggleIngredients }
// }
