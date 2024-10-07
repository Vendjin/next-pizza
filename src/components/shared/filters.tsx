import React from 'react'
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title } from '@/components/shared'
import { Input } from '@/components/ui'

interface IFiltersProps {
	className?: string
}

const defaultItems = [
	{
		text: 'Сырный соус',
		value: '1'
	},
	{
		text: 'Моццарелла',
		value: '2'
	},
	{
		text: 'Чеснок',
		value: '3'
	},
	{
		text: 'Солённые огурчики',
		value: '4'
	},
	{
		text: 'Красный лук',
		value: '5'
	},
	{
		text: 'Томаты',
		value: '6'
	}
]

const allItems = [
	{
		text: 'Сырный соус',
		value: '1'
	},
	{
		text: 'Моццарелла',
		value: '2'
	},
	{
		text: 'Чеснок',
		value: '3'
	},
	{
		text: 'Солённые огурчики',
		value: '4'
	},
	{
		text: 'Красный лук',
		value: '5'
	},
	{
		text: 'Томаты',
		value: '6'
	},
	{
		text: 'Сырный соус',
		value: '1'
	},
	{
		text: 'Моццарелла',
		value: '2'
	},
	{
		text: 'Чеснок',
		value: '3'
	},
	{
		text: 'Солённые огурчики',
		value: '4'
	},
	{
		text: 'Красный лук',
		value: '5'
	},
	{
		text: 'Томаты',
		value: '6'
	}
]

export const Filters: React.FC<IFiltersProps> = ({ className }) => {
	return (
		<div className={className}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Можно собирать' value='1' />
				<FilterCheckbox text='Новинки' value='2' />
			</div>

			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bolt mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input type='number' placeholder='0' min={0} max={3000} defaultValue={0} />
					<Input type='number' min={100} max={3000} defaultValue={1000} placeholder='1000' />
				</div>
				<RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
			</div>

			<CheckboxFiltersGroup
				className='mt-5'
				title='Ингредиенты: '
				limit={6}
				defaultValue={defaultItems}
				items={allItems}
			/>
		</div>
	)
}
