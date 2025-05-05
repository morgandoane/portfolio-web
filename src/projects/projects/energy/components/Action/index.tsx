import Section from '@/components/Section';
import Link from 'next/link';
import { FC } from 'react';

const Action: FC = () => {
	return (
		<Section className="flex items-center justify-center">
			<Link
				href="https://energy.morgandoane.com"
				target="_blank"
				className="bg-neutral-950 text-white px-8 py-4 rounded-lg shadow-md hover:bg-neutral-800 transition duration-300"
			>
				Visit the Project
			</Link>
		</Section>
	);
};

export default Action;
