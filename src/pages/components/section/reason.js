import { StyledContainer, StyledReasonCare, StyleReason } from "../../styled/StyledSection";
import img2 from '../../../assets/icon-2.png';
import img3 from '../../../assets/icon-3.png';
import img4 from '../../../assets/icon-4.png';
import { Styled_h3, Styled_p } from "../../styled/StyledSlider";
import React from "react";

function Reason() {
    return (
      <StyleReason className="reason">
             <StyledContainer className="container">
                <StyledReasonCare>
                    <Styled_h3 black>Why choose 24hr home care</Styled_h3>
                    <Styled_p black>labore et dolore magna aliqua. Ut enim ad minim veniam</Styled_p>
                    <div>
                        <span>
                            <img src={img2}/>
                            Daily care experts
                        </span>
                        <span>
                            <img src={img3}/>
                            Available 24/7
                        </span>
                        <span>
                            <img src={img4}/>
                            Balanced care
                        </span>
                    </div>
                 </StyledReasonCare>
             </StyledContainer>
      </StyleReason>
    );
  }

 

  
  export default Reason;