export const mapPizzaSize = {
	20: 'Маленькая',
	30: 'Средняя',
	40: 'Большая'
} as const

export const mapPizzaDough = {
	1: 'Традиционная',
	2: 'Тонкая'
} as const

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({ name, value }))

export const pizzaDough = Object.entries(mapPizzaDough).map(([value, name]) => ({ name, value }))

export type IPizzaSize = keyof typeof mapPizzaSize
export type IPizzaDough = keyof typeof mapPizzaDough
