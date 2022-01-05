import React from "react";
import { PopupContainerProps } from "./PopupContainer.props";
import styles from "./PopupContainer.module.scss";
import cn from "classnames";

export const PopupContainer = ({ children, className, ...props }: PopupContainerProps) => {
	return (
		<div className={styles.wrapper} {...props}>
			<div className={cn(styles.inner, className)}>{children}</div>
		</div>
	);
};
