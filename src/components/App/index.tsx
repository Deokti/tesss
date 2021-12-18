import React, { FC, ReactElement } from 'react';
import { CurrentTasks } from '../CurrentTasks';
import { Header } from '../Header';
import styles from './App.module.scss';

export const App: FC = (): ReactElement => {
	return (
		<div className={styles.app}>
			<Header />
			<CurrentTasks className='mt-50' />
		</div>
	);
};