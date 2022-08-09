import logo from "../../assets/logo.png";
import search from "../../assets/search-icon.png";
import { StyledNav, StyledLinks, StyledSpan, StyledLinkA} from "../styled/StyledNav";
import React from "react";
function Nav() {
	return (
		<StyledNav className="nav">
			<div className="logo">
				<img src={logo} alt="log"/>
			</div>

			<StyledLinks className="links">
				<StyledSpan className='links-item'>
					<StyledLinkA href="/">Home</StyledLinkA >
					<StyledLinkA  href="/">Health</StyledLinkA >
					<StyledLinkA  href="/">Medicine</StyledLinkA >
					<StyledLinkA  href="/">News</StyledLinkA >
					<StyledLinkA  href="/">Client</StyledLinkA >
					<StyledLinkA  href="/">Contact us</StyledLinkA >
				</StyledSpan>

				<StyledLinkA href="/"><img src={search} alt="search"/></StyledLinkA >
			</StyledLinks>
		</StyledNav>
	);
}
  
export default Nav;