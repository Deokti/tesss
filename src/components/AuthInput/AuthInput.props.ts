import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface AuthInputProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	appearance: "email" | "password" | "text";
	isVisiblePassword?: boolean;
	label: string;
	error?: string;
}
