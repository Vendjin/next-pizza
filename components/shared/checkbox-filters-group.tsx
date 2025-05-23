'use client'

import React, { ChangeEvent, useState } from 'react'
import { FilterCheckbox, IFilterCheckboxProps } from './filter-checkbox'
import { Input, Skeleton } from '../ui'

type Item = IFilterCheckboxProps

interface ICheckboxFiltersGroupProps {
	className?: string
	title: string
	items: Item[]
	defaultItems?: Item[]
	limit?: number
	searchInputPlaceholder?: string
	onClickCheckbox?: (id: string) => void
	defaultValue?: string[]
	loading?: boolean
	selectedIds?: Set<string>
	name?: string
}

export const CheckboxFiltersGroup: React.FC<ICheckboxFiltersGroupProps> = ({
	className,
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder,
	loading,
	onClickCheckbox,
	selectedIds,
	name
}) => {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	if (loading) {
		return (
			<div className={className}>
				<p className='font-bolt mb-3'>{title}</p>
				{...Array(limit)
					.fill(0)
					.map((_, index) => <Skeleton key={index} className='h-6 mb-4 rounded-[8px]' />)}
				<Skeleton className='w-28 h-6 mb-4 rounded-[8px]' />
			</div>
		)
	}

	const renderListIngredients = showAll
		? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()))
		: (defaultItems || items).slice(0, limit)

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
						name={name}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={selectedIds?.has(item.value)}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
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
