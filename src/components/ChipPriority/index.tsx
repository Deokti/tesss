import React, { FC } from 'react';
import styles from './ChipPriority.module.scss';
import cn from 'classnames';
import { ChipPriorityProps } from './ChipPriority.props';
import { useClickAwayListener } from '../../hooks/useClickAwayListener';
import ClickAwayListener from 'react-click-away-listener';

const PRIORITY = [
	{ id: 0, value: 'Minor', className: 'minor' },
	{ id: 1, value: 'Normal', className: 'normal' },
	{ id: 2, value: 'Critical', className: 'critical' },
];

export const ChipPriority: FC<ChipPriorityProps> = (props: ChipPriorityProps) => {
	const [isToggle, onClickAway, open] = useClickAwayListener();

	const {
		value,
		className,
		...anotherProps
	} = props;

	return (
		<ClickAwayListener onClickAway={onClickAway}>
			<div className={styles.wrapper} {...anotherProps}>
				<div className={cn(styles.chip, {
					[styles.minor]: value === 'Minor',
					[styles.normal]: value === 'Normal',
					[styles.critical]: value === 'Critical',
				}, className)} onClick={open}>
					{value}
				</div>

				<ul className={cn(styles.list, {
					[styles.open]: isToggle
				})}>
					{
						PRIORITY.map(({ id, value, className }) => {
							return <li key={id} className={cn(styles.item, styles[className])}>{value}</li>;
						})
					}
				</ul>
			</div>
		</ClickAwayListener>
	);
};

