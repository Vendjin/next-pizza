import type { Metadata } from 'next'
import React, { Suspense } from 'react'
import { Header } from '@/components/shared'

export const metadata: Metadata = {
	title: 'Next Pizza | Главная',
	description: 'Учебный проект Next.js, похожее на DoDo Pizza'
}

export default function HomeLayout({
	children,
	modal
}: Readonly<{
	children: React.ReactNode
	modal: React.ReactNode
}>) {
	return (
		<Suspense fallback={<div>Загрузка...</div>}>
			<main>
				<Header />
				{children}
				{modal}
			</main>
		</Suspense>
	)
}
