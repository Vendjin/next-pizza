'use client'

import React, { ChangeEvent, useState } from 'react'
import { FilterCheckbox, IFilterCheckboxProps } from '@/components/shared/filter-checkbox'
import { Input } from '@/components/ui'

type Item = IFilterCheckboxProps

interface ICheckboxFiltersGroupProps {
	className?: string
	title: string
	items: Item[]
	defaultItems: Item[]
	limit?: number
	searchInputPlaceholder?: string
	onChange?: (values: string[]) => void
	defaultValue?: string[]
}

export const CheckboxFiltersGroup: React.FC<ICheckboxFiltersGroupProps> = ({
	className,
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder,
	onChange,
	defaultValue
}) => {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	const renderListIngredients = showAll
		? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()))
		: defaultItems.slice(0, limit)

	return (
		<div className={className}>
			<p className='font-bold mb-3'>{title}</p>

			{showAll && (
				<div className='mb-5'>
					<Input
						placeholder={searchInputPlaceholder}
						className='bg-gray-50 border-none'
						onChange={onChangeSearchInput}
					/>
				</div>
			)}

			<div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
				{renderListIngredients.map((item, index) => (
					<FilterCheckbox
						key={index}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={false}
						onCheckedChange={ids => console.log(ids)}
						// defaultValue={defaultItems}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
						{showAll ? 'Скрыть' : 'Показать все'}
					</button>
				</div>
			)}
		</div>
	)
}
