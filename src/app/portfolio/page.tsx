import { FC } from 'react';
import ProjectCard, { ProjectCardProps } from './project.card';

const projects: ProjectCardProps[] = [
	{
		title: 'Islamic Geometric Design',
		path: 'islamic-geometric-design',
		image: 'islamic-geometric-design.jpg',
	},
	{
		title: 'US Energy Map',
		path: 'energy',
		image: 'energy.jpg',
	},
	{
		title: 'Mechanical Design Automation',
		path: 'mechanical-design-automation',
		image: 'mechanical-design-automation.jpg',
	},
	{
		title: 'G Chair',
		path: 'g-chair',
		image: 'g-chair.jpg',
	},
	{
		title: 'Taxonomy',
		path: 'taxonomy',
		image: 'taxonomy.jpg',
	},
];

const Portfolio: FC = () => {
	return (
		<div className="bg-neutral-100 pt-12">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{projects.map((project) => (
					<ProjectCard key={project.path} {...project} />
				))}
			</div>
		</div>
	);
};

export default Portfolio;
