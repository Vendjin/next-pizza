import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared'
import { prisma } from '@/prisma/prisma-client'

export const dynamic = 'force-static'

export default async function Home() {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					ingredients: true,
					productVariation: true
				}
			}
		}
	})

	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>
			<TopBar categories={categories.filter(category => category.products.length > 0)} />
			<Container className='pb-14 mt-10'>
				<div className='flex gap-[60px]'>
					<div className='filtersWrap w-1/5'>
						<Filters />
					</div>

					<div className='productsListWrap flex-1'>
						<div className='flex flex-col gap-16'>
							{categories.map(
								category =>
									category.products.length > 0 && (
										<ProductsGroupList
											key={category.id}
											title={category.name}
											categoryId={category.id}
											products={category.products}
										/>
									)
							)}
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
