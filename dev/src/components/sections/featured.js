import React, { Component } from 'react';
import styled from 'styled-components';
import github from '../../images/github-big.png';

const StyledDiv = styled.div`
    padding-top: 5%;

    #header {
        font-size: 30px;
        text-align: center;
        font-weight: bold;
        color: var(--accentblue);
    }
`

const StyledProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10%;
    margin-top: 5%;
    margin-bottom: 5%;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
    opacity: 1;
    background-image: url('https://picsum.photos/700/500');
    background-size:cover;
    background-position: center;
    border-radius: 3%;
    transition: background-color .2s ease-out;


    :hover {
        background-color: rgba(0, 0, 0, 0.5);
    }

    #project {
        padding: 20%;
        padding-top: 5%;
        padding-bottom: 2%;
    }

    #title {
        text-align: center;
        font-size: 50px;


        @media (max-width: 768px) {
            font-size: 30px;
        }
    }

    #tag {
        text-align: center;
        font-size: 25px;
        padding-top: 5%;
        padding-bottom: 5%;

        @media (max-width: 768px) {
            font-size: 15px;
        }
    }

    #skillbox {
        padding-top: 5%;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    @keyframes fadein{from{opacity:0}
    to{opacity:1}
    }
`

const StyledSkill = styled.div`
    border: 2px dashed var(--accent);
    padding: 1%;
    margin: 1%;
    margin-left: 3%;
    margin-right: 3%;
    
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

const StyledGithubButton = styled.div`
    display: flex;
    justify-content: center;
    margin: 0px auto;
    width: auto;
    height: auto;

    padding-top: 5%;
    padding-bottom: 5%;

    a {
        display: flex;
        justify-content: center;
    }
    img {
        @media (max-width: 768px) {
            max-width: 50%;
        }
    }
`

const Skill = ({skill}) => {
    return (
        <StyledSkill>
            <p>{skill}</p>
        </StyledSkill>
    )
}

const GithubButton = ({link}) => {
    return (
        <StyledGithubButton>
            <a href={link} target="_blank"><img src={ github }></img></a>
        </StyledGithubButton>
    )
}

const Project = ({image, title, tag, link}) => {
    const skills = ['Spotify API', 'Last.fm API', 'Python']
    return (
        <StyledProject>
            <div id="project">
                <div id="title">{title}</div>
                <div id="tag">{tag}</div>
                <div id="skillbox">
                    <Skill skill={skills[0]}/>
                    <Skill skill={skills[1]}/>
                    <Skill skill={skills[2]}/>
                </div>
                <GithubButton link={link}/>
            </div>
            
        </StyledProject>
    )
}
export default class Featured extends Component {
    render() {
        return (
            <StyledDiv>
                <div id="header">Projects</div>
                <Project 
                 image = 'https://picsum.photos/900/500'
                 title = "Spotify-Last.fm Playlist Generator"
                 tag = "Automatic Spotify playlist builder using Last.fm Liked Songs" 
                 link = "https://github.com/prathikmurthy/Spotify-last.fm-Playlist-Builder"/>
            </StyledDiv>
        )
    }
}

