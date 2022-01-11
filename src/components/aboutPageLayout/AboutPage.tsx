import { Contact } from "../layout/Contact"
import { GrobalStyles } from "../styles/Globals.styled";
import { NavBar } from "../layout/NavBar"
import { AboutImg, AboutImgArea, AboutMessage, AboutPageWrapper, AboutTitle, Introduce, Myself } from "./AboutPage.styled";
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/Globals.styled"
import { AboutH1 } from "../layout/About.styled"


export const AboutPage = () => {
    return(
        <>
        <GrobalStyles />
        <NavBar/>
        <ThemeProvider theme={theme}>
        <AboutPageWrapper>
        <AboutTitle>About Me</AboutTitle>
        <Introduce>
        <Myself>
        <AboutH1>Shiho Kazama</AboutH1>
        <p>Hello! My name is Shiho and I enjoy creating things that live on the internet. 
            I'm a front-end developer based in Vancouver.</p>
        </Myself>
        <AboutImgArea href="resume">
        <AboutImg src="/img/about.jpg" alt="myphoto" />
        <AboutMessage>View my resume</AboutMessage>
        </AboutImgArea>
        </Introduce>
        </AboutPageWrapper>
        <Contact />
        </ThemeProvider>
        </>
    )
}