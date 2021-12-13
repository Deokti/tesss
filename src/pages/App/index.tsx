import React, { FC, ReactElement } from 'react';
import { Header } from '../../components/Header';
import styles from './App.module.scss';

export const App: FC = (): ReactElement => {
	return (
		<div className={styles.app}>
			<Header />
		</div>
	);
};