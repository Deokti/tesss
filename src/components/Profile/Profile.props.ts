import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface ProfileProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	avatar: string;
}