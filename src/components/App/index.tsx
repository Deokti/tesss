import React, { FC, ReactElement } from 'react';
import { CurrentTasks } from '../CurrentTasks';
import { Header } from '../Header';
import { ITask } from '../Task/Task.props';
import { TaskContainer } from '../TaskContainer';
import styles from './App.module.scss';

const TASKS: ITask[] = [
	{ title: 'Оцените добавление и удаление идентификаторов пользователей.', workflow: 'Cancelled', priority: 'Minor' },
	{ title: 'Определите команду внедрения.', workflow: 'In Progress', priority: 'Normal' },
	{ title: 'Разработать простую бизнес-систему.', workflow: 'Completed', priority: 'Critical' },
];

export const App: FC = (): ReactElement => {
	return (
		<div className={styles.app}>
			<Header />
			<CurrentTasks className='mt-50 mb-50' />
			<TaskContainer title='Progress' tasks={TASKS} />
		</div>
	);
};