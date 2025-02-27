'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { cn } from '../../shared/lib/utils'
import { useClickAway, useDebounce } from 'react-use'
import Link from 'next/link'
import { Api } from '@/shared/services/api-client'
import { Product } from '@prisma/client'

interface ISearchInputProps {
	className?: string
}

export const SearchInput: React.FC<ISearchInputProps> = ({ className }) => {
	const [focused, setFocused] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')
	const [products, setProducts] = useState<Product[]>([])
	const ref = useRef(null)

	useClickAway(ref, () => setFocused(false))

	useDebounce(
		async () => {
			try {
				const response = await Api.products.search(searchQuery)
				setProducts(response)
			} catch (e) {
				console.log(e)
			}
		},
		500,
		[searchQuery]
	)

	const onClickItem = () => {
		setFocused(false)
		setSearchQuery('')
		setProducts([])
	}

	return (
		<>
			{focused && <div className='back-modal fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-30' />}

			<div className={cn('flex relative h-11 z-30', className)} ref={ref}>
				<Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' />

				<input
					type='text'
					placeholder='Найти пиццу...'
					className='rounded-2xl outline-none w-full bg-gray-50 pl-11'
					onFocus={() => setFocused(true)}
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>
				{products.length > 0 && (
					<div
						className={cn(
							'absolute w-full bg-white rounded-2xl py-2 shadow-md top-14 transition-all duration-200 opacity-0 z-30 invisible',
							focused && 'visible opacity-100 top-12'
						)}
					>
						{products.map(product => (
							<Link
								href={`/app/(root)/product/${product.id}`}
								key={product.id}
								onClick={onClickItem}
								className='px-3 py-2 hover:bg-primary/10 flex items-center gap-3'
							>
								<Image
									src={product.imageUrl}
									width={32}
									height={32}
									alt={product.name}
									style={{ width: 'auto', height: 'auto' }}
								/>
								<span>{product.name.split('')[0].toUpperCase() + product.name.slice(1)}</span>
								{/*<b>{product} ₽</b>*/}
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	)
}
