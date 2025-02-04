import { useState, useLayoutEffect, useCallback } from 'react';

interface Size {
	width: number;
	height: number;
}

export function useSize(ref: React.RefObject<HTMLElement | null>): Size {
	const [size, setSize] = useState<Size>({ width: 0, height: 0 });

	const updateSize = useCallback(() => {
		if (ref.current) {
			const { width, height } = ref.current.getBoundingClientRect();
			setSize({ width, height });
		}
	}, [ref]);

	useLayoutEffect(() => {
		updateSize(); // Update size immediately after the component is rendered

		if (ref.current) {
			const resizeObserver = new ResizeObserver(() => updateSize());

			resizeObserver.observe(ref.current);

			// Cleanup on unmount
			return () => resizeObserver.disconnect();
		}
	}, [ref, updateSize]);

	return size;
}
