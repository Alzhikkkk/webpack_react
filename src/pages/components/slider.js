import nurse from "../../assets/img-1.png";
import { Button, StyledButton, StyledSlider, StyledText, Styled_h3, Styled_p } from "../styled/StyledSlider";
import React from "react";
function Slider() {
	return (
		<StyledSlider className="slider">
			<StyledText>
				<Styled_h3>Health <span>Care</span></Styled_h3>
				<Styled_p black>There are many variations of passages of Lorem ipsum</Styled_p>
				<StyledButton>
					<Button primary>Contact now</Button>
					<Button secondary>Get quote</Button>
				</StyledButton>
			</StyledText>

			<img src={nurse} alt="photo" />

		</StyledSlider>
	);
}
  
export default Slider;