import React, { FC, useState } from "react";
import { TWorkflow } from "../ChipWorkflow/ChipWorkflow.props";
import { Spinner } from "../Spinner";
import { Task } from "../Task";
import styles from "./TaskContainer.module.scss";
import { TaskContainerProps } from "./TaskContainer.props";
import cn from "classnames";
import { TodoResponse } from "../../models/todo.model";
import { Routes } from "react-router";

const FILTER = [
	{ id: 1, label: "Ожидаемый" },
	{ id: 0, label: "В процессе" },
	{ id: 2, label: "Выполнено" },
	{ id: 3, label: "Отменено" },
];

export const TaskContainer: FC<TaskContainerProps> = (props: TaskContainerProps) => {
	const { todos, loading } = props;
	const [filter, setFilter] = useState<TWorkflow>("В процессе");

	const onChangeFilter = (newFilter: TWorkflow) => (): void => {
		setFilter(newFilter);
	};

	const getFilter = todos && todos.filter(({ workflow }) => workflow === filter);

	return (
		<div className={styles.container}>
			{loading ? (
				<Spinner className={styles.spinner} />
			) : (
				<React.Fragment>
					<ul className={styles.filterList}>
						{FILTER.map(({ id, label }) => {
							const count = todos?.filter((item) => item.workflow === label).length;
							return (
								<li
									key={id}
									onClick={onChangeFilter(label as TWorkflow)}
									className={cn(styles.filterItem, {
										[styles.filterItemActive]: label === filter,
									})}
								>
									{label} ({count})
								</li>
							);
						})}
					</ul>

					<ul className={styles.list}>
						{getFilter &&
							getFilter.map(({ priority, title, workflow, id, author, date }) => {
								return (
									<li key={title}>
										<Task
											id={id}
											title={title}
											priority={priority}
											workflow={workflow}
											author={author}
											date={date}
										/>
									</li>
								);
							})}
					</ul>
				</React.Fragment>
			)}
		</div>
	);
};
