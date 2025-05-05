import Section from '@/components/Section';
import { FC } from 'react';
import Image from 'next/image';

const Prompt: FC = () => {
	return (
		<Section dark className="grid grid-cols-1 lg:grid-cols-7 gap-16">
			<div className="order-2 lg:order-1 lg:col-span-3 flex flex-col gap-3 relative">
				<div className="absolute text-[500px] top-[-260px] -left-10 text-white/10">
					{'"'}
				</div>
				<p className="font-semibold text-4xl mb-3 text-white">
					Show me a comparison of solar and nuclear in the Boston area.
				</p>
				<p className="text-white">
					The tool offers insight into the energy mix of a given area. The user
					can search for the location they are interested in, then isolate
					particular energy production methods. The vertical extrusions in the
					map represent power plants, with their height representing their
					annual capacity in megawatts. At this scale, we start to see that the
					area in which we live is powered by one fragment of a larger system.
					Within that particular fragment, we can visualize and understand the
					energy mix that supports our cities, neighborhoods, and homes.
				</p>
			</div>
			<div className="order-1 lg:order-2 lg:col-span-4 aspect-square relative mb-24 lg:mb-0">
				<div className="aspect-square w-5/6 relative">
					<div className="absolute bottom-0 left-1/2 w-[1px] bg-neutral-800 h-16"></div>
					<Image
						fill
						src="energy/EnergyExampleBostonNuclearSolar-02.png"
						alt="Energy Map - Desktop View"
						className="object-scale-down"
					/>
				</div>
				<div className="absolute top-0 right-0 aspect-[2/3] w-1/2">
					<div className="h-full w-full relative">
						<div className="absolute left-1/2 top-[-96px] w-[1px] bg-neutral-800 h-16"></div>
						<Image
							fill
							src="energy/EnergyExampleBostonNuclearSolar-01.png"
							alt="Energy Map - Mobile View"
							className="object-scale-down"
						/>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Prompt;
