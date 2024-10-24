import React from 'react'
import { Header } from '@/components/shared'

interface IProductPage {
	className?: string
	params: { id: string }
}

const ProductPage: React.FC<IProductPage> = ({ params: { id } }) => {
	return (
		<>
			<Header />
			<h1>{id}</h1>
		</>
	)
}

export default ProductPage
