import { FC } from 'react';

const Header: FC = () => {
	return (
		<div className="p-4 bg-neutral-200 fixed top-2 left-2 right-2">
			<button className="text-xl cursor-pointer outline-none active:text-neutral-700">
				Morgan Doane
			</button>
		</div>
	);
};

export default Header;
