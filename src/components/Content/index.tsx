import {
	ContentImage,
	ContentText,
	ContentBlock,
	Content as ContentType,
} from '@/projects/types/content';
import { FC, JSX, ReactNode } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import SideBySide from '../SideBySide';

export interface ContentProps {
	value: ContentType;
}

const getText = ({ level, text, className }: ContentText): ReactNode => {
	const isHeading = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(level);
	if (isHeading) {
		const Tag = level as keyof JSX.IntrinsicElements;
		const headingStyles: Record<string, string> = {
			h1: 'text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900',
			h2: 'text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900',
			h3: 'text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900',
			h4: 'text-3xl font-medium tracking-normal text-neutral-900',
			h5: 'text-2xl font-medium tracking-normal text-neutral-900',
			h6: 'text-xl font-medium tracking-wide uppercase text-neutral-600',
			p: 'text-base text-lg text-neutral-800 leading-relaxed mb-6 max-w-prose',
		};

		return (
			<Tag className={classNames(headingStyles[level], className)}>{text}</Tag>
		);
	}

	// Fallback to <p> with readable width
	return (
		<p
			className={classNames(
				'text-base lg:text-lg text-neutral-800 leading-relaxed mb-6 max-w-prose',
				className
			)}
		>
			{text}
		</p>
	);
};

const getImage = (props: ContentImage): ReactNode => <Image {...props} />;

const getBlock = ({ children, className }: ContentBlock): ReactNode => (
	<div className={className}>
		{children.map((child, i) => (
			<Content key={`block-child-${i}`} value={child} />
		))}
	</div>
);

const Content: FC<ContentProps> = ({ value }) => {
	switch (value.type) {
		case 'text':
			return getText(value);
		case 'image':
			return getImage(value);
		case 'side-by-side':
			return <SideBySide value={value} />;
		case 'block':
			return getBlock(value);
		case 'custom':
			return value.content;
		default:
			console.error('Unknown content type', value);
	}
};

export default Content;
