import Link from 'next/link';
import { FC } from 'react';

export interface ProjectCardProps {
	path: string;
	title: string;
	image: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ path, title, image }) => {
	return (
		<Link
			href={`/portfolio/${path}`}
			className="bg-neutral-100 p-4 rounded-lg shadow-md"
		>
			<h4>{title}</h4>
		</Link>
	);
};

export default ProjectCard;
