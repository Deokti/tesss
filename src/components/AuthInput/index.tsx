import React, { ChangeEvent, FC, ReactElement, SyntheticEvent, useState } from 'react';
import styles from './AuthInput.module.scss';
import { AuthInputProps } from './AuthInput.props';
import cn from 'classnames';

export const AuthInput: FC<AuthInputProps> = (props: AuthInputProps): ReactElement => {
	const [isEmpty, setIsEmpty] = useState<boolean>(false);
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

	const {
		appearance,
		label,
		...anotherProps
	} = props;

	const onInput = (event: ChangeEvent<HTMLInputElement>) => {
		setIsEmpty(!!event.currentTarget.value);
	};

	const onChangePasswordVisible = (event: SyntheticEvent) => {
		event.preventDefault();
		setIsPasswordVisible(!isPasswordVisible);
	};

	const isPassword = isPasswordVisible ? 'text' : 'password';
	const isType = appearance === 'email' ? 'email' : isPassword;

	return (
		<label className={cn(styles.wrapper, 'd-block mt-30')}>
			<input
				type={isType}
				className={styles.input}
				onInput={onInput}
				{...anotherProps}
			/>
			<span className={cn(styles.span, 'transition', {
				[styles.isActive]: isEmpty
			})}>
				{label}
			</span>

			{appearance === 'password' && (
				<span
					title={isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'}
					className={cn(styles.eye, {
						[styles.passwordVisible]: isPasswordVisible
					})}
					onClick={onChangePasswordVisible} />
			)}
		</label>
	);
};