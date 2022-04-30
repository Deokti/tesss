import React, { ReactElement, useEffect } from "react";
import { useLocation } from "react-router";
import { Route, Routes, useNavigate } from "react-router-dom";
import { App } from "../components/App";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { authSlice } from "../store/reducers/auth";
import { Login } from "./Login";
import { Register } from "./Register";

export const Page = (): ReactElement => {
	const isAuth = useAppSelector((store) => store.auth.isAuth);
	const navigate = useNavigate();
	const { clearError } = authSlice.actions;
	const dispatch = useAppDispatch();
	const location = useLocation();

	useEffect(isRedirect, [isAuth]);
	useEffect(clear, [location.pathname]);

	function isRedirect(): void {
		return isAuth ? navigate("/") : navigate("/login");
	}

	function clear(): void {
		dispatch(clearError());
	}

	return (
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
};
