import React from 'react'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/components/ui'
import { CartDrawer } from '@/components/shared/cart-drawer'

interface ICartButtonProps {
	className?: string
}

export const CartButton: React.FC<ICartButtonProps> = ({ className }) => {
	return (
		<CartDrawer>
			<Button className={cn('group relative', className)}>
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
		</CartDrawer>
	)
}
