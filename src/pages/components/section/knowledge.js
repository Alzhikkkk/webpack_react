import {
  StyledContainer,
  StyledListen,
  StyleKnowledge,
} from '../../styled/StyledSection';
import play_icon from '../../../assets/play-icon.png';
import { Styled_h3, Styled_p } from '../../styled/StyledSlider';
import React from 'react';
function Knowledge() {
  return (
    <StyleKnowledge className="knowledge">
      <StyledContainer className="container">
        <StyledListen>
          <span>
            <Styled_h3 white>Knowledge of center</Styled_h3>
            <Styled_p white>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </Styled_p>
          </span>
          <a>
            <img src={play_icon} />
          </a>
        </StyledListen>
      </StyledContainer>
    </StyleKnowledge>
  );
}

export default Knowledge;
