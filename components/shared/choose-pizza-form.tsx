import React from 'react'
import { cn } from '@/shared/lib/utils'
import { Title } from './title'
import { Button } from '../ui'
import { PizzaImage } from './pizza-image'
import { ToggleVariants } from './toggle-variants'
import { IPizzaDough, IPizzaSize, pizzaDough, pizzaSizes } from '@/shared/constants/pizza'
import { Ingredient, ProductVariation } from '@prisma/client'
import { IngredientItem } from '@/components/shared/ingredient-item'

interface IChoosePizzaFormProps {
	className?: string
	imageUrl: string
	name: string
	ingredients: Ingredient[]
	productVariation: ProductVariation[]
	onClickAdd?: VoidFunction
}

export const ChoosePizzaForm: React.FC<IChoosePizzaFormProps> = ({
	className,
	name,
	imageUrl,
	productVariation,
	ingredients,
	onClickAdd
}) => {
	const [size, setSize] = React.useState<IPizzaSize>(30)
	const [dough, setDough] = React.useState<IPizzaDough>(1)

	const textDetails = '30 cм, традиционное тесто 30, 590г'
	const totalPrice = 350

	console.log(ingredients)
	return (
		<div className={cn('flex flex-1', className)}>
			<PizzaImage imageUrl={imageUrl} alt={name} size={size} />

			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />

				<p className='text-gray-400'>{textDetails}</p>

				<div className='flex flex-col gap-4 mt-5'>
					<ToggleVariants
						value={String(size)}
						items={pizzaSizes}
						onClick={value => setSize(Number(value) as IPizzaSize)}
					/>

					<ToggleVariants
						value={String(dough)}
						items={pizzaDough}
						onClick={value => setDough(Number(value) as IPizzaDough)}
					/>
				</div>

				<div className='bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar'>
					<div className='grid grid-cols-3 gap-3'>
						{ingredients.map(ingredient => (
							<IngredientItem
								key={ingredient.id}
								imageUrl={ingredient.imageUrl}
								name={ingredient.name}
								price={ingredient.price}
								onClick={onClickAdd}
							/>
						))}
					</div>
				</div>

				<Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
					Добавить в корзину за {totalPrice} ₽
				</Button>
			</div>
		</div>
	)
}
