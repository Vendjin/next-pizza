import { Container, Filters, Header, ProductCard, Title, TopBar } from '@/components/shared'

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
						<div className='flex flex-col gap-16'>
							<ProductCard
								imageUrl='https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif'
								name='Бефстроганов'
								price={539}
								id={1}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
