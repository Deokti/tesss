import React, { FC, ReactElement } from 'react';
import { AuthWrapper } from '../AuthWrapper';
import { Button } from '../Button';
import styles from './Login.module.scss';

export const Login: FC = (): ReactElement => {
	return (
		<AuthWrapper title='Авторизация'>
			<form className={styles.wrapper}>

				<Button appearance='linear-gradient'>Войти</Button>
			</form>
		</AuthWrapper>
	);
};