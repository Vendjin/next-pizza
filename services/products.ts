import { axiosInstance } from './axios'
import { Product } from '@prisma/client'
import { ApiRoutes } from './apiRoutes'

export const search = async (q: string) => {
	return (await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, { params: { q } })).data
}
