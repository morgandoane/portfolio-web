import { Project } from '@/projects/types/project';
import ConveyorSystems from './component';

const project: Project = {
	id: 'conveyors',
	title: 'Modular Conveyor Systems',
	caption: 'Independent Project – 2023',
	tags: [
		'Fabrication',
		'Computational Design',
		'Mechanical Design',
		'Software Engineering',
		'Rendering',
	],
	image: 'mda/TurnParameters.png',
	banner: 'mda/Conveyors-27.jpg',
	bannerVh: 90,
	description:
		'This project explores the design and fabrication of modular conveyor systems, emphasizing flexibility, manufacturability, and automated customization through software.',
	component: ConveyorSystems,
};

export default project;
