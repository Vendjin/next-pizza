import type { Metadata } from 'next'
import './globals.css'
import { Nunito } from 'next/font/google'
import React from 'react'

export const metadata: Metadata = {
	title: 'Next Pizza | Главная',
	description: 'Учебный проект Next.js, похожее на DoDo Pizza'
}

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900']
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${nunito.className}`}>
				<main className='min-h-screen'>{children}</main>
			</body>
		</html>
	)
}
