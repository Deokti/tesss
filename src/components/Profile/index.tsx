import React, { FC } from "react";
import styles from "./Profile.module.scss";
import { ProfileProps } from "./Profile.props";
import cn from "classnames";

import ClickAwayListener from "react-click-away-listener";
import { useClickAwayListener } from "../../hooks/useClickAwayListener";

export const Profile: FC<ProfileProps> = ({ avatar, ...props }: ProfileProps) => {
	const [isToggle, onClickAway, open] = useClickAwayListener();

	return (
		<ClickAwayListener onClickAway={onClickAway}>
			<div className={styles.profile} {...props}>
				<div
					style={{ backgroundImage: `url(${avatar})` }}
					className={styles.avatar}
					onClick={open}
				/>

				<ul
					className={cn(styles.list, "transition", {
						[styles.menuOpen]: isToggle,
					})}
				>
					<li className={cn(styles.item, "transition")}>Изменить аватар</li>
					<li className={cn(styles.item, "transition")}>Выйти из аккаунта</li>
				</ul>
			</div>
		</ClickAwayListener>
	);
};
