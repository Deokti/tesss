import React, { FC, ReactElement, useState } from "react";
import { useClickAwayListener } from "../../hooks/useClickAwayListener";
import { CreateTask } from "../CreateTask";
import { CurrentTasks } from "../CurrentTasks";
import { Header } from "../Header";
import { ITask } from "../Task/Task.props";
import { TaskContainer } from "../TaskContainer";
import styles from "./App.module.scss";

const TASKS: ITask[] = [
	{
		title: "Оцените добавление и удаление идентификаторов пользователей.",
		workflow: "Отменено",
		priority: "Незначительный",
	},
	{ title: "Определите команду внедрения.", workflow: "В процессе", priority: "Нормальный" },
	{ title: "Разработать простую бизнес-систему.", workflow: "Выполнено", priority: "Критический" },
];

export const App: FC = (): ReactElement => {
	const [task, setTask] = useState<ITask[]>(TASKS);
	const [isToggle, onClickAway, open] = useClickAwayListener();

	const unfulfilledTasks = task.filter((item) => item.workflow === "В процессе").length;

	return (
		<div className={styles.app}>
			<div className={styles.top}>
				<Header />
				<CurrentTasks className="mt-50 mb-50" length={unfulfilledTasks} onNewTask={open} />
			</div>

			<TaskContainer title="Progress" tasks={task} />
			{isToggle && <CreateTask onClickAway={onClickAway} />}
		</div>
	);
};
