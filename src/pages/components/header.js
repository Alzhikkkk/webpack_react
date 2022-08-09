import Nav from "./nav";
import { StyledHeader } from "../styled/StyledHeader";
import Slider from "./slider";
import React from "react";
function Header() {
	return (
		<StyledHeader className="header">
			<Nav />
			<Slider/>
		</StyledHeader>
	);
}

 

  
export default Header;