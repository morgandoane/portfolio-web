import { FC } from 'react';
import Image from 'next/image';

export interface StageProps {
	src: string;
	title: string;
	text: string;
}

const Stage: FC<StageProps> = ({ src, title, text }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
			<div className="relative aspect-square">
				<Image src={src} alt={title} fill />
			</div>
			<div>
				<p className="text-4xl mb-4 font-semibold text-white">{title}</p>
				<p className="text-white">{text}</p>
			</div>
		</div>
	);
};

export default Stage;
