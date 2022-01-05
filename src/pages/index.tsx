import React, { ReactElement, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { App } from "../components/App";
import { useAppSelector } from "../hooks/redux";
import { Login } from "./Login";
import { Register } from "./Register";

export const Page = (): ReactElement => {
	const isAuth = useAppSelector((store) => store.auth.isAuth);
	const location = useNavigate();

	useEffect(isRedirect, [isAuth]);

	function isRedirect(): void {
		return isAuth ? location("/") : location("/login");
	}

	return (
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
};
