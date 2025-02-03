import { useScreenSize } from './useScreenSize';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const getBreakpoint = (width: number): Breakpoint => {
	if (width >= 1536) return '2xl';
	if (width >= 1280) return 'xl';
	if (width >= 1024) return 'lg';
	if (width >= 768) return 'md';
	return 'sm';
};

export const useBreakpoint = (): Breakpoint => {
	const { width } = useScreenSize();
	return getBreakpoint(width);
};
