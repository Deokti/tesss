import React, { ReactElement } from "react";
import { PopupContainer } from "../PopupContainer";
import { ReactComponent as Add } from "../../assets/add.svg";
import { ReactComponent as Close } from "../../assets/close.svg";
import styles from "./CreateTask.module.scss";
import ClickAwayListener from "react-click-away-listener";

interface CreateTaskProps {
	onClickAway: () => void;
}

export const CreateTask = ({ onClickAway }: CreateTaskProps): ReactElement => {
	return (
		<PopupContainer className={styles.wrapper}>
			<ClickAwayListener onClickAway={onClickAway}>
				<form className={styles.form}>
					<h2 className={styles.title}>Добавить новое дело</h2>

					<div className={styles.inner}>
						<div className={styles.top}>
							<Add className={styles.add} />
							<input type="text" className={styles.input} placeholder="Новая задача" />
						</div>
						<span className={styles.description}>Для сохранения нажмите Enter</span>
					</div>

					<Close className={styles.close} onClick={onClickAway} />
				</form>
			</ClickAwayListener>
		</PopupContainer>
	);
};
