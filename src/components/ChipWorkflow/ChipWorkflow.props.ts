import { DetailedHTMLProps, HTMLAttributes } from "react";

export type TWorkflow = 'Pending' | 'In Progress' | 'Completed' | 'Cancelled';

export interface ChipWorkflowProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	value: TWorkflow;
}