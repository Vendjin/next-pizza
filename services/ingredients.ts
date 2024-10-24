import { axiosInstance } from './axios'
import { Ingredient } from '@prisma/client'
import { ApiRoutes } from './apiRoutes'

export const getAll = async () => {
	return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data
}
