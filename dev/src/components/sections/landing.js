import React, { Component } from 'react';
import styled from 'styled-components';
import ReactTypingEffect from 'react-typing-effect';


const StyledText = styled.div`
    p {
        color: var(--text-gray-light);
        // text-align: center;
        font-family: monospace;
        font-size: 20px;
    }

    h1 {
        color: var(--text-gray);
        text-align: center;
        font-family: monospace;
        font-size: 100px;
    }
`

const StyledTyping = styled.div`
    h1 {
        margin-top: 0px;
    }
`

const StyledDiv = styled.div`
    padding-top: 100px;
    padding-left: 50px;
`

class Landing extends Component {
    render() {
        return (
            <StyledDiv>
                <StyledText>
                    <p>Hi, my name is</p>
                    <StyledTyping>
                        <ReactTypingEffect
                            text={["Prathik Murthy"]}
                            speed={100}
                            typingDelay={1000}
                            cursorRenderer={cursor => <h1>{cursor}</h1>}
                            displayTextRenderer={(text, i) => {
                                return (
                                    <h1>
                                    {text.split('').map((char, i) => {
                                        const key = `${i}`;
                                        return (
                                        <span
                                            key={key}
                                            // style={i%2 === 0 ? { color: 'magenta'} : {}}
                                        >{char}</span>
                                        );
                                    })}
                                    </h1>
                                );
                            }}        
                        />
                    </StyledTyping>
                </StyledText>
                
            </StyledDiv>
        );
    }
}

export default Landing;

