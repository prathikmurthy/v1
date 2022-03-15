import React, { Component } from 'react';
import styled from 'styled-components';

/*
Component: Text Box with an Animated Drop Shadow

REQUIRED PROPS:
lm: left margin, NO DEFAULT GIVEN
width: text box width, NO DEFAULT GIVEN
text: text, NO DEFAULT GIVEN

OPTIONAL PROPS:
bgcolor: background color of text box, default var(--lightest-navy)
bm: bottom margin, default 10%
bxcol: box shadow color, default black
bxsize: box shadow size, default 10px;
fontsize: font size, default 20px;
*/

const StyledDiv = styled.div`
    @keyframes BoxShadowSlide {
        0% {
            box-shadow: 1px 1px ${props => props.bxcol ? props.bxcol : 'var(--navy-shadow)'};
        }
        100% {
            box-shadow: ${props => props.bxsize ? props.bxsize : '10px'} ${props => props.bxsize ? props.bxsize : '10px'} ${props => props.bxcol ? props.bxcol : 'var(--navy-shadow)'};
        }
    }

    margin-left: ${props => props.lm};
    margin-right: 0px;
    margin-bottom: ${props => props.bm ? props.bm : '10%'};
    background-color: ${props => props.bgcolor ? props.bgcolor : "var(--light-navy)"};
    width: ${props => props.width};
    height: fit-content;
    animation: 1s cubic-bezier(0.645, 0.045, 0.355, 1) 1s 1 BoxShadowSlide;
    animation-fill-mode: forwards;


    p {
        padding: 10px;
        margin: 0px;
        color: var(--white);
        font-family: Cairo;
        font-size: ${props => props.fontsize ? props.fontsize : '20px'}
    }


`

class TextBoxWithDropShadow extends Component {
    render() {
        return (
            <StyledDiv 
                bgcolor={this.props.bgcolor}
                fontsize={this.props.fontsize}
                width={this.props.width}
                bxsize = {this.props.bxsize}
                bxcol={this.props.bxcol}
                lm = {this.props.lm}
                bm = {this.props.bm}>
                <p>{this.props.text}</p>
            </StyledDiv>
        )
    }
}

export default TextBoxWithDropShadow;