'use client';
import localFont from 'next/font/local';
import './globals.css';
import Header from './header';
import { useEffect, useRef, useState } from 'react';

const satoshi = localFont({ src: '../../public/fonts/Satoshi-Variable.woff2' });
const satoshiItalic = localFont({
	src: '../../public/fonts/Satoshi-VariableItalic.woff2',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (scrollRef.current) {
				setScrolled(scrollRef.current.scrollTop > 0);
			}
		};

		if (scrollRef.current) {
			scrollRef.current.addEventListener('scroll', handleScroll);
		}

		return () => {
			if (scrollRef.current) {
				scrollRef.current.removeEventListener('scroll', handleScroll);
			}
		};
	}, []);

	return (
		<html
			lang="en"
			className={`${satoshi.className} ${satoshiItalic.className}`}
		>
			<body className="h-screen overflow-hidden flex flex-col bg-stone-200">
				<Header shadow={scrolled} />
				<div className="flex-1 overflow-y-auto relative" ref={scrollRef}>
					{children}
				</div>
			</body>
		</html>
	);
}
