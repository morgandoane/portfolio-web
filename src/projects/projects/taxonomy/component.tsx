import PhotoGrid from '@/components/PhotoGrid';
import { FC } from 'react';

const Taxonomy: FC = () => {
	const src = Array.from(
		{ length: 45 },
		(_, i) => `taxonomy/Taxon-${i + 1 < 10 ? `0${i + 1}` : i + 1}.jpg`
	);
	return (
		<div className="px-4 pb-16">
			<PhotoGrid cols={3} src={src} />
		</div>
	);
};

export default Taxonomy;
