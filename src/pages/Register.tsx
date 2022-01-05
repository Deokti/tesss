import React, { FC, ReactElement } from "react";
import { AuthInput } from "../components/AuthInput";
import { AuthWrapper } from "../components/AuthWrapper";
import { Button } from "../components/Button";

export const Register: FC = (): ReactElement => {
	return (
		<AuthWrapper title="Регистрация" linkTitle="Войти" to="/login">
			<form>
				<AuthInput appearance="email" label="Email" />
				<AuthInput appearance="password" label="Password" />

				<Button appearance="linear-gradient" className="mt-20">
					Зарегистрироваться
				</Button>
			</form>
		</AuthWrapper>
	);
};
