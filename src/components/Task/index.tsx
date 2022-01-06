import React, { ChangeEvent, FC, useState } from "react";
import { ChipPriority } from "../ChipPriority";
import { ChipWorkflow } from "../ChipWorkflow";
import styles from "./Task.module.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import cn from "classnames";
import { TWorkflow } from "../ChipWorkflow/ChipWorkflow.props";
import { TPriority } from "../ChipPriority/ChipPriority.props";
import { useAppDispatch } from "../../hooks/redux";
import { deleteTodoById, updateTodo } from "../../store/reducers/todos";
import { TodoResponse } from "../../models/todo.model";
import { useToggle } from "../../hooks/useToggle";

export const Task: FC<TodoResponse> = (props: TodoResponse) => {
	const { title, priority, workflow, id } = props;

	const [isToggle, toggle] = useToggle();

	const [newTitle, setNewTitle] = useState<string>(title);
	const dispatch = useAppDispatch();

	const onChangeWorkflow = (workflow: TWorkflow): void => {
		const todo = { ...props, workflow };
		dispatch(updateTodo(todo));
	};

	const onChangePriority = (priority: TPriority): void => {
		const todo = { ...props, priority };
		dispatch(updateTodo(todo));
	};

	const onDelete = (id: string) => (): void => {
		dispatch(deleteTodoById(id));
	};

	const onSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
		event.preventDefault();
		if (newTitle.length < 5) return;

		const update = { ...props, title: newTitle };
		dispatch(updateTodo(update));
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setNewTitle(event.target.value);
	};

	return (
		<div className={styles.task}>
			{isToggle ? (
				<form className={styles.form} onSubmit={onSubmit}>
					<label className={styles.label}>
						<input
							type="text"
							value={newTitle}
							className={styles.input}
							onChange={onChange}
							autoFocus
						/>
						<button className={styles.button} type="submit">
							Сохранить
						</button>
					</label>
				</form>
			) : (
				<h2 className={cn(styles.title, "pr-50")}>{title}</h2>
			)}

			<div className={cn(styles.chips, "d-flex align-center")}>
				<ChipWorkflow
					value={workflow}
					title="Изменить процесс"
					className={styles.margin}
					onChangeWorkflow={onChangeWorkflow}
				/>
				<ChipPriority
					value={priority}
					title="Изменить приоритет"
					onChangePriority={onChangePriority}
				/>
			</div>

			<div className={cn(styles.control, "d-flex align-center")}>
				<RiPencilFill
					className={cn(styles.edit, "transition")}
					size={18}
					title="Редактировать"
					onClick={toggle}
				/>
				<AiOutlineDelete
					className={cn(styles.delete, "transition")}
					size={18}
					title="Удалить"
					onClick={onDelete(id as string)}
				/>
			</div>
		</div>
	);
};
