import { TPriority } from "../ChipPriority/ChipPriority.props";
import { TWorkflow } from "../ChipWorkflow/ChipWorkflow.props";

export interface ITask {
	id?: string;
	title: string;
	workflow: TWorkflow;
	priority: TPriority;
}
