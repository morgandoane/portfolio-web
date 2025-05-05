import Section from '@/components/Section';
import { FC } from 'react';
import Image from 'next/image';

const Tool: FC = () => {
	return (
		<Section className="grid grid-cols-1 lg:grid-cols-7 gap-16">
			<div className="order-2 lg:order-1 lg:col-span-3 flex flex-col gap-3">
				<p className="font-semibold text-4xl mb-3">
					The US Energy Map is the designed outcome of my research on the
					domestic energy system.
				</p>
				<p>
					Once I had obtained a better understanding of this system for myself,
					I set out to build tools that would help others come to share this
					understanding, specifically within the scope of the United States.
				</p>
				<p>
					The result is a digital tool that helps users understand the sheer
					scale and magnitude of the grid, while illustrating their position
					within it.
				</p>
				<p>
					I sourced the data that powers the application from the US Energy
					Information Administration. I was conscious while building this tool
					of the inherent subjectivity of data visualization. Designers and
					developers choose which data to omit, emphasize, and minimize. With
					that in mind, I aimed to represent this data in the most unbiased and
					objective manner possible.
				</p>
			</div>
			<div className="order-1 lg:order-2 lg:col-span-4 aspect-square relative mb-24 lg:mb-0">
				<div className="aspect-square w-5/6 relative">
					<div className="absolute left-1/2 w-[1px] bg-neutral-500 h-16"></div>
					<Image
						fill
						src="energy/BostonFull-02.png"
						alt="Energy Map - Desktop View"
						className="object-scale-down"
					/>
				</div>
				<div className="absolute bottom-0 right-0 aspect-[2/3] w-1/2">
					<div className="h-full w-full relative">
						<div className="absolute left-1/2 bottom-[-96px] w-[1px] bg-neutral-500 h-16"></div>
						<Image
							fill
							src="energy/BostonFull-01.png"
							alt="Energy Map - Mobile View"
							className="object-scale-down"
						/>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Tool;
