import * as React from "react";
import '../resources/Inter Web/inter.css'
import About from "../components/sections/about"
import Landing from "../components/sections/landing"
import NavBar from "../components/sections/navbar"
import Featured from "../components/sections/featured"
import Experience from "../components/sections/experience"
import Application from "../components/helmet"
import styled from 'styled-components'
import '../Index.css';

import Footer from "../components/sections/footer";

const StyledContainer = styled.div`


`

const IndexPage = () => {
  return (
    <StyledContainer>
      <Application />
      <Landing />
      <Experience />
      <Featured />
      <Footer />
      {/* <About /> */}
      {/* <Skills />
      <Contact /> */}
    </StyledContainer>
  )
}

export default IndexPage;
