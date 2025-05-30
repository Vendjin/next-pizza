import React from 'react'
import { cn } from '@/shared/lib/utils'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'

interface IIngredientItemProps {
	className?: string
	name: string
	imageUrl: string
	price: number
	active?: boolean
	onClick?: VoidFunction
}

export const IngredientItem: React.FC<IIngredientItemProps> = ({
	className,
	active,
	onClick,
	imageUrl,
	name,
	price
}) => {
	return (
		<div
			className={cn(
				'flex items-center flex-col p-1 rounded-md text-center relative cursor-pointer shadow-md bg-white',
				{ 'border border-primary': active },
				className
			)}
			onClick={onClick}
		>
			{active && <CircleCheck className='absolute top-2 right-2 text-primary' />}
			<Image src={imageUrl} alt={name} width={110} height={110} />
			<span className='text-xs mb-1'>{name} </span>
			<span className='font-bold'>{price} ₽</span>
		</div>
	)
}
