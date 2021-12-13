import React, { FC } from 'react';
import styles from './Profile.module.scss';
import { ProfileProps } from './Profile.props';

export const Profile: FC<ProfileProps> = ({ avatar, ...props }: ProfileProps) => {
	return (
		<div className={styles.profile} {...props}>
			<div style={{ backgroundImage: `url(${avatar})` }} className={styles.avatar} />

		</div>
	);
};