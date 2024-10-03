'use client'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface ICategoriesProps {
	className?: string
}

const categories = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты']

export const Categories: React.FC<ICategoriesProps> = ({ className }) => {
	const [activeCategory, setActiveCategory] = useState(0)

	const handleChangeCategory = (index: number) => {
		setActiveCategory(index)
	}

	return (
		<div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
			{categories.map((category, index) => (
				<a
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-5',
						activeCategory === index && 'bg-white shadow-md shadow-gray-200 text-primary'
					)}
					key={index}
				>
					<button onClick={() => handleChangeCategory(index)}>{category}</button>
				</a>
			))}
		</div>
	)
}
