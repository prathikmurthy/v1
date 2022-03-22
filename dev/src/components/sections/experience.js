import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    section {
        display: flex;
        justify-content: center;

        padding: 5%;
        padding-right: 10%;
        padding-left: 20%;
    }

    #title {
        padding-right: 18%;

        border-right: 2px dashed var(--accent);
        p {
            font-size: 20px;
            color: var(--accentblue);
        }
    }

    #list {
        padding-left: 5%;
        width: 100%;
    }

    @media (max-width: 768px) {
        padding-left: 10%;
        #title {
            padding-right: 10%;
        }
    }
    
    @media (min-width: 767px) {

    }
`

const StyledWorkItem = styled.div`

    a {
        text-decoration: none;
        color: var(--accentblue);
    }

    a:hover {
        color: var(--accent);
    }
        
    #upper {
        display: flex;
        justify-content: space-between;
        padding-top: 3%;
        padding-bottom: 0;
        margin: 0;
        border: 0;
        font-size: 20px;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

    #name {
        color: var(--accentblue);
        margin: 0;
        border: 0;
    }
    #date {
        text-align: right;
        color: lightgray;
        margin: 0;
        border: 0;
        font-size: 16px;

        @media (max-width: 768px) {
            font-size: 12px;
        }
    }

    #lower {
        color: lightgray;
        ul {
            border: 0;
            margin: 0;
        }
    }

    #role {
        padding-bottom: 2%;
        font-size: 12px;
        color: gray;
    }

    #skillbox {
        display: flex;
    }

`

const StyledSkill = styled.div`
    border: 2px dashed var(--accent);
    padding: 0;
    margin: 1%;
    color: var(--accent);
    
    p {
        padding: 0;
        margin: 5px;
        text-align: center;

        @media (max-width: 768px) {
            font-size: 12px;
        }
    }

`

const StyledResume = styled.div`
    
    text-align: center;

    font-size: 20px;

    @keyframes bounce {
        0%, 12%, 75%, 100% {
          -webkit-transform: translateY(0);
          transform: translateX(0);
        }
      
        25% {
          -webkit-transform: translateY(-20px);
          transform: translateX(-20px);
        }
      
        50% {
          -webkit-transform: translateY(-10px);
          transform: translateX(20px);
        }
      }



    div {
        display: flex;
        justify-content: center;
    }

    p {
        padding: 1%;
        border: 2px solid var(--accent);
        color: var(--accent);
    }

    div:hover {
        animation: bounce 1s;
    }

    a {
        text-decoration: none;
        color: var(--accent);
    }

    

`

const Skill = ({skill}) => {
    return (
        <StyledSkill>
            <p>{skill}</p>
        </StyledSkill>
    )
}

const Workitem = ({ name, daterange, skills, role, link }) => {
    return (
        <StyledWorkItem>
            <div id="upper">
                <p id="name"><a href={link}>{name}</a></p>
                <p id="date">{daterange}</p>
            </div>
            <div id="role">{role}</div>
            <div id="lower">
                <div id="skillbox">
                    <Skill skill={skills[0]}/>
                    <Skill skill={skills[1]}/>
                    <Skill skill={skills[2]}/>
                </div>
                
            </div>
        </StyledWorkItem>
    )
}

const WorkitemNoPoints = ({ name, daterange, role, link }) => {
    return (
        <StyledWorkItem>
            <div id="upper">
                <p id="name"><a href={link}>{name}</a></p>
                <p id="date">{daterange}</p>
            </div>
            <div id="role">{role}</div>
        </StyledWorkItem>
    )
}


export default class Experience extends Component {

    render() {
        return (
            <StyledDiv>
                

                <section>
                    <div id="title">
                        <p>Experience</p>
                    </div>
                    <div id="list">
                        <WorkitemNoPoints
                            name = "Steelcase"
                            link = "https://steelcase.com"
                            role = "Web Development and Innovation Intern"
                            daterange = "2022 - Present"
                        />
                        <Workitem
                            name = "Michigan State University"
                            link = "https://msu.edu"
                            role = "Teaching Assistant - CSE 232"
                            daterange = "2021"
                            skills = {["C++", "Python", "Excel"]}
                        />
                        <Workitem
                            name = "Steelcase"
                            link = "https://steelcase.com"
                            role = "Product Data Technology Intern"
                            daterange = "2021"
                            skills = {["Python", "ABAP", "SAP"]}
                        />
                    </div>
                </section>
                <StyledResume>
                    <div>
                        <p><a href="insert-link-to-resume" target="_blank">Full Resume</a></p>
                    </div>
                </StyledResume>
            </StyledDiv>
        )

    }

}