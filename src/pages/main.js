import Header from "./components/header";
import HealthCare from "./components/section/healthcare";
import Knowledge from "./components/section/knowledge";
import Reason from "./components/section/reason";
import { StyledMain } from "./styled/StyledSection";
import React from "react";
function Main() {
    return (
      <div className="main">
         <Header />
         <StyledMain>
            <HealthCare />
            <Knowledge />
            <Reason />
         </StyledMain>
      </div>
    );
  }
  
  export default Main;