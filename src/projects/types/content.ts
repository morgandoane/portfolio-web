import { ImageProps } from 'next/image';
import { ReactNode } from 'react';

/**
 * Image content type
 */
export type ContentImage = ImageProps & {
	type: 'image';
};
/**
 * Text content type
 */
export interface ContentText {
	type: 'text';
	text: string;
	level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
	className?: string;
}

/**
 * Side by side content type
 * Renders two columns of content
 */
export interface ContentSideBySide {
	type: 'side-by-side';
	className?: string;
	left: Content[];
	right: Content[];
	wrap?: boolean;
	leftWidth?: '1/2' | '1/3' | '1/4' | '1/5' | '1/6' | '1/7' | '1/8';
	rightWidth?: '1/2' | '1/3' | '1/4' | '1/5' | '1/6' | '1/7' | '1/8';
}

/**
 * Block content type
 * Renders a block of content
 */
export interface ContentBlock {
	type: 'block';
	className?: string;
	children: Content[];
}

/**
 * Custom content type
 * Renders a custom component
 */
export interface ContentCustom {
	type: 'custom';
	content: ReactNode;
}

export type Content =
	| ContentImage
	| ContentText
	| ContentBlock
	| ContentSideBySide
	| ContentCustom;
