'use client'
import React from 'react'

import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui'
import { ArrowRight } from 'lucide-react'
import { CartDrawerItem } from '@/components/shared/cart-drawer-item'
import { getCartItemDetails } from '@/shared/lib'

interface ICartDrawerProps {
	className?: string
	children?: React.ReactNode
}

export const CartDrawer: React.FC<React.PropsWithChildren<ICartDrawerProps>> = ({ className, children }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className={cn('flex flex-col justify-between pb-0 bg-[#F4F1EE]', className)}>
				<SheetHeader>
					<SheetTitle>
						В корзине <span className='font-bold'>3 товара</span>
					</SheetTitle>
				</SheetHeader>

				<div className='-mx-6  mt-2 overflow-auto scrollbar flex-1 flex flex-col gap-1'>
					<CartDrawerItem
						id={0}
						imageUrl={
							'http://localhost:3000/_next/image?url=https%3A%2F%2Fmedia.dodostatic.net%2Fimage%2Fr%3A584x584%2F11EE7D61706D472F9A5D71EB94149304.webp&w=640&q=75'
						}
						details={getCartItemDetails(2, 30, [{ name: 'Chicken' }, { name: 'cheese' }])}
						name={'Fresh'}
						price={419}
						quantity={1}
					/>
					<CartDrawerItem
						id={0}
						imageUrl={
							'http://localhost:3000/_next/image?url=https%3A%2F%2Fmedia.dodostatic.net%2Fimage%2Fr%3A584x584%2F11EE7D61706D472F9A5D71EB94149304.webp&w=640&q=75'
						}
						details={getCartItemDetails(2, 30, [{ name: 'Chicken' }, { name: 'cheese' }])}
						name={'Fresh'}
						price={419}
						quantity={1}
					/>
					<CartDrawerItem
						id={0}
						imageUrl={
							'http://localhost:3000/_next/image?url=https%3A%2F%2Fmedia.dodostatic.net%2Fimage%2Fr%3A584x584%2F11EE7D61706D472F9A5D71EB94149304.webp&w=640&q=75'
						}
						details={getCartItemDetails(2, 30, [{ name: 'Chicken' }, { name: 'cheese' }])}
						name={'Fresh'}
						price={419}
						quantity={1}
					/>
				</div>

				<SheetFooter className='-mx-6 bg-white p-8'>
					<div className='w-full'>
						<div className='flex mb-4'>
							<span className='flex flex-1 text-lg text-neutral-500'>
								Итого
								<div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
							</span>

							<span>500 ₽</span>
						</div>

						<Link href='/card'>
							<Button type='submit' className='w-full h-12 text-base'>
								Оформить заказ
								<ArrowRight className='w-5 ml-2' />
							</Button>
						</Link>
					</div>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
