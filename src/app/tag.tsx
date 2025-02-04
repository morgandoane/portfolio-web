'use client';
import { FC, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';

export interface TagProps {
	options: { value: string; className: string }[];
}

const Tag: FC<TagProps> = ({ options }) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((index) => (index + 1) % options.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [options.length]);

	return (
		<motion.span className="relative pl-2 sm:pl-3 md:pl-4">
			<AnimatePresence mode="wait">
				<motion.span
					className={classNames('absolute', options[index].className)}
					initial={{ opacity: 0, top: 10, scale: 0.95 }}
					animate={{ opacity: 1, top: '-9%', scale: 1 }}
					exit={{ opacity: 0, top: -10, scale: 0.95 }}
					transition={{ duration: 0.25, ease: 'easeInOut' }}
					key={`tag-${index}`}
				>
					{options[index].value}
				</motion.span>
			</AnimatePresence>
		</motion.span>
	);
};

export default Tag;
