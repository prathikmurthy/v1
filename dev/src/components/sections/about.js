import React, { Component } from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
    h1 {
        color: blue;
        text-align: center;
    }
`

class About extends Component {
    render() {
        return (
            <StyledText>
                <h1>Hello World</h1>
            </StyledText>
        );
    }
}

export default About;

