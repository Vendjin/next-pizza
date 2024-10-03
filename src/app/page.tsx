import { Container, Filters, Header, Title, TopBar } from '@/components/shared'

export default function Home() {
	return (
		<>
			<Header />
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>

			<TopBar />

			<Container className='pb-14 mt-10'>
				<div className='flex gap-[60px]'>
					<div className='filtersWrap w-1/5'>
						<Filters />
					</div>
					<div className='productsListWrap flex-1'>
						<div className='flex flex-col gap-16'>список товаров</div>
					</div>
				</div>
			</Container>
		</>
	)
}
