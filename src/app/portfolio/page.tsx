'use client';
import { FC, useState } from 'react';
import ProjectCard from './project.card';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '@/components/Button';
import projects from '@/projects';
import { Tag } from '@/projects/tag';

const Portfolio: FC = () => {
	const [tag, setTag] = useState<string | null>(null);

	return (
		<div className="p-8 pt-4 lg:p-32 lg:pt-4">
			<h1 className="mb-2">Selected Works</h1>
			<p className="mb-2">Tags</p>
			<div className="flex flex-wrap gap-2 mb-12">
				{[...new Set(projects.flatMap((p) => p.tags))].sort().map((t) => (
					<Button
						pop
						onClick={() => setTag(tag === t ? null : t)}
						variant={tag === t ? 'solid' : 'outline'}
						size="sm"
						key={`tag-${t}`}
					>
						{t}
					</Button>
				))}
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
				<AnimatePresence>
					{projects
						.filter((p) => {
							if (!tag) return true;
							return p.tags.includes(tag as Tag);
						})
						.map((project) => (
							<motion.div
								className="pb-12"
								whileInView={{ opacity: 1, scale: 1 }}
								initial={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.3 }}
								key={`container-${project.id}`}
							>
								<ProjectCard key={project.id} project={project} />
							</motion.div>
						))}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Portfolio;
