'use client'

import React from 'react'
import { CheckboxFiltersGroup, RangeSlider, Title } from '@/components/shared'
import { Input } from '@/components/ui'
import { useFilters, useIngredients, useQueryFilters } from '@/hooks'

interface IFiltersProps {
	className?: string
}

export const Filters: React.FC<IFiltersProps> = ({ className }) => {
	const filters = useFilters()
	useQueryFilters(filters)

	const { ingredients: ingredientsData, loading } = useIngredients()

	const ingredients = ingredientsData.map(item => ({ value: String(item.id), text: item.name }))

	const updatePrices = (prices: number[]) => {
		filters.setPrices('priceFrom', prices[0])
		filters.setPrices('priceTo', prices[1])
	}

	return (
		<div className={className}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			<CheckboxFiltersGroup
				className='mb-5'
				name='typeDough'
				title='Тип теста: '
				items={[
					{ text: 'Тонкое', value: '1' },
					{ text: 'Толстое', value: '2' }
				]}
				onClickCheckbox={filters.setDough}
				selectedIds={filters.selectedDough}
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
				onClickCheckbox={filters.setSize}
				selectedIds={filters.selectedSize}
			/>

			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bolt mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						value={String(filters.prices.priceFrom)}
						onChange={event => filters.setPrices('priceFrom', Number(event.target.value))}
					/>
					<Input
						type='number'
						placeholder='1000'
						min={100}
						max={1000}
						value={String(filters.prices.priceTo)}
						onChange={event => filters.setPrices('priceTo', Number(event.target.value))}
					/>
				</div>
				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
					onValueChange={updatePrices}
				/>
			</div>

			<CheckboxFiltersGroup
				className='mt-5'
				name='ingredients'
				title='Ингредиенты: '
				limit={6}
				items={ingredients}
				defaultItems={ingredients.slice(0, 6)}
				loading={loading}
				onClickCheckbox={filters.setIngredients}
				selectedIds={filters.selectedIngredients}
			/>
		</div>
	)
}
