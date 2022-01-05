import React, { FC } from "react";
import { ChipPriority } from "../ChipPriority";
import { ChipWorkflow } from "../ChipWorkflow";
import styles from "./Task.module.scss";
import { ITask } from "./Task.props";
import { AiOutlineDelete } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import cn from "classnames";

export const Task: FC<ITask> = ({ title, priority, workflow }: ITask) => {
	return (
		<div className={styles.task}>
			<h2 className={cn(styles.title, "pr-50")}>{title}</h2>

			<div className={cn(styles.chips, "d-flex align-center")}>
				<ChipWorkflow value={workflow} title="Изменить процесс" className={styles.margin} />
				<ChipPriority value={priority} title="Изменить приоритет" />
			</div>

			<div className={cn(styles.control, "d-flex align-center")}>
				<RiPencilFill className={cn(styles.edit, "transition")} size={18} title="Редактировать" />
				<AiOutlineDelete className={cn(styles.delete, "transition")} size={18} title="Удалить" />
			</div>
		</div>
	);
};
