import styled from 'styled-components';
const display =  `
      display:flex;
      gap:50px;
`;
export const StyledNav = styled.div`
   display:flex;
   flex-direction:row;
   justify-content:space-between;
   align-items: center;
   padding: 0.5rem 70px;
   box-sizing:border-box;
`;

export const StyledLinks = styled.div`
      ${display}
      align-items:center;
      width:50%;

`;

export const StyledSpan = styled.span`
${display}
`;

export const StyledLinkA = styled.a`
     text-decoration:none;
     color: #272a2a;
     font-size: 18px;
     font-family: 'Poppins', sans-serif;
     transition: .4s;

     &:first-child{
        color:rgb(21, 228, 208);
     }

     &:hover{
        color:rgb(21, 228, 208);
     }
`;