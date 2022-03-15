import * as React from "react";
import About from "../components/sections/about"
import styled from 'styled-components'

const StyledContainer = styled.main`
`

const IndexPage = () => {
  return (
    <StyledContainer>
      <About />
    </StyledContainer>
  )
}

export default IndexPage;
