import { AxiosResponse } from "axios";
import { $api } from "../api";
import { UserResponse } from "../models/user.model";

export class AuthService {
	static async login(email: string, password: string): Promise<AxiosResponse<UserResponse | null>> {
		const response = await $api.post<UserResponse | null>("/auth/login", { email, password });
		return response;
	}

	static async register(
		email: string,
		password: string,
	): Promise<AxiosResponse<UserResponse | null>> {
		const response = await $api.post<UserResponse | null>("/auth/register", { email, password });
		return response;
	}
}
