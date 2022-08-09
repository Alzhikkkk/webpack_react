import styled from 'styled-components';

export const StyledSlider = styled.div`
     display:flex;
     justify-content:space-evenly;
     align-items:center;
     width:100%;
     padding: 1.5rem 70px;
     box-sizing:border-box;
`; 

export const StyledText = styled.div`
     display:flex;
     flex-direction: column;
     align-items: center:
     gap:30px;
     box-sizing:border-box;
`; 

export const Styled_h3 = styled.h3`
    font-size: 60px;
    color: ${props => props.white ? "#fff" : props.black? "#000" : "#4bc5b8"};
    font-weight: 700;
    line-height: 60px; 
    span{
       color:#000;
    }
`;

export const Styled_p = styled.p`
    font-size: 20px;
    margin: 0;
    color: ${props => props.white ? "#fff" : props.black? "#000" : "#4bc5b8"};
    margin-top: 25px;
`;

export const StyledButton = styled.span`
    display: flex;
    gap: 20px;
`;

export const Button = styled.button`
    width: 100%;
    float: left;
    font-size: 18px;
    color: #f6f8f8;
    background: ${props => props.primary ? "#4bc5b8" : "#000"};
    text-align: center;
    padding: 10px 0;
    margin-top: 20px;
    border: 1px solid transparent;
`

