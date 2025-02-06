import { Tag } from '../tag';
import { Section } from './section';

export type Collaborator =
	| string
	| {
			name: string;
			link: string;
	  };

export interface Project {
	/**
	 * The path to the image in the app directory
	 */
	id: string;

	/**
	 * The title of the project
	 */
	title: string;

	/**
	 * The caption of the project, ie "Academic - 2024"
	 */
	caption: string;

	/**
	 * The tags of the project
	 */
	tags: Tag[];

	/**
	 * The square image of the project
	 */
	image: string;

	/**
	 * The landscape banner accross the top of the project
	 */
	banner?: string;

	/**
	 * How tall the banner should be in vh, defaults to 80.
	 */
	bannerVh?: number;

	/**
	 * The description of the project
	 */
	description: string;

	/**
	 * The collaborators on the project
	 */
	collaborators?: Collaborator[];

	/**
	 * The sections to render in the project
	 */
	sections: Section[];
}
