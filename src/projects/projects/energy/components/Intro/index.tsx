import Section from '@/components/Section';
import Image from 'next/image';
import { FC } from 'react';

const Intro: FC = () => {
	return (
		<Section className="grid grid-cols-1 gap-12 lg:grid-cols-2 pt-0">
			<div className="relative aspect-square lg:aspect-[1/2] xl:aspect-square">
				<Image
					src="energy/bluelines.jpg"
					fill
					alt="Blue Lines"
					className="object-cover"
				/>
			</div>
			<div>
				<p>
					Early into my senior semester, I learned about a number of vertical
					farms in Europe that had recently gone out of business. The Russo -
					Ukrainian Conflict and the subsequent shift from Russian supplied
					energy had lead to a dramatic increase in energy costs, which these
					vertical farms could not absorb.
				</p>
				<p className="text-4xl font-semibold my-8">
					When the gas was shut off, as it were, there were second order effects
					that rippled out in all directions.
				</p>
				<p>
					Early into my senior semester, I learned about a number of vertical
					farms in Europe that had recently gone out of business. The Russo -
					Ukrainian Conflict and the subsequent shift from Russian supplied
					energy had lead to a dramatic increase in energy costs, which these
					vertical farms could not absorb.
				</p>
			</div>
		</Section>
	);
};

export default Intro;
