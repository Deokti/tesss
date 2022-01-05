import React, { ChangeEvent, FC, ReactElement, SyntheticEvent, useState } from "react";
import styles from "./AuthInput.module.scss";
import { AuthInputProps } from "./AuthInput.props";
import cn from "classnames";

export const AuthInput: FC<AuthInputProps> = (props: AuthInputProps): ReactElement => {
	const [isEmpty, setIsEmpty] = useState<boolean>(false);
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

	const { appearance, label, className, error, ...anotherProps } = props;

	const onInput = (event: ChangeEvent<HTMLInputElement>): void => {
		setIsEmpty(!!event.currentTarget.value);
	};

	const onChangePasswordVisible = (event: SyntheticEvent): void => {
		event.preventDefault();
		setIsPasswordVisible(!isPasswordVisible);
	};

	const isPassword = isPasswordVisible ? "text" : "password";
	const isEmail = appearance === "email" ? "email" : isPassword;
	const isType = appearance === "text" ? "text" : isEmail;

	return (
		<label
			className={cn(
				styles.wrapper,
				"d-block mt-30",
				{
					[styles.error]: error && error.length > 0,
				},
				className,
			)}
		>
			<input
				type={isType}
				className={cn(styles.input, {
					[styles.text]: appearance === "text",
				})}
				onInput={onInput}
				{...anotherProps}
			/>
			<span
				className={cn(styles.span, "transition", {
					[styles.isActive]: isEmpty,
				})}
			>
				{label}
			</span>

			{appearance === "password" && (
				<span
					title={isPasswordVisible ? "Скрыть пароль" : "Показать пароль"}
					className={cn(styles.eye, {
						[styles.passwordVisible]: isPasswordVisible,
					})}
					onClick={onChangePasswordVisible}
				/>
			)}

			{error && error.length > 0 && <span className={styles.errorMessage}>{error}</span>}
		</label>
	);
};
