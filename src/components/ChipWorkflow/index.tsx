import React, { FC } from 'react';
import styles from './ChipWorkflow.module.scss';
import cn from 'classnames';
import { ChipWorkflowProps } from './ChipWorkflow.props';
import ClickAwayListener from 'react-click-away-listener';
import { useClickAwayListener } from '../../hooks/useClickAwayListener';

const WORKFLOW = [
	{ id: 0, value: 'In Progress', className: 'inProgress' },
	{ id: 1, value: 'Pending', className: 'pending' },
	{ id: 2, value: 'Completed', className: 'completed' },
	{ id: 3, value: 'Cancelled', className: 'cancelled' },
];

export const ChipWorkflow: FC<ChipWorkflowProps> = (props: ChipWorkflowProps) => {
	const [isToggle, onClickAway, open] = useClickAwayListener();
	const {
		className,
		value,
		...anotherProps
	} = props;

	return (
		<ClickAwayListener onClickAway={onClickAway}>
			<div className={styles.wrapper} {...anotherProps}>
				<div
					onClick={open}
					className={cn(styles.chip, {
						[styles.inProgress]: value === 'In Progress',
						[styles.pending]: value === 'Pending',
						[styles.completed]: value === 'Completed',
						[styles.cancelled]: value === 'Cancelled',
					}, className)}>
					<span className={styles.value}>{value}</span>
				</div>

				<ul className={cn(styles.list, {
					[styles.open]: isToggle
				})}>
					{
						WORKFLOW.map(({ id, value, className }) => {
							return <li key={id} className={cn(styles.item, styles[className])}>{value}</li>;
						})
					}
				</ul>
			</div>
		</ClickAwayListener>
	);
};

