import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
	return (
		<div className="px-12 py-4 fixed top-0 left-0 right-0 bg-stone-200 z-10">
			<Link
				href="/"
				className="text-xl cursor-pointer outline-none active:text-neutral-700"
			>
				Morgan Doane
			</Link>
		</div>
	);
};

export default Header;
