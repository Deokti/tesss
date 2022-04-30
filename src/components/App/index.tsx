import React, { FC, ReactElement, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useClickAwayListener } from "../../hooks/useClickAwayListener";
import { getTodoByAuthor } from "../../store/reducers/todos";
import { CreateTask } from "../CreateTask";
import { CurrentTasks } from "../CurrentTasks";
import { Header } from "../Header";
import { TaskContainer } from "../TaskContainer";
import styles from "./App.module.scss";

export const App: FC = (): ReactElement => {
	const { isAuth, user } = useAppSelector((store) => store.auth);
	const { loading, todos } = useAppSelector((store) => store.todos);
	const [isToggle, onClickAway, open] = useClickAwayListener();
	const dispatch = useAppDispatch();

	useEffect(onLoad, [isAuth]);

	function onLoad(): void {
		user && dispatch(getTodoByAuthor(user.id));
	}

	const unfulfilledTasks = todos?.filter((item) => item.workflow === "В процессе").length;

	return (
		<div className={styles.app}>
			<div className={styles.top}>
				<Header />
				<CurrentTasks className="mt-50 mb-50" onNewTask={open} length={unfulfilledTasks} />
			</div>

			<TaskContainer todos={todos} loading={loading} />
			{isToggle && <CreateTask onClickAway={onClickAway} />}
		</div>
	);
};
