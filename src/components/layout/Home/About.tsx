import { ThemeProvider } from "styled-components"
import { Button } from "../pattern/Button"
import { theme } from "../../styles/Globals.styled"
import { AboutH1, AboutLi, AboutLiSpan, AboutUl, AboutWrapper, ButtonCeter } from "./About.styled"

export const About = () => {
    return(
        <ThemeProvider theme={theme}>
        <AboutWrapper>
        <AboutH1>No goal in learning. I'll never stop learning.</AboutH1>
        <AboutUl>
            <AboutLi>
            <AboutLiSpan>Passionate about web development</AboutLiSpan>
            <br/>I am a front-end developer who is eager to learn about new technologies.
            </AboutLi>
            <AboutLi>
            <AboutLiSpan>High potential as a developer</AboutLiSpan>
            <br/>I'm pleased to code, design, google about new things, solve problems. 
            </AboutLi>
            <AboutLi>
            <AboutLiSpan>Bachelor of multi-media</AboutLiSpan>
            <br />I've had a bachelor of multi-media 6 years ago in Japan. I have knowledge about not only web development but also editing videos, photos, graphics, so on and so forth. Now, I'm furthering my professional web development studies at Cornerstone International Community College of Canada. I’m looking for a job as a front-end developer.
            </AboutLi>
        </AboutUl>
        <ButtonCeter>
        <Button title={'ABOUT ME'}></Button>
        </ButtonCeter>
        </AboutWrapper>
        </ThemeProvider>
    )
}