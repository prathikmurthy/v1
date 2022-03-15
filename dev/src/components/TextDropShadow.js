import React, { Component } from 'react';
import styled from 'styled-components';

/*
Component: Text Box with an Animated Drop Shadow

REQUIRED PROPS:
mp: left margin, NO DEFAULT GIVEN
width: text box width, NO DEFAULT GIVEN

OPTIONAL PROPS:
bgcolor: background color of text box, default var(--lightest-navy)
bm: bottom margin, default 10%
bxcol: box shadow color, default black
bxsize: box shadow size, default 10px;
font-size: font size, default 20px;
*/

const StyledDiv = styled.div`
    @keyframes BoxShadowSlide {
        0% {
            box-shadow: 1px 1px var(--navy-shadow);
        }
        100% {
            box-shadow: 10px 10px var(--navy-shadow);
        }
    }

    margin-left: 50%;
    margin-right: 0px;
    margin-bottom: 10%;
    background-color: ${props => props.bgcolor ? props.bgcolor : "var(--light-navy)"};
    width: 40%;
    height: fit-content;
    animation: 1s cubic-bezier(0.645, 0.045, 0.355, 1) 1s 1 BoxShadowSlide;
    animation-fill-mode: forwards;


    p {
        padding: 10px;
        margin: 0px;
        color: var(--white);
        font-family: Cairo;
        font-size: 20px;
    }


`

class TextBoxWithDropShadow extends Component {
    render() {
        return (
            <StyledDiv bgcolor={this.props.bgcolor}>
                <p>I'm a student at the University of Michigan studying Computer Science. I specialize in front-end development, and am currently developing systems for managing product data at Steelcase.</p>
            </StyledDiv>
        )
    }
}

export default TextBoxWithDropShadow;