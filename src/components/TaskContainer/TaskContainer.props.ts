import { TodoResponse } from "../../models/todo.model";

export interface TaskContainerProps {
	todos: TodoResponse[] | null;
	loading: boolean;
}
