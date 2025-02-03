import { FC, PropsWithChildren } from 'react';
import { ButtonProps, buttonStyles, defaultButtonProps } from './props';
import { Button as BaseButton } from '@headlessui/react';
import classNames from 'classnames';

const Button: FC<PropsWithChildren<ButtonProps>> = ({
	size = defaultButtonProps.size,
	color = defaultButtonProps.color,
	variant = defaultButtonProps.variant,
	rounded = defaultButtonProps.rounded,
	startContent,
	endContent,
	className,
	children,
	...rest
}) => {
	const combinedClasses = buttonStyles({ size, color, variant, rounded });

	return (
		<BaseButton {...rest} className={classNames(combinedClasses, className)}>
			{startContent}
			{children}
			{endContent}
		</BaseButton>
	);
};

export default Button;
