import React, { ReactElement } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./Search.module.scss";

export const Search = (): ReactElement => {
	return (
		<label className={styles.wrapper}>
			<BiSearchAlt2 className={styles.icon} size={20} color="#5B63A9" />
			<input
				type="text"
				className={styles.input}
				placeholder="Ищите любую задачу, которую хотите"
			/>
		</label>
	);
};
