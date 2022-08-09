import styled from "styled-components";
import { keyframes } from "styled-components";
import knowledge from "../../assets/knowledge-bg.png";


export const StyledContainer = styled.div`
        width: 70%;
        display:flex;
        flex-direction: column;
        align-items:start;
        margin-top: 50px;
        box-sizing:border-box;
        >span{
            display:flex;
            justify-content:space-around;
            margin-top: 150px;
            position:relative;
            
            img{
                width:30%;
                position:relative;

                &:first-child{
                    width:60%;
                    height: 290px;
                }
            }

            &::after{
                content: '';
                position: absolute;
                background-color: #cfedf0;
                height: 350px;
                width: 300px;
                left: 0;
                right: initial;
                z-index: -1;
                margin: 0 auto;
                top: -30px;
                display:block;
            }
        }

        button{
            float: left;
            font-size: 18px;
            color: #f6f8f8;
            background-color: #4bc5b8;
            text-align: center;
            padding: 10px 20px;
            margin-top: 100px;
            border: 1px solid transparent;
            width:200px
        }

`;

export const StyleHealth = styled.section`
        width:100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        display:flex;
        justify-content: center;
        align-items:center;
        box-sizing:border-box;
`;

export const StyledMain = styled.main`
        display:flex;
        justify-content: center;
        flex-direction:column;
        align-items:center;
        box-sizing:border-box;
`;


export const StyleKnowledge = styled.section`
    background-image: url(${knowledge});
    width:100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    display:flex;
    justify-content: center;
    align-items:center;
    box-sizing:border-box;
    margin-top:100px;
    padding-top: 180px;
    padding-bottom: 210px;
    height:auto;
`;
const fadeEffect = keyframes`
    0%{transform:translate(-50%,-50%) scale(1);opacity:1}
    100%{transform:translate(-50%,-50%) scale(1.2);opacity:0}
`;


export const StyledListen = styled.div`
      display:flex;
      align-items:center;
      justify-content:center;
      gap:30px;
      width:100%;

      span{
        display:flex;
        flex-direction: column;
      }

      a{
        position:relative;
        z-index:1;
        &:before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        transform: translate(-50%,-50%);
        background-color: #f2f2f2;
        border-radius: 100%;
        z-index: -1;
        animation: ${fadeEffect} 1.3s infinite ease;
        box-shadow: 0 0 10px 0;
        }
      }

`;



export const StyleReason = styled(StyleKnowledge)`
    background-image: none;
    padding-top:0px;
    padding-bottom:0px;
`;

export const StyledReasonCare = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;

    div{
        display:flex;
        flex-wrap:wrap;
        gap: 50px;
        margin-top: 50px;

        span{
            display:flex;
            flex-direction:column;
            align-items: center;
            gap: 40px;
            width: 15%;
            float: left;
            background-color: #252525;
            height: 150px;
            border-radius: 15px;
            padding: 60px;
            text-align: center;
            font-weight: 700;
            font-size: 24px;
            color: #fff;
            line-height: 30px;
            justify-content: center;
            transition: .4s;


            &:nth-child(2){
                background-color:#1becde;            
            }

            &:hover{
                background-color:#1becde;
            }

            img{
                width:100px;
            }
        }
    }

`;

