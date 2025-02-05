import projects from '@/projects';
import { FC } from 'react';
import { redirect } from 'next/navigation';
import Image from 'next/image';

const ProjectPage: FC<{
	params: Promise<{ id: string }>;
}> = async ({ params }) => {
	const id = (await params).id;
	const project = projects.find((project) => project.id === id);
	if (!project) redirect('/portfolio');

	return (
		<div>
			{project.banner && (
				<div className={`relative h-[${project.bannerVh ?? 80}vh]`}>
					<Image
						src={project.banner}
						fill
						alt={`Cover - ${project.title}`}
						className="w-screen object-cover"
					/>
				</div>
			)}
			<div className="flex flex-col items-center justify-center p-24">
				<p>{project.caption}</p>
				<h1>{project.title}</h1>
				<h5>{project.description}</h5>
			</div>
		</div>
	);
};

export default ProjectPage;
