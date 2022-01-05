import { ReactElement } from "react";

export interface AuthWrapperProps {
	title: string;
	children?: ReactElement;
	linkTitle: string;
	to: string;
}
