import React, { ChangeEvent, ReactElement } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { todosSlice } from "../../store/reducers/todos";
import styles from "./Search.module.scss";

export const Search = (): ReactElement => {
	const search = useAppSelector((store) => store.todos.search);
	const dispatch = useAppDispatch();
	const { setSearch } = todosSlice.actions;

	const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
		dispatch(setSearch(event.target.value));
	};

	return (
		<label className={styles.wrapper}>
			<BiSearchAlt2 className={styles.icon} size={20} color="#5B63A9" />
			<input
				value={search}
				onChange={onChange}
				type="text"
				className={styles.input}
				placeholder="Ищите любую задачу, которую хотите"
			/>
		</label>
	);
};
