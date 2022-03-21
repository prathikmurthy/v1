import * as React from "react";
import About from "../components/sections/about"
import Landing from "../components/sections/landing"
import NavBar from "../components/sections/navbar"
import styled from 'styled-components'
import '../Index.css';
import '../resources/Inter Web/inter.css'
import Footer from "../components/sections/footer";

const StyledContainer = styled.div`


`

const IndexPage = () => {
  return (
    <StyledContainer>
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
