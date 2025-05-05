import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

export interface SectionProps {
	dark?: boolean;
	className?: string;
}

const Section: FC<PropsWithChildren<SectionProps>> = ({
	children,
	dark = false,
	className = '',
}) => {
	const classNameValue = classNames(
		'p-8 py-16 sm:p-12 md:p-16 lg:p-18 xl:p-24 2xl:p-32',
		{ 'bg-neutral-950': dark },
		className
	);
	return <div className={classNameValue}>{children}</div>;
};

export default Section;
