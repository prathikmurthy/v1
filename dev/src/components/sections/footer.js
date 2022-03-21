import React, { Component } from 'react';
import styled from 'styled-components';
import github from '../../images/github.png';

const StyledDiv = styled.div`
    font-size: 12px;
    text-align: center;
    padding: 5%;
    padding-bottom: 2%;
`

export default class Footer extends Component {


    render() {
        return (
            <StyledDiv>
                <p>Built with ❤️ by Prathik Murthy</p>
                <a href="https://github.com/prathikmurthy/prathikm.dev" target="_blank"><img src={ github }></img></a>
            </StyledDiv>
        )
    }
}