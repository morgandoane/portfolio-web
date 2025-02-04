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

	const getWidthFromCharCount = (charCount: number) => {
		return 110 + charCount * 16;
	};

	return (
		<motion.span className="sm:min-w-[700px] sm:border-4 sm:border-neutral-300 sm:rounded-3xl sm:ml-2">
			<motion.span
				className="inline-block sm:p-6 sm:h-10 relative"
				animate={{
					opacity: 1,
					width: getWidthFromCharCount(options[index].value.length),
				}}
				transition={{ layout: { duration: 0.5, ease: 'easeInOut' } }}
			>
				<AnimatePresence mode="wait" presenceAffectsLayout>
					{options.map((option, i) =>
						i === index ? (
							<motion.span
								key={i}
								initial={{ opacity: 0, bottom: '-100%' }}
								animate={{ opacity: index === i ? 1 : 0, bottom: '-30%' }}
								exit={{ opacity: 0, bottom: '20%' }}
								transition={{ duration: 0.35, type: 'tween' }}
								className={classNames(option.className, 'absolute')}
							>
								{option.value}
							</motion.span>
						) : null
					)}
				</AnimatePresence>
			</motion.span>
		</motion.span>
	);
};

export default Tag;
