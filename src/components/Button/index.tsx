import React, { FC, ReactElement } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import cn from 'classnames';

export const Button: FC<ButtonProps> = (props: ButtonProps): ReactElement => {
	const {
		appearance,
		children,
		className,
		...anotherProps
	} = props;

	return (
		<button className={cn(styles.button, {
			[styles.linear]: appearance === 'linear',
			[styles.linearGradient]: appearance === 'linear-gradient',
		}, className)} {...anotherProps}>
			{appearance === 'linear' && <AiOutlinePlusSquare fontSize={20} />}
			{children}
		</button>
	);
};