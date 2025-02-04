import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './header';

const satoshi = localFont({ src: '../../public/fonts/Satoshi-Variable.woff2' });
const satoshiItalic = localFont({
	src: '../../public/fonts/Satoshi-VariableItalic.woff2',
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
		<html
			lang="en"
			className={`${satoshi.className} ${satoshiItalic.className}`}
		>
			<body className="h-screen overflow-y-auto bg-stone-200">
				<Header />
				{children}
			</body>
		</html>
	);
}
