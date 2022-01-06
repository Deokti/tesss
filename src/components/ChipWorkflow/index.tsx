import React, { FC } from "react";
import styles from "./ChipWorkflow.module.scss";
import cn from "classnames";
import { ChipWorkflowProps, TWorkflow } from "./ChipWorkflow.props";
import ClickAwayListener from "react-click-away-listener";
import { useClickAwayListener } from "../../hooks/useClickAwayListener";

const WORKFLOW = [
	{ id: 0, value: "В процессе", className: "inProgress" },
	{ id: 1, value: "Ожидаемый", className: "pending" },
	{ id: 2, value: "Выполнено", className: "completed" },
	{ id: 3, value: "Отменено", className: "cancelled" },
];

export const ChipWorkflow: FC<ChipWorkflowProps> = (props: ChipWorkflowProps) => {
	const [isToggle, onClickAway, open] = useClickAwayListener();
	const { className, value, onChangeWorkflow, ...anotherProps } = props;

	const handlerChangeWorkflow = (workflow: TWorkflow) => (): void => {
		onChangeWorkflow && onChangeWorkflow(workflow);
		onClickAway();
	};

	return (
		<ClickAwayListener onClickAway={onClickAway}>
			<div className={styles.wrapper} {...anotherProps}>
				<div
					onClick={open}
					className={cn(
						styles.chip,
						{
							[styles.inProgress]: value === "В процессе",
							[styles.pending]: value === "Ожидаемый",
							[styles.completed]: value === "Выполнено",
							[styles.cancelled]: value === "Отменено",
						},
						className,
					)}
				>
					<span className={styles.value}>{value}</span>
				</div>

				<ul
					className={cn(styles.list, {
						[styles.open]: isToggle,
					})}
				>
					{WORKFLOW.map(({ id, value, className }) => {
						return (
							<li
								key={id}
								className={cn(styles.item, styles[className])}
								onClick={handlerChangeWorkflow(value as TWorkflow)}
							>
								{value}
							</li>
						);
					})}
				</ul>
			</div>
		</ClickAwayListener>
	);
};
