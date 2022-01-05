import { DetailedHTMLProps, HTMLAttributes } from "react";

export type TPriority = "Незначительный" | "Нормальный" | "Критический";

export interface ChipPriorityProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	value: TPriority;
}
