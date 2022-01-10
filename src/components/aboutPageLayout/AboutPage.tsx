import { Contact } from "../layout/Contact"
import { GrobalStyles } from "../styles/Globals.styled";
import { NavBar } from "../layout/NavBar"
import { AboutPageWrapper, AboutTitle } from "./AboutPage.styled";
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/Globals.styled"
import { AboutLi, AboutLiSpan, AboutUl} from "../layout/About.styled"


export const AboutPage = () => {
    return(
        <>
        <GrobalStyles />
        <NavBar/>
        <ThemeProvider theme={theme}>
        <AboutPageWrapper>
        <AboutTitle>About Me</AboutTitle>
        <h1>Shiho Kazama</h1>
        <p>Hello! I'm Shiho Kazama. I'm a front-end developer based in Vancouver.</p>
        </AboutPageWrapper>
        <h1>My Policy</h1>
        <h2>No goal in learning. I'll never stop learning.</h2>
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
        <Contact />
        </ThemeProvider>
        </>
    )
}