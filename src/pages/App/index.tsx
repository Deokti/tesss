import React, { FC, ReactElement } from 'react';
import styles from './App.module.scss';

export const App: FC = (): ReactElement => {
	return (
		<div className={styles.app}>
			App
		</div>
	);
};