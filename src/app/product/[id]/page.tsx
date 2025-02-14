import React from 'react'
import { Container, ProductImage, Title } from '@/components/shared'
import { prisma } from '../../../../prisma/prisma-client'
import { notFound } from 'next/navigation'

interface IProductPage {
	className?: string
	params: { id: string }
}

const ProductPage: React.FC<IProductPage> = async ({ params: { id } }) => {
	const product = await prisma.product.findFirst({ where: { id: Number(id) } })

	if (!product) {
		return notFound()
	}

	return (
		<Container className='flex flex-col my-10'>
			<div className='flex flex-1'>
				<ProductImage imageUrl={product.imageUrl} alt={product.name} size={40} className='' />

				<div className='w-[490px] bg-[#FCFCFC] p-7'>
					<Title text={product.name} size='md' className='font-extrabold mb-1' />
				</div>
			</div>
		</Container>
	)
}

export default ProductPage
