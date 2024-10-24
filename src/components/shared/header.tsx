import React from 'react'
import { cn } from '@/lib/utils'
import { Container, SearchInput } from '../shared'
import Image from 'next/image'
import { Button } from '../ui'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'

interface IHeaderProps {
	className?: string
}

export const Header: React.FC<IHeaderProps> = ({ className }) => {
	return (
		<header className={cn('border border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				<Link href='/'>
					<div className='logo-wrapper flex items-center gap-4'>
						<Image src='/logo.png' alt='logo' width={35} height={35} />
						<div className='text-wrapper'>
							<h1 className='text-2xl uppercase font -black'>Next Pizza</h1>
							<h2 className='text-sm text-gray-400 leading-3'>вкусней уже некуда</h2>
						</div>
					</div>
				</Link>

				<div className='mx-10 flex-1'>
					<SearchInput />
				</div>
				<div className='buttonsHeaderWrapepr flex items-center gap-3'>
					<Button variant='outline' className='flex items-center gap-2'>
						<User size={16} />
						Войти
					</Button>

					<div>
						<Button className='group relative'>
							<b>520 ₽</b>
							<span className='bg-white/30 mx-3 h-full w-[1px]' />
							<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
								<ShoppingCart size={16} />
								<b>3</b>
							</div>
							<ArrowRight
								size={20}
								className=' absolute right-5 transition duration-300 
							-translate-x-2
							 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
							/>
						</Button>
					</div>
				</div>
			</Container>
		</header>
	)
}
