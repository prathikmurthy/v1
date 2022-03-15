import React, { Component } from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
    h1 {
        color: var(--lightest-slate);
        text-align: center;
    }
`

const StyledDiv = styled.div`

`

const StyledNavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    font-family: monospace;
    font-size: 15px;
`

const StyledNavButton = styled.div`
    padding-left: 50px;
    padding-right: 50px;
`



class NavBar extends Component {
    render() {
        return (
            <StyledDiv>
                <StyledNavBar>

                    <StyledNavButton>
                        <NavButton text="Home"/>
                    </StyledNavButton>

                    <StyledNavButton>
                        <NavButton text="About"/>
                    </StyledNavButton>

                    <StyledNavButton>
                        <NavButton text="Projects"/>
                    </StyledNavButton>

                    <StyledNavButton>
                        <NavButton text="Work"/>
                    </StyledNavButton>

                    <StyledNavButton>
                        <NavButton text="Contact"/>
                    </StyledNavButton>
                </StyledNavBar> 
            </StyledDiv>
        );
    }
}

class NavButton extends Component {
    render() {
        return (
                <p>{this.props.text}</p>
        )
    }
}

export default NavBar;

