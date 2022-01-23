import { Contact } from "../pattern/Contact"
import { GrobalStyles } from "../../styles/Globals.styled";
import { NavBar } from "../pattern/NavBar"
import { Name, AboutImg, AboutImgArea, AboutMessage, AboutPageWrapper, AboutTitle, Introduce, Myself, AboutP, SectionTitle } from "./AboutPage.styled";
import { ThemeProvider } from "styled-components"
import { theme, darkTheme } from "../../styles/Globals.styled"
import { useSetTheme } from "../../../hooks/useSetTheme";
import { MdModeNight, MdWbSunny } from "react-icons/md";
import { ModeBtn } from "../../layout/Home/Hero.styled";
import { FaHtml5, FaSass } from "react-icons/fa";


export const AboutPage = () => {
    const {modeTheme, setNextMode} = useSetTheme()
    return(
        <>
        <GrobalStyles />
        <ThemeProvider theme={ modeTheme === 'light' ? theme : darkTheme}>
        <NavBar/>
        <AboutPageWrapper>
        <ModeBtn onClick={() => setNextMode(modeTheme)}>
            {modeTheme === 'light' ?
              <MdModeNight size={'25px'} color={"#594a4e"} />
              :
              <MdWbSunny size={'25px'} color={"#fffffe"} />
              }
          </ModeBtn>
        <AboutTitle>About Me</AboutTitle>
        <Introduce>
        <Myself>
        <Name>Shiho Kazama</Name>
        <AboutP>
            Hello! My name is Shiho and I enjoy creating things that live on the internet. 
            I'm a front-end developer based in Vancouver.
        </AboutP>
        <SectionTitle>Passionate about learning!</SectionTitle>
        <AboutP>
            I have always liked to learn new things and also liked to develop something using a computer. 
            I created movies when I was a high school student and I've learned multi-media at university in Japan. 
            I studied web development at CICCC, I realized about I like learning and developing the web. A web developer is my dream job because I'm a person who likes to learn new things!
            I mostly enjoy working with Javascript. Especially, React JS. Currently, I'm hardly learning TypeScript.I have a solid knowledge of basic front-end development, I continue to learn further skillsets as a front-end developer.
        </AboutP>
        <SectionTitle>Bachelor of Multi-media.</SectionTitle>
        <AboutP>
            As mentioned above, I  graduated with a Bachelor of Multi-media major at a University in Japan. So, In addition to web development,  I can edit videos, photos, make logos, and make basic web designs. 
            All my projects you can see on this website "WORK" page I designed.  
            I've gotten a scholarship at University since my grades were at the top.
        </AboutP>
        <SectionTitle>Skillsets</SectionTitle>
            <FaHtml5 />
            <FaSass />
        </Myself>
        <AboutImgArea href="resume">
        <AboutImg src="/img/about.jpg" alt="myphoto" />
        <AboutMessage>View my resume</AboutMessage>
        </AboutImgArea>
        </Introduce>
        </AboutPageWrapper>
        <Contact  modeTheme={modeTheme} />
        </ThemeProvider>
        </>
    )
}