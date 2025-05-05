import { Project } from '@/projects/types/project';
import Energy from './component';

const project: Project = {
	id: 'energy',
	title: 'US Energy Map',
	caption: 'Individual Studio Project - 2023',
	tags: ['Data Visualization', 'Software Engineering'],
	image: 'energy/squarecover.png',
	banner: 'energy/cover.png',
	description:
		'The US Energy Map makes the grid visible, compelling, and understandable.',
	component: Energy,
};

export default project;
