import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CurrentTasksProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	length: number;
	onNewTask: () => void;
}
