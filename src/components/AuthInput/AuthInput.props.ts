import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface AuthInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	appearance: 'email' | 'password';
	isVisiblePassword?: boolean;
	label: string;
}