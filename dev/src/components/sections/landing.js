import React, { Component } from 'react';
import styled from 'styled-components';
import ReactTypingEffect from 'react-typing-effect';
import TextBoxWithDropShadow from '../TextDropShadow'


const StyledText = styled.div`
    p {
        color: var(--text-gray-light);
        // text-align: center;
        font-family: monospace;
        font-size: 20px;
        font-weight: bold;
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

const StyledCursorDiv = styled.div`
    display: flex;

    #arrow {
        padding-right: 4%;
    }
`



class Landing extends Component {
    render() {
        return (
            <StyledDiv>

                <StyledText>

                    <p>Hi, my name is</p>

                    <StyledTyping>
                        <StyledCursorDiv>
                            <h1 id="arrow">{ ' > ' }</h1>
                            <ReactTypingEffect
                                text={["Prathik Murthy"]}
                                speed={100}
                                typingDelay={1000}
                                erasingDelay={2000}
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
                        </StyledCursorDiv>    
                    </StyledTyping>

                </StyledText>

                <TextBoxWithDropShadow bgcolor="var(--light-navy)"/>
                
            </StyledDiv>
        );
    }
}

export default Landing;

