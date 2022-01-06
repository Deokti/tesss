import { TPriority } from "../components/ChipPriority/ChipPriority.props";
import { TWorkflow } from "../components/ChipWorkflow/ChipWorkflow.props";

export interface ITodo {
	author: string;
	priority: TPriority;
	title: string;
	workflow: TWorkflow;
}

export interface TodoResponse {
	id: string;
	author: string;
	priority: TPriority;
	title: string;
	workflow: TWorkflow;
	date: string;
}
