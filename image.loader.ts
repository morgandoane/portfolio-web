'use client';

const googleCloudImageLoader = ({
	src,
	width,
	quality,
}: {
	src: string;
	width: number;
	quality?: number;
}) => {
	return `https://storage.googleapis.com/doane-portfolio-content/${src}`;
};

export default googleCloudImageLoader;
