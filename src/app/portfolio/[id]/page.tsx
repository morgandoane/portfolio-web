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

	const Content = project.component;

	return (
		<div>
			{project.banner && (
				<div
					className="relative"
					style={{
						height: (project.bannerVh ?? 80) + 'vh',
					}}
				>
					<Image
						src={project.banner}
						fill
						alt={`Cover - ${project.title}`}
						className="w-screen object-cover"
					/>
				</div>
			)}
			<div className="flex flex-col items-center justify-center p-8 py-32 text-center">
				<p className="text-xl font-semibold">{project.caption}</p>
				<h1 className="text-6xl font-semibold my-8">{project.title}</h1>
				<h5 className="text-xl font-semibold">{project.description}</h5>
			</div>
			<Content />
		</div>
	);
};

export default ProjectPage;
