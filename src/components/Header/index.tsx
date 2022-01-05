import React, { ReactElement } from "react";
import { Profile } from "../Profile";
import { Search } from "../Search";

export const Header = (): ReactElement => {
	return (
		<header className="d-flex justify-between align-center">
			<Search />
			<Profile avatar="https://www.bleepstatic.com/content/hl-images/2021/06/02/kali-linux-header.jpg" />
		</header>
	);
};
