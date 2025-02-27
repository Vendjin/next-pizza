'use client'

import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'
import { ProductCard, Title } from './index'
import { cn } from '../../shared/lib/utils'
import { useCategoryStore } from '../../shared/store/category'

interface IProductsGroupListProps {
	className?: string
	title: string
	products: any[]
	listClassName?: string
	categoryId: number
}

export const ProductsGroupList: React.FC<IProductsGroupListProps> = ({
	className,
	title,
	listClassName,
	products,
	categoryId
}) => {
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
	const intersectionRef = useRef(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 1
		// threshold: 0.4
	})

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [categoryId, intersection, setActiveCategoryId])

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size='lg' className='font-extrabold mb-5' />
			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{products.map(product => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						price={product.productVariation[0].price}
						imageUrl={product.imageUrl}
					/>
				))}
			</div>
		</div>
	)
}
