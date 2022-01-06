import React, { ReactElement } from "react";
import { MoonLoader } from "react-spinners";
import styles from "./Spinner.module.scss";
import cn from "classnames";

export const Spinner = ({ className = "" }): ReactElement => {
	return (
		<div className={cn(styles.spinner, className)}>
			<MoonLoader color="#90A0B7" size={100} speedMultiplier={0.5} />
		</div>
	);
};
