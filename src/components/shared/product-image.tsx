import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface IProductImageProps {
	className?: string
	imageUrl: string
	alt: string
	size: number
}

export const ProductImage: React.FC<IProductImageProps> = ({ className, imageUrl, alt, size }) => {
	const imageSize = {
		20: { width: 300, height: 300 },
		30: { width: 400, height: 400 },
		40: { width: 500, height: 500 }
	}[size] || { width: 300, height: 300 }

	return (
		<div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
			<Image
				src={imageUrl}
				alt={alt}
				width={imageSize.width}
				height={imageSize.height}
				className={cn('relative left-2 top-2 transition-all z-10 duration-300')}
			/>

			<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]' />
			<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]' />
		</div>
	)
}
