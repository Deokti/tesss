import React, { FC, ReactElement } from 'react';
import { Login } from '../Login';
import styles from './App.module.scss';

export const App: FC = (): ReactElement => {
	return (
		<Login />
		// <div className={styles.app}>
		// 	App
		// </div>
	);
};