import React, { FC, ReactElement } from "react";
import styles from "./AuthWrapper.module.scss";
import { AuthWrapperProps } from "./AuthWrapper.props";
import cn from "classnames";
import { Link } from "react-router-dom";

export const AuthWrapper: FC<AuthWrapperProps> = (props: AuthWrapperProps): ReactElement => {
	const { children, title, linkTitle, to, errorMessage } = props;

	const isError = errorMessage && errorMessage.length > 0;

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>{title}</h1>

			<div className={styles.body}>{children}</div>

			<Link to={to} className={cn(styles.redirect, "d-block text-center mt-20")}>
				{linkTitle}
			</Link>

			{isError && <span className={styles.error}>{errorMessage}</span>}
		</div>
	);
};
