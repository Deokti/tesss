import React, { FC } from 'react';
import { Task } from '../Task';
import styles from './TaskContainer.module.scss';
import { TaskContainerProps } from './TaskContainer.props';

export const TaskContainer: FC<TaskContainerProps> = ({ tasks, title }: TaskContainerProps) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>{title}</h3>

			<ul className={styles.list}>
				{
					tasks.map(({ priority, title, workflow }) => {
						return (
							<li key={title}>
								<Task
									title={title}
									priority={priority}
									workflow={workflow}
								/>
							</li>
						);
					})
				}
			</ul>
		</div>
	);
};
