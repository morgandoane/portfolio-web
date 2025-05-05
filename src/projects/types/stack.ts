import { Content } from './content';

export interface Stack {
	type: 'stack';
	/**
	 * On mobile devices, should the left or right content be displayed on top?
	 */
	top: 'left' | 'right';
	left: Content[];
	right: Content[];
	className?: string;
	leftClassName?: string;
	rightClassName?: string;
}
