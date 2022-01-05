import { AxiosResponse } from "axios";
import { $api } from "../api";
import { IUser, UserModel } from "../models/user.module";

export class AuthService {
	static async login(email: string, password: string): Promise<AxiosResponse<UserModel | null>> {
		const response = await $api.post<UserModel | null>("/auth/login", { email, password });
		return response;
	}

	static async register(email: string, password: string): Promise<AxiosResponse<UserModel | null>> {
		const response = await $api.post<UserModel | null>("/auth/register", { email, password });
		return response;
	}
}
