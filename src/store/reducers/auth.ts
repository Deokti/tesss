import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthService } from "../../auth/auth.service";
import { IUser } from "../../models/user.module";

interface IAuthState {
	loading: boolean;
	isAuth: boolean;
	user: IUser | null;
	error: string | null;
}

const initialState: IAuthState = {
	error: null,
	loading: false,
	isAuth: false,
	user: null,
};

export const authLogin = createAsyncThunk(
	"auth/login",
	async ({ email, password }: IUser, { rejectWithValue }) => {
		try {
			const response = await AuthService.login(email, password);
			if (response.statusText !== "OK") throw new Error(response.statusText);
			return response.data;
		} catch (_) {
			return rejectWithValue("Пользователь с таким Email или паролем не существует");
		}
	},
);

export const authRegister = createAsyncThunk(
	"auth/register",
	async ({ email, password }: IUser, { rejectWithValue }) => {
		try {
			const response = await AuthService.register(email, password);
			if (response.statusText !== "OK") throw new Error(response.statusText);
			return response.data;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	},
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout(state: IAuthState) {
			state.isAuth = false;
			state.user = null;
			state.error = null;
			state.loading = false;
		},
	},
	extraReducers: {
		[authLogin.pending.type]: (state: IAuthState) => {
			state.loading = true;
		},
		[authLogin.fulfilled.type]: (state: IAuthState, action: PayloadAction<IUser>) => {
			state.isAuth = true;
			state.loading = false;
			state.user = action.payload;
		},
		[authLogin.rejected.type]: (state: IAuthState, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
		[authRegister.pending.type]: (state: IAuthState) => {
			state.loading = true;
		},
		[authRegister.fulfilled.type]: (state: IAuthState, action: PayloadAction<IUser>) => {
			state.isAuth = false;
			state.loading = false;
			state.user = action.payload;
		},
		[authRegister.rejected.type]: (state: IAuthState, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export default authSlice.reducer;
