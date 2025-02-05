import { ButtonProps as BaseProps } from '@headlessui/react';
import { ReactNode } from 'react';
import { tv } from 'tailwind-variants';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonColor =
	| 'primary'
	| 'secondary'
	| 'neutral'
	| 'danger'
	| 'success';
export type ButtonVariant = 'solid' | 'outline' | 'flat';
export type ButtonRounded = true | false;
export type ButtonPop = true | false;

export const defaultButtonProps = {
	size: 'md' as ButtonSize,
	color: 'neutral' as ButtonColor,
	variant: 'solid' as ButtonVariant,
	rounded: true as ButtonRounded,
	pop: false as ButtonPop,
};

export interface ButtonProps extends Omit<BaseProps, 'className'> {
	size?: ButtonSize;
	color?: ButtonColor;
	variant?: ButtonVariant;
	rounded?: ButtonRounded;
	pop?: ButtonPop;
	startContent?: ReactNode;
	endContent?: ReactNode;
	className?: string;
}

export const buttonStyles = tv({
	base: 'flex items-center gap-2 cursor-pointer disabled:cusor-not-allowed outline-none focus:outline-none',
	variants: {
		size: {
			sm: 'px-4 py-1.5 text-sm',
			md: 'px-5 py-2.5 text-md',
			lg: 'px-8 py-4 text-lg',
		},
		color: {
			primary: '',
			secondary: '',
			neutral: '',
			danger: '',
			success: '',
		},
		variant: {
			solid: '',
			outline: '',
			flat: '',
		},
		rounded: {
			true: 'rounded-full',
			false: 'rounded-lg',
		},
		pop: {
			// Pop hover and press animations
			true: 'transition-transform transform-gpu active:scale-99 hover:scale-102',
			false: '',
		},
	},
	compoundVariants: [
		// Solid
		{
			variant: 'solid',
			color: 'primary',
			className:
				'bg-blue-500 border-2 border-blue-500 active:bg-blue-600 hover:bg-blue-600 text-white',
		},
		{
			variant: 'solid',
			color: 'secondary',
			className:
				'bg-purple-500 border-2 border-purple-500 active:bg-purple-600 hover:bg-purple-600 text-white',
		},
		{
			variant: 'solid',
			color: 'neutral',
			className:
				'bg-stone-800 border-2 border-stone-800 active:bg-stone-900 hover:bg-stone-900 text-white',
		},
		{
			variant: 'solid',
			color: 'danger',
			className:
				'bg-red-500 border-2 border-red-500 active:bg-red-600 hover:bg-red-600 text-white',
		},
		{
			variant: 'solid',
			color: 'success',
			className:
				'bg-green-500 border-2 border-green-500 active:bg-green-600 hover:bg-green-600 text-white',
		},
		// Outline

		{
			variant: 'outline',
			color: 'neutral',
			className:
				'border border-2 border-stone-800 active:bg-stone-300 hover:bg-stone-300 text-stone-800',
		},
	],
	defaultVariants: {
		...defaultButtonProps,
	},
});
