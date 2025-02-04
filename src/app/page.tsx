import Button from '@/components/Button';
import Tag from './tag';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { buttonStyles } from '@/components/Button/props';

export default function Home() {
	return (
		<div className="h-[80vh] bg-neutral-200 p-6 pt-20 flex items-center justify-center rounded-br-4xl rounded-bl-4xl">
			<div className="max-w-[1200px]">
				<Image
					src="/images/profile.jpg"
					style={{ height: '120px', width: '120px' }}
					height={120}
					width={120}
					alt="Morgan Doane"
					className="rounded-full object-cover"
				/>
				<p className="text-3xl sm:text-4xl md:text-5xl mb-3 whitespace-pre-line leading-normal text-neutral-800">
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
					<Link
						href="/portfolio"
						className={buttonStyles({
							variant: 'solid',
							color: 'neutral',
							size: 'lg',
							pop: true,
						})}
					>
						Portfolio
						<ArrowRightIcon className="w-6 h-6" />
					</Link>
					<Link
						href="/contact"
						className={buttonStyles({
							variant: 'outline',
							color: 'neutral',
							size: 'lg',
							pop: true,
						})}
					>
						Portfolio
						<ArrowRightIcon className="w-6 h-6" />
					</Link>
				</div>
			</div>
		</div>
	);
}
