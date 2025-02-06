import { Project } from '@/projects/types/project';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export interface ProjectCardProps {
	project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
	return (
		<motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 1 }}>
			<Link href={`/portfolio/${project.id}`} className="cursor-pointer block">
				<motion.div transition={{ duration: 0.5 }}>
					<div className="relative aspect-square">
						<Image
							src={project.image}
							alt={project.title}
							fill
							className="object-cover bg-stone-100 rounded-xl"
						/>
					</div>
					<h3 className="mt-2">{project.title}</h3>
					<p>{project.description}</p>
				</motion.div>
			</Link>
		</motion.div>
	);
};

export default ProjectCard;
