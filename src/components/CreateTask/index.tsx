import React from "react";
import { PopupContainer } from "../PopupContainer";
import { ReactComponent as Add } from "../../assets/add.svg";
import styles from "./CreateTask.module.scss";

export const CreateTask = () => {
	return (
		<PopupContainer className={styles.wrapper}>
			<form>
				<h2 className={styles.title}>Добавить новое дело</h2>

				<div className={styles.inner}>
					<div className={styles.top}>
						<Add className={styles.add} />
						<input type="text" className={styles.input} placeholder="Новая задача" />
					</div>
					<span className={styles.description}>Для сохранения нажмите Enter</span>
				</div>
			</form>
		</PopupContainer>
	);
};
