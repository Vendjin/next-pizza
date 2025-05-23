'use client'

import React from 'react'
import { cn } from '@/shared/lib/utils'
import { Button } from '../ui'
import { PizzaImage } from './pizza-image'
import { ToggleVariants } from './toggle-variants'
import { IPizzaDough, IPizzaSize, pizzaDough } from '@/shared/constants/pizza'
import { Ingredient, ProductVariation } from '@prisma/client'
import { IngredientItem } from '@/components/shared/ingredient-item'
import { DialogTitle } from '@/components/ui/dialog'
import { getPizzaDetails } from '@/shared/lib'
import { usePizzaOptions } from '@/shared/hooks/use-pizza-options'

interface IChoosePizzaFormProps {
	className?: string
	imageUrl: string
	name: string
	ingredients: Ingredient[]
	productVariation: ProductVariation[] //productItem - item
	onClickAddCart?: VoidFunction
}

export const ChoosePizzaForm: React.FC<IChoosePizzaFormProps> = ({
	className,
	name,
	imageUrl,
	productVariation,
	ingredients,
	onClickAddCart
}) => {
	const { size, dough, availableSizes, addIngredient, selectedIngredients, setDough, setSize } =
		usePizzaOptions(productVariation)

	const { textDetails, totalPrice } = getPizzaDetails(size, dough, productVariation, ingredients, selectedIngredients)

	const handleClickAdd = () => {
		onClickAddCart?.()
		console.log({
			size,
			dough,
			ingredients: selectedIngredients
		})
	}

	return (
		<div className={cn('flex flex-1', className)}>
			<PizzaImage imageUrl={imageUrl} alt={name} size={size} />

			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<DialogTitle className='text-2xl font-extrabold mb-1'>{name}</DialogTitle>

				<p className='text-gray-400'>{textDetails}</p>

				<div className='flex flex-col gap-4 my-5'>
					<ToggleVariants
						value={String(size)}
						items={availableSizes}
						onClick={value => setSize(Number(value) as IPizzaSize)}
					/>

					<ToggleVariants
						value={String(dough)}
						items={pizzaDough}
						onClick={value => setDough(Number(value) as IPizzaDough)}
					/>
				</div>

				<div className='bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5'>
					<div className='grid grid-cols-3 gap-3'>
						{ingredients.map(ingredient => (
							<IngredientItem
								key={ingredient.id}
								imageUrl={ingredient.imageUrl}
								name={ingredient.name}
								price={ingredient.price}
								onClick={() => addIngredient(ingredient.id)}
								active={selectedIngredients.has(ingredient.id)}
							/>
						))}
					</div>
				</div>

				<Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10' onClick={handleClickAdd}>
					Добавить в корзину за {totalPrice} ₽
				</Button>
			</div>
		</div>
	)
}
