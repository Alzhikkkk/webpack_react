import img2 from '../../../assets/img-2.png';
import img3 from '../../../assets/img-3.png';
import { StyledContainer, StyleHealth } from '../../styled/StyledSection';
import { Button, Styled_h3, Styled_p } from '../../styled/StyledSlider';
import React from 'react';
function HealthCare() {
  return (
    <StyleHealth className="healthcare">
      <StyledContainer className="container">
        <Styled_h3 black>Best of Health care for you</Styled_h3>
        <Styled_p black>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis
        </Styled_p>
        <span className="main-photo">
          <img src={img2} />
          <img src={img3} />
        </span>
        <Button primary>Read more</Button>
      </StyledContainer>
    </StyleHealth>
  );
}

export default HealthCare;
