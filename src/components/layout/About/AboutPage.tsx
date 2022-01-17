import { useSetTheme } from "../../../hooks/useSetTheme";
import { Contact } from "../pattern/Contact"
import { GrobalStyles } from "../../styles/Globals.styled";
import { NavBar } from "../pattern/NavBar"
import { AboutImg, AboutImgArea, AboutMessage, AboutPageWrapper, AboutTitle, Introduce, Myself } from "./AboutPage.styled";
import { ThemeProvider } from "styled-components"
import { theme, darkTheme } from "../../styles/Globals.styled"
import { AboutH1 } from "../Home/About.styled"


export const AboutPage = () => {
    const {modeTheme} = useSetTheme()
    return(
        <>
        <GrobalStyles />
        <NavBar/>
        <ThemeProvider theme={ modeTheme === 'light' ? theme : darkTheme}>
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