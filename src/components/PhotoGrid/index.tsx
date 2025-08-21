import type { FC } from 'react';
import Image from 'next/image';

export interface PhotoGridProps {
	cols?: number;
	src: string[];
}

const PhotoGrid: FC<PhotoGridProps> = ({ cols, src }) => {
	const gridTemplateColumns = cols
		? `repeat(${cols}, minmax(0, 1fr))`
		: 'repeat(auto-fill, minmax(200px, 1fr))';
	return (
		<div className="grid gap-4" style={{ gridTemplateColumns }}>
			{src.map((imageSrc, index) => (
				<div key={index} className="relative w-full h-0 pb-[100%]">
					<Image
						src={imageSrc}
						alt={`Photo ${index + 1}`}
						fill
						className="object-cover"
					/>
				</div>
			))}
		</div>
	);
};

export default PhotoGrid;
