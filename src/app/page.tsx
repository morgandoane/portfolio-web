'use client';
import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { buttonStyles } from '@/components/Button/props';
import classNames from 'classnames';
import projects from '@/projects';
import Button from '@/components/Button';
import { useRef, useState } from 'react';
import { Tag as TagType } from '@/projects/tag';
import Tag from './tag';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from './project.card';

export default function Home() {
	const [tag, setTag] = useState<TagType | null>(null);
	const scrollTo = useRef<HTMLDivElement>(null);
	return (
		<div>
			<div
				className={
					'h-[90vh] bg-neutral-200 p-6 pt-20 pb-24 flex items-center justify-center rounded-br-4xl rounded-bl-4xl'
				}
			>
				<div className="flex-1 max-w-[1300px] p-6">
					<Image
						src="profile.jpg"
						style={{ height: '120px', width: '120px' }}
						height={120}
						width={120}
						alt="Morgan Doane"
						className="rounded-full object-cover mb-4 border-4 border-white"
					/>
					<p className="text-3xl font-semibold sm:text-4xl md:text-6xl mb-3 whitespace-pre-line leading-normal text-neutral-800">
						{"I'm Morgan Doane"}, a{' '}
						<Tag
							options={[
								{ value: 'designer', className: 'text-green-500' },
								{ value: 'engineer', className: 'text-blue-500' },
								{ value: 'prototyper', className: 'text-purple-500' },
								{ value: 'human', className: 'text-pink-500' },
							]}
						/>
						{`
					and grad student at Harvard University.
					`}
					</p>
					<div className="flex gap-4 mt-8">
						<Button
							onClick={() => {
								scrollTo.current?.scrollIntoView({ behavior: 'smooth' });
							}}
							variant="solid"
							color="neutral"
							size="lg"
							pop={true}
						>
							Portfolio
							<ArrowDownIcon className="w-6 h-6" />
						</Button>
						<Link
							href="/contact"
							className={classNames(
								'not-italic',
								buttonStyles({
									variant: 'outline',
									color: 'neutral',
									size: 'lg',
									pop: true,
								})
							)}
						>
							Contact
							<ArrowRightIcon className="w-6 h-6" />
						</Link>
					</div>
				</div>
			</div>
			<div className="flex justify-center">
				<div className="flex-1 max-w-[1300px] p-6" ref={scrollTo}>
					<h2 className="mb-2">Selected Works</h2>
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
									return p.tags.includes(tag as TagType);
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
			</div>
		</div>
	);
}
