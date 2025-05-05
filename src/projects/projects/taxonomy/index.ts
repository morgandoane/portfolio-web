import { Project } from '../../types/project';
import Taxonomy from './component';

const project: Project = {
	id: 'taxonomy',
	title: 'Coffee Cup Taxonomy',
	caption: 'A data guide to... coffee cups.',
	tags: ['Data Visualization'],
	image: 'taxonomy/cover.jpg',
	description: 'A comprehensive study of every coffee cup in Cambridge, MA.',
	component: Taxonomy,
};

export default project;
