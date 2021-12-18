import React, { FC, ReactElement } from 'react';
import { TPriority } from '../ChipPriority/ChipPriority.props';
import { TWorkflow } from '../ChipWorkflow/ChipWorkflow.props';
import { CurrentTasks } from '../CurrentTasks';
import { Header } from '../Header';
import { Task } from '../Task';
import styles from './App.module.scss';

const TASKS = [
	{ id: 0, label: 'Оцените добавление и удаление идентификаторов пользователей.', workflow: 'Cancelled', priority: 'Minor' },
	{ id: 0, label: 'Определите команду внедрения.', workflow: 'In Progress', priority: 'Normal' },
	{ id: 0, label: 'Разработать простую бизнес-систему.', workflow: 'Completed', priority: 'Critical' },
];

export const App: FC = (): ReactElement => {
	return (
		<div className={styles.app}>
			<Header />
			<CurrentTasks className='mt-50 mb-50' />

			{
				TASKS.map(({ id, label, priority, workflow }) => {
					return (
						<Task
							key={id}
							title={label}
							priority={priority as TPriority}
							workflow={workflow as TWorkflow}
						/>
					);
				})
			}
		</div>
	);
};