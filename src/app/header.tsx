'use client';
import Link from 'next/link';
import { FC } from 'react';

import { usePathname } from 'next/navigation';

const links: { href: string; text: string }[] = [
	{ href: '/portfolio', text: 'Portfolio' },
	{ href: '/cv', text: 'CV' },
	{ href: '/contact', text: 'Contact' },
];

const Header: FC = () => {
	const pathname = usePathname();
	return (
		<div className="px-12 py-4 fixed top-0 left-0 right-0 bg-stone-200 z-10 flex justify-between items-center">
			<Link
				href="/"
				className="text-xl cursor-pointer outline-none active:text-neutral-700"
			>
				Morgan Doane
			</Link>
			<div className="flex items-center gap-6">
				{links.map(({ href, text }) => (
					<Link
						key={href}
						href={href}
						className={`text-lg cursor-pointer outline-none ${
							pathname === href
								? 'text-stone-800 active:text-neutral-800'
								: 'text-stone-600'
						}`}
					>
						{text}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Header;
