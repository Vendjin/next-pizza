import React from 'react'
import { cn } from '@/shared/lib/utils'
import { Title } from './title'
import { Button } from '../ui'
import Image from 'next/image'

interface IChoosePizzaFormProps {
	className?: string
	imageUrl: string
	name: string
	ingredients?: any[]
	productVariation?: any[]
	onClickAdd?: VoidFunction
}

export const ChooseProductForm: React.FC<IChoosePizzaFormProps> = ({ className, name, imageUrl, onClickAdd }) => {
	const textDetails = '30 cм, традиционное тесто 30, 590г'
	const totalPrice = 350

	return (
		<div className={cn('flex flex-1', className)}>
			<div className='flex items-center justify-center flex-1 relative w-full'>
				<Image
					alt={name}
					src={imageUrl}
					width={350}
					height={350}
					className='relative left-2 top-2 transition-all z-10 duration-300'
				/>
			</div>

			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />

				<p className='text-gray-400'>{textDetails}</p>

				<Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
					Добавить в корзину за {totalPrice} ₽
				</Button>
			</div>
		</div>
	)
}
