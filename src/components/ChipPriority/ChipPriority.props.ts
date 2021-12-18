import { DetailedHTMLProps, HTMLAttributes } from "react";

export type TPriority = 'Minor' | 'Normal' | 'Critical';

export interface ChipPriorityProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	value: TPriority;
}