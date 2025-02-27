import React from 'react'
import { Container, PizzaImage, Title, ToggleVariants } from '@/components/shared'
import { prisma } from '@/prisma/prisma-client'
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
				<PizzaImage imageUrl={product.imageUrl} alt={product.name} size={40} className='' />

				<div className='w-[490px] bg-[#F6F5F4] p-7'>
					<Title text={product.name} size='md' className='font-extrabold mb-1' />

					<p className='text-gray-400'>lorem ipsum lorem ipsum</p>

					<ToggleVariants
						value='2'
						items={[
							{
								name: 'Маленькая',
								value: '1'
							},
							{
								name: 'Средняя',
								value: '2'
							},
							{
								name: 'Большая',
								value: '3'
							}
						]}
					/>
				</div>
			</div>
		</Container>
	)
}

export default ProductPage
