import { Container, Filters, Header, ProductsGroupList, Title, TopBar } from '@/components/shared'
import { productsMock } from '../../mocks/products-mock'

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
							<ProductsGroupList title='Пиццы' products={productsMock} categoryId={1} />
							<ProductsGroupList title='Комбо' products={productsMock} categoryId={2} />
							<ProductsGroupList title='Закуски' products={productsMock} categoryId={3} />
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
