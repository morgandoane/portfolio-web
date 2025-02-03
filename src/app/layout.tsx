import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './header';

const whyte = localFont({ src: './whyte.variable.woff2' });
const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: 'Morgan Doane',
	description: 'Morgan Doane',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${inter.variable} ${whyte.className}`}>
			<body className="h-screen overflow-y-auto">
				<Header />
				{children}
			</body>
		</html>
	);
}
