import React, { Component } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`

    

    a {
        text-decoration: none;
        color: white;
    }

    a:hover {
        color: var(--accent);
    }

    section {
        
        padding-left: 10%;
        

        #one {
            padding-top: 10%;

            animation:1s ease 0s normal forwards 1 fadein;
            opacity:0;
        }
    
        #two {
            padding-top: 5%;
            animation:1s ease 1s normal forwards 1 fadein;
            opacity:0;
        }
    
        #three {
            padding-top: 5%;
            animation:1s ease 2s normal forwards 1 fadein;
            opacity:0;
        }
    
        #four {
            padding-top: 5%;
            animation:1s ease 3s normal forwards 1 fadein;
            opacity:0;
        }

        @media (max-width: 768px) {
            max-width: 75%;
            p {
                font-size: 25px;
            }
        }
        
        @media (min-width: 767px) {
            max-width: 42%;
            p {
                font-size: calc(1.5vw);
            }
        }
    }

    #five {
        text-align: center;
        font-size: 50px;
        padding-top: 5%;
        animation:1s ease 5s normal forwards 1 fadein;
        opacity:0;

    }

    @keyframes fadein{from{opacity:0}
    to{opacity:1}
    }





`



class Landing extends Component {
    render() {
        return (
            <StyledContainer>
                <section>
                    <div id="one">
                        <p>Hi, I'm Prathik! 👋</p>
                    </div>
                    <div id="two">
                        <p>I'm a Computer Science student at the University of Michigan 〽️ with a passion for software development and design.</p>
                    </div>
                    <div id="three">
                        <p>I'm currently working at <a href="https://www.steelcase.com/" target="_blank">Steelcase 🛋️</a> on technologies to streamline storage and input of product data.</p>
                    </div>
                    <div id="four">
                        <p>You can check out some of my projects and experiences below, or on 
                            my <a href='https://github.com/prathikmurthy' target='_blank'>Github 🖥️</a> or <a href='https://www.linkedin.com/in/prathikmurthy/' target='_blank'>LinkedIn 💼</a></p>
                    </div>
                </section>
                <div id="five">
                ⬇
                </div>
            </StyledContainer>
        );
    }
}

export default Landing;

