import React, { ChangeEvent, ReactElement, useState } from "react";
import { PopupContainer } from "../PopupContainer";
import { ReactComponent as Add } from "../../assets/add.svg";
import { ReactComponent as Close } from "../../assets/close.svg";
import styles from "./CreateTask.module.scss";
import ClickAwayListener from "react-click-away-listener";
import { ITodo } from "../../models/todo.model";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { createTodo, getTodoByAuthor } from "../../store/reducers/todos";

interface CreateTaskProps {
	onClickAway: () => void;
}

export const CreateTask = ({ onClickAway }: CreateTaskProps): ReactElement => {
	const userId = useAppSelector((store) => store.auth.user?.id);
	const dispatch = useAppDispatch();
	const [todo, setTodo] = useState<ITodo>({
		author: userId || "",
		priority: "Незначительный",
		title: "",
		workflow: "Ожидаемый",
	});

	const onSubmit = async (event: ChangeEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault();
		if (todo.title.length < 5 || !userId) return;

		await dispatch(createTodo(todo));
		await dispatch(getTodoByAuthor(userId));
		onClickAway();
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setTodo((p) => ({ ...p, title: event.target.value }));
	};

	return (
		<PopupContainer className={styles.wrapper}>
			<ClickAwayListener onClickAway={onClickAway}>
				<form className={styles.form} onSubmit={onSubmit}>
					<h2 className={styles.title}>Добавить новое дело</h2>

					<div className={styles.inner}>
						<div className={styles.top}>
							<Add className={styles.add} />
							<input
								type="text"
								className={styles.input}
								placeholder="Новая задача"
								onChange={onChange}
							/>
						</div>
						<span className={styles.description}>Для сохранения нажмите Enter</span>
					</div>

					<Close className={styles.close} onClick={onClickAway} />
				</form>
			</ClickAwayListener>
		</PopupContainer>
	);
};
