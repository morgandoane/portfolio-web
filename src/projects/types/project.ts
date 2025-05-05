import { FC } from 'react';
import { Tag } from '../tag';

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
	 * @see Collaborator
	 */
	collaborators?: Collaborator[];

	/**
	 * The component to render for the project
	 */
	component: FC;
}
