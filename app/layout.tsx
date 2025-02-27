import './globals.css'
import { Nunito } from 'next/font/google'
import React from 'react'

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
			<head>
				<link rel='icon' href='/favicon.ico' type='image/x-icon' sizes='16x16' />
			</head>
			<body className={`${nunito.className}`}>{children}</body>
		</html>
	)
}
