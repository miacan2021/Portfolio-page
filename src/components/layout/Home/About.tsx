import { Button } from "../pattern/Button"
import { AboutH1, AboutLi, AboutLiSpan, AboutUl, AboutWrapper, ButtonCeter } from "./About.styled"
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'

export const About = () => {
    return(
        <AboutWrapper>
         <AboutH1><Typewriter
            options={{
                strings: ['My name is', 'SHIHO KAZAMA', 'I am', 'FRONT-END DEVELOPER'],
                autoStart: true,
                loop: true,
            }}
            /></AboutH1> 
        <AboutH1>No goal in learning. I'll never stop learning.</AboutH1>
        <AboutUl>
            <AboutLi>
            <AboutLiSpan>Passionate about web development</AboutLiSpan>
            <br/>I am a front-end developer who is eager to learn about new technologies.
            </AboutLi>
            <AboutLi>
            <AboutLiSpan>High potential as a developer</AboutLiSpan>
            <br/>I'm pleased to code, learn about new things, solve problems.
            </AboutLi>
            <AboutLi>
            <AboutLiSpan>Bachelor of Multi-media</AboutLiSpan>
            <br />I've had a bachelor of multi-media. Now, I'm furthering my professional web development studies at Cornerstone International Community College of Canada. I’m looking for a job as a front-end developer.
            </AboutLi>
        </AboutUl>
        <ButtonCeter>
        <Link to='/about'><Button title={'ABOUT ME'}></Button></Link> 
        </ButtonCeter>
        </AboutWrapper>
    )
}