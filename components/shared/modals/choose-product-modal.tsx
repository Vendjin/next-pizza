'use client'

import React from 'react'
import { Dialog } from '../../ui'
import { DialogContent } from '../../ui/dialog'
import { cn } from '@/shared/lib/utils'
import { useRouter } from 'next/navigation'
import { ChooseProductForm } from '../index'
import { IProductWithVariations } from '@/@types/prisma'
import { ChoosePizzaForm } from '../choose-pizza-form'

interface IChooseProductModalProps {
	product: IProductWithVariations
	className?: string
}

export const ChooseProductModal: React.FC<IChooseProductModalProps> = ({ className, product }) => {
	const router = useRouter()

	const isPizzaForm = Boolean(product.productVariation[0].pizzaType)

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}
			>
				{isPizzaForm ? (
					<ChoosePizzaForm
						imageUrl={product.imageUrl}
						name={product.name}
						productVariation={product.productVariation}
						ingredients={product.ingredients}
					/>
				) : (
					<ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
				)}
			</DialogContent>
		</Dialog>
	)
}
