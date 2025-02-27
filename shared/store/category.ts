import { create } from 'zustand'

interface ICategoryState {
	activeId: number
	setActiveId: (id: number) => void
}

export const useCategoryStore = create<ICategoryState>()(set => ({
	activeId: 1,
	setActiveId: (activeId: number) => set({ activeId })
}))
