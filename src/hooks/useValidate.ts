import { Formik, useFormik } from "formik";
import { IUser } from "../models/user.module";
import * as yup from "yup";

interface IUseValidateProps {
	onSubmit(): Promise<void>;
}

export const useValidate = ({ onSubmit }: IUseValidateProps) => {
	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
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

	return formik;
};
