import React from 'react'
import { prisma } from '../../../../../prisma/prisma-client'
import { ChooseProductModal } from '@/components/shared'
import { notFound } from 'next/navigation'

interface IProductModalPageProps {
	params: { id: string }
}

const ProductModalPage: React.FC<IProductModalPageProps> = async ({ params: { id } }) => {
	const product = await prisma.product.findFirst({
		where: {
			id: Number(id)
		},
		include: {
			ingredients: true,
			productVariation: true
		}
	})
	if (!product) {
		return notFound()
	}

	return <ChooseProductModal product={product} />
}

export default ProductModalPage
