'use client';

import { useSize } from '@/hooks/useSize';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useRef, useState } from 'react';

export interface ProjectCardProps {
	path: string;
	title: string;
	image: string;
	description: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
	path,
	title,
	image,
	description,
}) => {
	const ref = useRef<HTMLAnchorElement>(null);
	const { width } = useSize(ref);
	const [loaded, setLoaded] = useState(false);

	return (
		<motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 1 }}>
			<Link
				ref={ref}
				href={`/portfolio/${path}`}
				className="cursor-pointer block"
			>
				<motion.div
					animate={{ opacity: loaded ? 1 : 0 }}
					transition={{ duration: 0.5 }}
				>
					<Image
						onLoad={() => {
							setLoaded(true);
						}}
						src={image}
						alt={title}
						width={width}
						height={width}
						className="aspect-square object-cover bg-stone-100 rounded-xl"
					/>
					<h3 className="mt-2">{title}</h3>
					<p>{description}</p>
				</motion.div>
			</Link>
		</motion.div>
	);
};

export default ProjectCard;
