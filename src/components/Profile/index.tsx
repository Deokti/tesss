import React, { FC } from "react";
import styles from "./Profile.module.scss";
import { ProfileProps } from "./Profile.props";
import cn from "classnames";

import ClickAwayListener from "react-click-away-listener";
import { useClickAwayListener } from "../../hooks/useClickAwayListener";
import { useAppSelector } from "../../hooks/redux";
import { useDispatch } from "react-redux";
import { authSlice } from "../../store/reducers/auth";
import { PayloadAction } from "@reduxjs/toolkit";
import md5 from "md5";

const gravatarImage = (email: string | undefined): string => {
	if (!email) return "";
	return `http://gravatar.com/avatar/${md5(email)}?d=identicon`;
};

export const Profile: FC<ProfileProps> = ({ avatar, ...props }: ProfileProps) => {
	const [isToggle, onClickAway, open] = useClickAwayListener();
	const user = useAppSelector((store) => store.auth.user);
	const { logout } = authSlice.actions;
	const dispatch = useDispatch();

	const onLogout = (): PayloadAction => dispatch(logout());

	return (
		<ClickAwayListener onClickAway={onClickAway}>
			<div className={styles.profile} {...props}>
				<div
					style={{ backgroundImage: `url(${gravatarImage(user?.email)})` }}
					className={styles.avatar}
					title={user?.email}
					onClick={open}
				/>

				<ul
					className={cn(styles.list, "transition", {
						[styles.menuOpen]: isToggle,
					})}
				>
					<li className={cn(styles.item, "transition")} onClick={onLogout}>
						Выйти из аккаунта
					</li>
				</ul>
			</div>
		</ClickAwayListener>
	);
};
