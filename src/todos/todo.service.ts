import { AxiosResponse } from "axios";
import { $api } from "../api";
import { ITodo, TodoResponse } from "../models/todo.model";
import { UserResponse } from "../models/user.model";

export class TodoService {
	getTodoByAuthor(author: string): Promise<AxiosResponse<UserResponse | null>> {
		const response = $api.get<UserResponse | null>(`/todos/${author}`);
		return response;
	}

	createTodo(task: ITodo): Promise<AxiosResponse<UserResponse | null>> {
		const response = $api.post<UserResponse | null>(`/todos`, task);
		return response;
	}

	async deleteTodoById(id: string): Promise<AxiosResponse<void>> {
		return await $api.delete(`todos/${id}`);
	}

	async updateTodo(todo: TodoResponse): Promise<AxiosResponse<void>> {
		return await $api.put(`todos/`, todo);
	}
}
