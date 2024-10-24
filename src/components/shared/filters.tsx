'use client'

import React, { useEffect, useState } from 'react'
import { CheckboxFiltersGroup, RangeSlider, Title } from '@/components/shared'
import { Input } from '@/components/ui'
import { useFilterIngredients } from '@/hooks/useFilterIngredients'
import { useSet } from 'react-use'
import qs from 'qs'
import { useRouter } from 'next/navigation'

interface IFiltersProps {
	className?: string
}

interface IPriceProps {
	priceFrom?: number // необязательное, что бы в query было пустое если не изменялось
	priceTo?: number
}

export const Filters: React.FC<IFiltersProps> = ({ className }) => {
	const router = useRouter()
	const [prices, setPrices] = useState<IPriceProps>({})

	const { ingredients, loading, toggleIngredients, selectedIdsIngredients } = useFilterIngredients()

	const [selectedIdsDough, { toggle: toggleTypeDough }] = useSet(new Set<string>([]))
	const [selectedIdsSize, { toggle: toggleSizePizza }] = useSet(new Set<string>([]))

	const items = ingredients.map(item => ({ value: String(item.id), text: item.name }))

	const updatePrice = (name: keyof IPriceProps, value: number) => {
		setPrices({ ...prices, [name]: value })
	}

	useEffect(() => {
		const filters = {
			...prices,
			pizzaDoughTypes: Array.from(selectedIdsDough),
			pizzaSizes: Array.from(selectedIdsSize),
			pizzaIngredients: Array.from(selectedIdsIngredients)
		}

		const queryString = qs.stringify(filters, { arrayFormat: 'comma', skipNulls: true })

		router.push(`?${queryString}`, {
			scroll: false
		})
	}, [prices, selectedIdsDough, selectedIdsSize, selectedIdsIngredients, router])
	return (
		<div className={className}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			<CheckboxFiltersGroup
				className='mb-5'
				name='type-dough'
				title='Тип теста: '
				items={[
					{ text: 'Тонкое', value: '1' },
					{ text: 'Толстое', value: '2' }
				]}
				onClickCheckbox={toggleTypeDough}
				selectedIds={selectedIdsDough}
			/>

			<CheckboxFiltersGroup
				className='mb-5'
				name='sizes'
				title='Размеры пицц: '
				items={[
					{ text: '20 см', value: '20' },
					{ text: '30 см', value: '30' },
					{ text: '40 см', value: '40' }
				]}
				onClickCheckbox={toggleSizePizza}
				selectedIds={selectedIdsSize}
			/>

			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bolt mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						value={String(prices.priceFrom)}
						onChange={event => updatePrice('priceFrom', Number(event.target.value))}
					/>
					<Input
						type='number'
						placeholder='1000'
						min={100}
						max={1000}
						value={String(prices.priceTo)}
						onChange={event => updatePrice('priceTo', Number(event.target.value))}
					/>
				</div>
				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[prices.priceFrom || 0, prices.priceTo || 1000]}
					onValueChange={([from, to]) => setPrices({ priceFrom: from, priceTo: to })}
				/>
			</div>

			<CheckboxFiltersGroup
				className='mt-5'
				name='ingredients'
				title='Ингредиенты: '
				limit={6}
				items={items}
				defaultItems={items.slice(0, 6)}
				loading={loading}
				onClickCheckbox={toggleIngredients}
				selectedIds={selectedIdsIngredients}
			/>
		</div>
	)
}
