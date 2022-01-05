import React, { FC, ReactElement } from "react";
import { AuthInput } from "../components/AuthInput";
import { AuthWrapper } from "../components/AuthWrapper";
import { Button } from "../components/Button";
import { useAppDispatch } from "../hooks/redux";
import { useValidate } from "../hooks/useValidate";
import { authRegister } from "../store/reducers/auth";

export const Register: FC = (): ReactElement => {
	const dispatch = useAppDispatch();
	const formik = useValidate({ onSubmit });

	async function onSubmit(): Promise<void> {
		const { email, password } = formik.values;
		dispatch(authRegister({ email, password }));
	}

	return (
		<AuthWrapper title="Регистрация" linkTitle="Войти" to="/login">
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
					Зарегистрироваться
				</Button>
			</form>
		</AuthWrapper>
	);
};
