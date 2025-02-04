'use client';
import { FC } from 'react';
import ProjectCard, { ProjectCardProps } from './project.card';
import { AnimatePresence, motion } from 'framer-motion';

const projects: ProjectCardProps[] = [
	{
		title: 'US Energy Map',
		path: 'energy',
		image: 'energy/cover.png',
		description: 'Demistifying US Energy Production',
	},
	{
		title: 'Islamic Geometric Design',
		path: 'islamic-geometric-design',
		image: 'igd/igd%20(2).jpg',
		description: 'A study of Islamic Geometric Design',
	},
	{
		title: 'Mechanical Design Automation',
		path: 'mechanical-design-automation',
		image: 'mda/RadialPreview.png',
		description: 'Automating the design of mechanical systems',
	},
	{
		title: 'G Chair',
		path: 'g-chair',
		image: 'gchair/GChair-04.jpg',
		description: 'A chair designed & built for Grace.',
	},
	{
		title: 'Coffee Cup Taxonomy',
		path: 'taxonomy',
		image: 'taxonomy/cover.jpg',
		description: 'A study of every coffee cup in the Salt Lake Valley',
	},
	{
		title: 'Telegraph',
		path: 'telegraph',
		image: 'telegraph/telegraph.png',
		description: 'A meterial study in sensory modifcation',
	},
	{
		title: 'BC Lounge Chair',
		path: 'bc-lounge-chair',
		image: 'bc/VC07.1.png',
		description: 'A lounge chair designed for the coast of British Columbia',
	},
];

const Portfolio: FC = () => {
	return (
		<div className="p-12 pt-20">
			<h1 className="mb-8">Selected Works</h1>
			<div className="grid grid-cols-1 gap-12 md:grid-cols-2">
				<AnimatePresence>
					{projects.map((project) => (
						<motion.div
							whileInView={{ opacity: 1, scale: 1 }}
							initial={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.3 }}
							key={`container-${project.path}`}
						>
							<ProjectCard key={project.path} {...project} />
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Portfolio;
