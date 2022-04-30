import React, { FC, ReactElement } from "react";
import { AuthInput } from "../components/AuthInput";
import { AuthWrapper } from "../components/AuthWrapper";
import { Button } from "../components/Button";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { authLogin } from "../store/reducers/auth";
import { useValidate } from "../hooks/useValidate";

export const Login: FC = (): ReactElement => {
	const error = useAppSelector((store) => store.auth.error);
	const dispatch = useAppDispatch();
	const formik = useValidate({ onSubmit });

	async function onSubmit(): Promise<void> {
		const { email, password } = formik.values;
		dispatch(authLogin({ email, password }));
	}

	return (
		<AuthWrapper title="Войти" linkTitle="Зарегистрироваться" to="/register" errorMessage={error}>
			<form onSubmit={formik.handleSubmit}>
				<AuthInput
					appearance="email"
					label="Email"
					name="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.errors.email}
				/>
				<AuthInput
					appearance="password"
					label="Password"
					name="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.errors.password}
				/>

				<Button appearance="linear-gradient" className="mt-20" type="submit">
					Войти
				</Button>
			</form>
		</AuthWrapper>
	);
};
