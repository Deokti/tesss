import { useFormik } from "formik";
import React, { FC, ReactElement } from "react";
import { AuthInput } from "../components/AuthInput";
import { AuthWrapper } from "../components/AuthWrapper";
import { Button } from "../components/Button";
import { IUser, UserModel } from "../models/user.module";
import * as yup from "yup";
import { AuthService } from "../auth/auth.service";

export const Login: FC = (): ReactElement => {
	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		validateOnBlur: true,
		onSubmit,
	});

	function initialValues(): IUser {
		return {
			email: "",
			password: "",
		};
	}

	function validationSchema(): Object {
		return yup.object().shape({
			email: yup
				.string()
				.email("Не корректный Email адресс!")
				.required("Поле должно быть заполнено!"),
			password: yup
				.string()
				.min(5, "Пароль должен содержать не менее 5 символов")
				.required("Поле должно быть заполнено!"),
		});
	}

	async function onSubmit(): Promise<void> {
		const { email, password } = formik.values;

		const response = await AuthService.login({ email, password });
		console.log(response);
	}

	return (
		<AuthWrapper title="Войти" linkTitle="Зарегистрироваться" to="/register">
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
