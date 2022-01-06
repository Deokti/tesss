import React, { FC } from "react";
import styles from "./ChipPriority.module.scss";
import cn from "classnames";
import { ChipPriorityProps, TPriority } from "./ChipPriority.props";
import { useClickAwayListener } from "../../hooks/useClickAwayListener";
import ClickAwayListener from "react-click-away-listener";

const PRIORITY = [
	{ id: 0, value: "Незначительный", className: "minor" },
	{ id: 1, value: "Нормальный", className: "normal" },
	{ id: 2, value: "Критический", className: "critical" },
];

export const ChipPriority: FC<ChipPriorityProps> = (props: ChipPriorityProps) => {
	const [isToggle, onClickAway, open] = useClickAwayListener();

	const { value, className, onChangePriority, ...anotherProps } = props;

	const handlerChangePriority = (priority: TPriority) => (): void => {
		onChangePriority && onChangePriority(priority);
		onClickAway();
	};

	return (
		<ClickAwayListener onClickAway={onClickAway}>
			<div className={styles.wrapper} {...anotherProps}>
				<div
					className={cn(
						styles.chip,
						{
							[styles.minor]: value === "Незначительный",
							[styles.normal]: value === "Нормальный",
							[styles.critical]: value === "Критический",
						},
						className,
					)}
					onClick={open}
				>
					{value}
				</div>

				<ul
					className={cn(styles.list, {
						[styles.open]: isToggle,
					})}
				>
					{PRIORITY.map(({ id, value, className }) => {
						return (
							<li
								key={id}
								className={cn(styles.item, styles[className])}
								onClick={handlerChangePriority(value as TPriority)}
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
