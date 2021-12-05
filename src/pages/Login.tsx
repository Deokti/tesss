import React, { FC, ReactElement } from 'react';
import { AuthInput } from '../components/AuthInput';
import { AuthWrapper } from '../components/AuthWrapper';
import { Button } from '../components/Button';

export const Login: FC = (): ReactElement => {
	return (
		<AuthWrapper title='Авторизация' linkTitle='Зарегистрироваться' to='/register'>
			<form>
				<AuthInput appearance='email' label='Email' />
				<AuthInput appearance='password' label='Password' />

				<Button appearance='linear-gradient' className='mt-20'>Войти</Button>
			</form>
		</AuthWrapper>
	);
};