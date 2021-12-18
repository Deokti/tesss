import { TPriority } from "../ChipPriority/ChipPriority.props";
import { TWorkflow } from "../ChipWorkflow/ChipWorkflow.props";

export interface TaskProps {
	title: string;
	workflow: TWorkflow;
	priority: TPriority;
}