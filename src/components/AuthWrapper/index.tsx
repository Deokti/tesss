import React, { FC, ReactElement } from 'react';
import styles from './AuthWrapper.module.scss';
import { AuthWrapperProps } from './AuthWrapper.props';

export const AuthWrapper: FC<AuthWrapperProps> = ({ children, title }: AuthWrapperProps): ReactElement => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>{title}</h1>

			<div className={styles.body}>
				{children}
			</div>
		</div>
	);
};