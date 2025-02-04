import { useScreenSize } from './useScreenSize';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const getBreakpoint = (width: number): Breakpoint => {
	if (width >= 1536) return '2xl';
	if (width >= 1280) return 'xl';
	if (width >= 1024) return 'lg';
	if (width >= 768) return 'md';
	return 'sm';
};

export const useBreakpoint = (): {
	breakpoint: Breakpoint;
	atLeast: (breakpoint: Breakpoint) => boolean;
	atMost: (breakpoint: Breakpoint) => boolean;
} => {
	const { width } = useScreenSize();
	const breakpoint = getBreakpoint(width);

	const atLeast = (breakpoint: Breakpoint) => {
		const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'];
		return breakpoints.indexOf(breakpoint) <= breakpoints.indexOf(breakpoint);
	};

	const atMost = (breakpoint: Breakpoint) => {
		const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'];
		return breakpoints.indexOf(breakpoint) >= breakpoints.indexOf(breakpoint);
	};

	return { breakpoint, atLeast, atMost };
};
