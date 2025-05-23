import React from 'react'
import { cn } from '@/shared/lib/utils'
import { CartButton, Container, SearchInput } from './index'
import Image from 'next/image'
import { Button } from '../ui'
import { User } from 'lucide-react'
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
						<CartButton />
					</div>
				</div>
			</Container>
		</header>
	)
}
