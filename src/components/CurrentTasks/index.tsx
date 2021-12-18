import React, { FC } from 'react';
import { Button } from '../Button';
import styles from './CurrentTasks.module.scss';
import { CurrentTasksProps } from './CurrentTasks.props';
import cn from 'classnames';

export const CurrentTasks: FC<CurrentTasksProps> = (props: CurrentTasksProps) => {
	const {
		className,
		...anotherProps
	} = props;


	return (
		<div className={cn(styles.wrapper, className)} {...anotherProps}>
			<h1 className={styles.tasks}>
				У вас сегодня <span className={styles.tasksActive}>7 задач</span>
			</h1>
			<Button appearance="linear">Добавить</Button>
		</div>
	);
};