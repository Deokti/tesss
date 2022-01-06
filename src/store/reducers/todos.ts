import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoService } from "../../todos/todo.service";
import { ITodo, TodoResponse } from "../../models/todo.model";

interface ITodoState {
	loading: boolean;
	todos: TodoResponse[] | null;
	error: string | null;
	search: string;
}

const initialState: ITodoState = {
	error: null,
	loading: false,
	todos: null,
	search: "",
};

export const getTodoByAuthor = createAsyncThunk(
	"todos/getTodoByAuthor",
	async (userId: string, { rejectWithValue, getState }) => {
		try {
			const response = await new TodoService().getTodoByAuthor(userId);
			if (response.statusText !== "OK") throw new Error(response.statusText);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const createTodo = createAsyncThunk(
	"todos/createTask",
	async (task: ITodo, { rejectWithValue }) => {
		try {
			const response = await new TodoService().createTodo(task);
			if (response.statusText !== "OK") throw new Error(response.statusText);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const deleteTodoById = createAsyncThunk(
	"todos/deleteTodoById",
	async (id: string, { rejectWithValue }) => {
		try {
			const response = await new TodoService().deleteTodoById(id);
			if (response.statusText !== "OK") throw new Error(response.statusText);
			return id;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const updateTodo = createAsyncThunk(
	"todos/updateTodo",
	async (todo: TodoResponse, { rejectWithValue }) => {
		try {
			const response = await new TodoService().updateTodo(todo);
			if (response.statusText !== "OK") throw new Error(response.statusText);
			return todo;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		setSearch(state: ITodoState, action: PayloadAction<string>) {
			state.search = action.payload;
		},
	},
	extraReducers: {
		[getTodoByAuthor.pending.type]: (state: ITodoState) => {
			state.loading = true;
		},
		[getTodoByAuthor.fulfilled.type]: (
			state: ITodoState,
			action: PayloadAction<TodoResponse[]>,
		) => {
			state.loading = false;
			state.todos = action.payload;
		},
		[getTodoByAuthor.rejected.type]: (state: ITodoState, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
		[deleteTodoById.fulfilled.type]: (state: ITodoState, action: PayloadAction<string>) => {
			state.todos = state.todos?.filter((item) => item.id !== action.payload) as TodoResponse[];
		},
		[updateTodo.fulfilled.type]: (state: ITodoState, action: PayloadAction<TodoResponse>) => {
			state.todos = state.todos?.map((item) =>
				item.id === action.payload.id ? { ...action.payload } : item,
			) as TodoResponse[];
		},
	},
});

export default todosSlice.reducer;
