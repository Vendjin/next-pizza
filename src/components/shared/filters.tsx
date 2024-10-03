import React from 'react'
import { FilterCheckbox, RangeSlider, Title } from '@/components/shared'
import { Input } from '@/components/ui'

interface IFiltersProps {
	className?: string
}

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
		</div>
	)
}