import PhotoGrid from '@/components/PhotoGrid';
import { FC } from 'react';

const GChair: FC = () => {
	const image = (index: number) =>
		`gchair/GChair-${index < 10 ? `0${index}` : index}.jpg`;
	return (
		<div className="px-4 pb-16">
			<PhotoGrid
				cols={2}
				src={[
					image(3),
					image(4),
					image(2),
					image(5),
					image(6),
					image(8),
					'gchair/Material01.png',
					'gchair/Material04.png',
				]}
			/>
			<div className="h-32" />
			<div className="flex justify-center">
				<div className="flex-1 max-w-[1000px] relative">
					<PhotoGrid
						cols={1}
						mode="contain"
						src={[
							'gchair/GChairAxon-01.png',
							'gchair/GChairAxon-02.png',
							'gchair/GChairAxon-03.png',
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default GChair;
