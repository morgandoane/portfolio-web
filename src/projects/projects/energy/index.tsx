import { Project } from '@/projects/types/project';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// BostonFull-01.png
// image/png	 Public to internet
// —
// BostonFull-02.png
// image/png	 Public to internet
// —
// EnergyExampleBostonNuclearSolar-02.png
// image/png	 Public to internet
// —
// bluelines.jpg
// image/jpeg	 Public to internet
// —
// consumption.jpg
// image/jpeg	 Public to internet
// —
// cover.png
// image/png	 Public to internet
// —
// distribution.jpg
// image/jpeg	 Public to internet
// —
// extraction.jpg
// image/jpeg	 Public to internet
// —
// large01.png
// image/png	 Public to internet
// —
// mobile01.png
// image/png	 Public to internet
// —
// production.jpg
// image/jpeg	 Public to internet
// —
// squarecover.png
// image/png	 Public to internet
// —

const project: Project = {
	id: 'energy',
	title: 'US Energy Map',
	caption: 'Individual Studio Project - 2023',
	tags: ['Data Visualization', 'Software Engineering'],
	image: 'energy/squarecover.png',
	banner: 'energy/cover.png',
	description:
		'The US Energy Map makes the grid visible, compelling, and understandable.',
	content: [
		// Intro
		{
			type: 'block',
			className: 'px-8 py-8 sm:px-32 sm:py-32',
			children: [
				{
					type: 'side-by-side',
					left: [
						{
							type: 'image',
							src: 'energy/bluelines.jpg',
							alt: 'US Energy Map',
							className: 'object-cover aspect-[2/3]',
							width: 500,
							height: 500,
						},
					],
					right: [
						{
							type: 'block',
							className: 'flex flex-col gap-8',
							children: [
								{
									type: 'text',
									level: 'p',
									text: 'Early into my senior semester, I learned about a number of vertical farms in Europe that had recently gone out of business. The Russo - Ukrainian Conflict and the subsequent shift from Russian supplied energy had lead to a dramatic increase in energy costs, which these vertical farms could not absorb',
								},
								{
									type: 'text',
									level: 'h3',
									text: 'When the gas was shut off, as it were, there were second order effects that rippled out in all directions.',
								},
								{
									type: 'text',
									level: 'p',
									text: 'This example illustrates that without an energy system, we have no food system. I felt compelled by the idea that something as seemingly simple as energy could so easily disrupt human life. I therefore centered my focus to researching energy, and how fragile our world becomes when it faces disruption.',
								},
							],
						},
					],
				},
			],
		},
		// Stages
		{
			type: 'block',
			className:
				'px-8 py-8 sm:px-32 sm:py-32 bg-neutral-950 flex flex-col gap-32',
			children: [
				// Header
				{
					type: 'text',
					level: 'h3',
					className: 'text-white max-w-[900px] mb-24',
					text: 'The grid is much more than power lines. It can be helpful to think of it as comprising four sub-systems: Extraction, Production, Distribution, and Consumption.',
				},
				// Extraction
				{
					type: 'block',
					className: 'flex flex-col gap-8',
					children: [
						{
							type: 'side-by-side',
							rightWidth: '1/3',
							left: [
								{
									type: 'image',
									src: 'energy/extraction.jpg',
									alt: 'Extraction',
									className: 'object-cover aspect-square',
									width: 500,
									height: 500,
								},
							],
							right: [
								{
									type: 'text',
									text: 'Extraction',
									level: 'h4',
									className: 'text-white mb-6',
								},
								{
									type: 'text',
									level: 'p',
									className: 'text-white',
									text: '80% Of domestic energy production relies on fossil fuels like oil, coal, & natural gas, extracted through wells and mines. Though renewable energy production is not reliant on the fossil fuels, it’s production significantly relies on the earth’s mineral resources- vast amounts of copper, silicon, and rare earth metals. The extraction and processing of these materials has environmental and human impacts at a global scale.',
								},
							],
						},
					],
				},
				// Production
				{
					type: 'block',
					className: 'flex flex-col gap-8',
					children: [
						{
							type: 'side-by-side',
							rightWidth: '1/3',
							left: [
								{
									type: 'image',
									src: 'energy/production.jpg',
									alt: 'Production',
									className: 'object-cover aspect-square',
									width: 500,
									height: 500,
								},
							],
							right: [
								{
									type: 'text',
									text: 'Production',
									level: 'h4',
									className: 'text-white mb-6',
								},
								{
									type: 'text',
									level: 'p',
									className: 'text-white',
									text: 'Currently, energy production largely involves converting organic matter into electricity through combustion, steam, and turbines. While effcient in converting fuel to electricity, this thermal method of energy production comes with significant environmental costs. Renewable energy sources harness natural processes to generate electricity, but are not without their own unique challenges.',
								},
							],
						},
					],
				},
				// Distribution
				{
					type: 'block',
					className: 'flex flex-col gap-8',
					children: [
						{
							type: 'side-by-side',
							rightWidth: '1/3',
							left: [
								{
									type: 'image',
									src: 'energy/distribution.jpg',
									alt: 'Distribution',
									className: 'object-cover aspect-square',
									width: 500,
									height: 500,
								},
							],
							right: [
								{
									type: 'text',
									text: 'Distribution',
									level: 'h4',
									className: 'text-white mb-6',
								},
								{
									type: 'text',
									level: 'p',
									className: 'text-white',
									text: 'The US energy distribution network is notably fragile and complex. It is not governed by a single entity; rather, it is managed by a myriad of private and public firms. Remarkably, the failure of just 10 key US power substations could trigger a catastrophic collapse of the grid throughout the country.',
								},
							],
						},
					],
				},
				// Consumption
				{
					type: 'block',
					className: 'flex flex-col gap-8',
					children: [
						{
							type: 'side-by-side',
							rightWidth: '1/3',
							left: [
								{
									type: 'image',
									src: 'energy/consumption.jpg',
									alt: 'Consumption',
									className: 'object-cover aspect-square',
									width: 500,
									height: 500,
								},
							],
							right: [
								{
									type: 'text',
									text: 'Consumption',
									level: 'h4',
									className: 'text-white mb-6',
								},
								{
									type: 'text',
									level: 'p',
									className: 'text-white',
									text: 'Energy consumption remains curiously opaque to end-users. Before we can engage in meaningful conversation about decarbonization, it has become clear to me that the complexity of these systems make it diffcult for people to comprehend the impact of our energy use. This project aims to bring clarity to these enormous and critical systems, wrangling complexity into a legible medium.',
								},
							],
						},
					],
				},
			],
		},
		// The Tool
		{
			type: 'block',
			className: 'px-8 py-8 sm:px-32 sm:py-32',
			children: [
				{
					type: 'side-by-side',
					left: [
						{
							type: 'text',
							text: 'The US Energy Map is the designed outcome of my research on the domestic energy system.',
							level: 'h3',
							className: 'mb-12',
						},
						{
							type: 'text',
							level: 'p',
							className: 'mb-4',
							text: 'Once I had obtained a better understanding of this system for myself, I set out to build tools that would help others come to share this understanding, specifically within the scope of the United States.',
						},
						{
							type: 'text',
							level: 'p',
							className: 'mb-4',
							text: 'The result is a digital tool that helps users understand the sheer scale and magnitude of the grid, while illustrating their position within it.',
						},
						{
							type: 'text',
							level: 'p',
							className: 'mb-4',
							text: 'I sourced the data that powers the application from the US Energy Information Administration. I was conscious while building this tool of the inherent subjectivity of data visualization. Designers and developers choose which data to omit, emphasize, and minimize. With that in mind, I aimed to represent this data in the most unbiased and objective manner possible.',
						},
					],
					right: [
						{
							type: 'block',
							className: 'relative h-[700px]',
							children: [
								{
									type: 'image',
									src: 'energy/large01.png',
									alt: 'US Energy Map',
									className: 'object-cover asbolute top-0 left-0 shadow-xl',
									width: 600,
									height: 600,
								},
								{
									type: 'image',
									src: 'energy/mobile01.png',
									alt: 'US Energy Map',
									className:
										'object-cover absolute bottom-0 -right-12 shadow-xl',
									width: 300,
									height: 300,
								},
							],
						},
					],
				},
			],
		},
		// Comparison
		{
			type: 'block',
			className: 'px-8 py-8 sm:px-32 sm:py-32 bg-neutral-950',
			children: [
				{
					type: 'side-by-side',
					left: [
						{
							type: 'block',
							children: [
								{
									type: 'text',
									level: 'h3',
									text: '"Show me a comparison of solar and nuclear in the Boston area."',
									className: 'text-white mb-12',
								},
								{
									type: 'text',
									level: 'p',
									className: 'text-white mb-12',
									text: 'The tool offers insight into the energy mix of a given area. The user can search for the location they are interested in, then isolate particular energy production methods. The vertical extrusions in the map represent power plants, with their height representing their annual capacity in megawatts. At this scale, we start to see that the area in which we live is powered by one fragment of a larger system. Within that particular fragment, we can visualize and understand the energy mix that supports our cities, neighborhoods, and homes.',
								},
							],
						},
					],
					right: [
						{
							type: 'block',
							className: 'relative h-[700px]',
							children: [
								{
									type: 'image',
									src: 'energy/EnergyExampleBostonNuclearSolar-01.png',
									alt: 'US Energy Map',
									className: 'object-cover absolute top-0 -right-12 shadow-xl',
									width: 300,
									height: 300,
								},
								{
									type: 'image',
									src: 'energy/EnergyExampleBostonNuclearSolar-02.png',
									alt: 'US Energy Map',
									className:
										'object-cover asbolute bottom-0 left-0 shadow-xl pt-72',
									width: 600,
									height: 600,
								},
							],
						},
					],
				},
			],
		},
		// Explore
		{
			type: 'block',
			className: 'px-8 py-8 sm:px-32 sm:py-32 flex items-center justify-center',
			children: [
				{
					type: 'custom',
					content: (
						<Link
							href="https://energy.morgandoane.com/"
							target="_blank"
							className="flex items-center gap-2 rounded-full p-3 px-6 bg-neutral-900 hover:bg-neutral-950 text-white cursor-pointer"
						>
							Explore the map
							<ArrowRightIcon className="h-4 w-4" />
						</Link>
					),
				},
			],
		},
	],
};

export default project;
