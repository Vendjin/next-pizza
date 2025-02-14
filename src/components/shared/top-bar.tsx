import React from 'react'
import { Categories, Container, SortPopup } from '@/components/shared'
import { cn } from '@/lib/utils'
import { Category } from '@prisma/client'

interface ITopBarProps {
	categories: Category[]
	className?: string
}

export const TopBar: React.FC<ITopBarProps> = ({ categories, className }) => {
	return (
		<div className={cn('sticky top-0 py-5 shadow-lg shadow-black/5 z-10', className)}>
			<Container className='flex items-center justify-between'>
				<Categories categories={categories} />
				<SortPopup />
			</Container>
		</div>
	)
}
