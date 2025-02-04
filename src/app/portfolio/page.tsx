import { FC } from 'react';
import ProjectCard, { ProjectCardProps } from './project.card';

const projects: ProjectCardProps[] = [
	{
		title: 'US Energy Map',
		path: 'energy',
		image: 'energy/cover.png',
	},
	{
		title: 'Islamic Geometric Design',
		path: 'islamic-geometric-design',
		image: 'igd/igd%20(2).jpg',
	},
	{
		title: 'Mechanical Design Automation',
		path: 'mechanical-design-automation',
		image: 'mda/RadialPreview.png',
	},
	{
		title: 'G Chair',
		path: 'g-chair',
		image: 'gchair/GChair-04.jpg',
	},
	{
		title: 'Taxonomy',
		path: 'taxonomy',
		image: 'taxonomy/cover.jpg',
	},
	{
		title: 'Telegraph',
		path: 'telegraph',
		image: 'telegraph/telegraph.png',
	},
];

const Portfolio: FC = () => {
	return (
		<div className="p-12 pt-20">
			<h2 className="mb-8">Selected Works</h2>
			<div className="grid grid-cols-1 gap-12 md:grid-cols-2">
				{projects.map((project) => (
					<ProjectCard key={project.path} {...project} />
				))}
			</div>
		</div>
	);
};

export default Portfolio;
