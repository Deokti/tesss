import axios from "axios";

const BASE_URL = "https://todo-list-fullstack-backend.herokuapp.com/";

export const $api = axios.create({
	baseURL: BASE_URL,
});
