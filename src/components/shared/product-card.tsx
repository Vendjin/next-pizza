import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Title } from '@/components/shared'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'
import { Plus } from 'lucide-react'

interface IProductCardProps {
	className?: string
	id: number
	name: string
	price: number
	count?: number
	imageUrl: string
}

export const ProductCard: React.FC<IProductCardProps> = ({ className, imageUrl, name, price, id }) => {
	return (
		<div className={cn('product-card-block', className)} id={id.toString()}>
			<Link href='/product/1'>
				<div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
					<Image src={imageUrl} alt={name} width={215} height={215} />
				</div>

				<Title text={name} size='sm' className='mb-1 mt-3 font-bold' />

				<p className='text-sm text-gray-400'>
					Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
				</p>

				<div className='flex justify-between items-center mt-4'>
					<span className='text-[20px]'>
						от <b>{price} ₽</b>
					</span>

					<Button variant='secondary' className='text-base font-bold'>
						<Plus size={20} className='mr-1' />
					</Button>
				</div>
			</Link>
		</div>
	)
}