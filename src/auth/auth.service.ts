import { AxiosResponse } from "axios";
import { $api } from "../api";
import { IUser, UserModel } from "../models/user.module";

export class AuthService {
	static async login({ email, password }: IUser): Promise<AxiosResponse<UserModel | null>> {
		const response = await $api.post("/auth/login", { email, password });
		return response.data;
	}

	static async register({ email, password }: IUser): Promise<AxiosResponse<UserModel | null>> {
		const response = await $api.post("/auth/register", { email, password });
		return response.data;
	}
}
