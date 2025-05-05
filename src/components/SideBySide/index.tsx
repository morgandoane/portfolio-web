import { FC } from 'react';
import { ContentSideBySide } from '@/projects/types/content';
import classNames from 'classnames';
import Content from '../Content';

export interface SideBySideProps {
	value: ContentSideBySide;
}

const SideBySide: FC<SideBySideProps> = ({ value }) => {
	const { left, right, className, leftWidth, rightWidth } = value;

	return (
		<div
			className={classNames(
				'flex flex-col sm:flex-row gap-16 sm:gap-12 items-start',
				className
			)}
		>
			<div className={classNames('w-full', `sm:w-${leftWidth || '1/2'}`)}>
				{left.map((item, i) => (
					<Content key={`left-${i}`} value={item} />
				))}
			</div>
			<div className={classNames('w-full', `sm:w-${rightWidth || '1/2'}`)}>
				{right.map((item, i) => (
					<Content key={`right-${i}`} value={item} />
				))}
			</div>
		</div>
	);
};

export default SideBySide;
