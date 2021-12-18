import { useState } from 'react';

export const useClickAwayListener = (): [isToggle: boolean, onClickAway: () => void, open: () => void] => {
	const [isToggle, setIsToggle] = useState<boolean>(false);

	const open = (): void => setIsToggle(!isToggle);

	const onClickAway = () => setIsToggle(false);

	return [isToggle, onClickAway, open];
};