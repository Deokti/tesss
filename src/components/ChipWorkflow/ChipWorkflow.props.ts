import { DetailedHTMLProps, HTMLAttributes } from "react";

export type TWorkflow = "Ожидаемый" | "В процессе" | "Выполнено" | "Отменено";

export interface ChipWorkflowProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	value: TWorkflow;
	onChangeWorkflow?: (workflow: TWorkflow) => void;
}
