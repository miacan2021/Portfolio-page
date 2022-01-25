import { Contact } from "../pattern/Contact"
import { GrobalStyles } from "../../styles/Globals.styled";
import { NavBar } from "../pattern/NavBar"
import { Interest, Highlight, Skill, Skills, Profile, Name, AboutImg, AboutImgArea, AboutMessage, AboutPageWrapper, AboutTitle, Introduce, Myself, AboutP, SectionTitle, LikeThing, ClickText } from "./AboutPage.styled";
import { ThemeProvider } from "styled-components"
import { theme, darkTheme } from "../../styles/Globals.styled"
import { useSetTheme } from "../../../hooks/useSetTheme";
import { MdModeNight, MdWbSunny } from "react-icons/md";
import { ModeBtn } from "../../layout/Home/Hero.styled";
import { SiHtml5, SiTailwindcss, SiCss3, SiSass, SiBootstrap, SiJavascript, SiReact, SiRedux, SiTypescript, SiNodedotjs, SiMongodb} from "react-icons/si";
import Typewriter from 'typewriter-effect';


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
        <Profile>
        <ClickText>\\Click Me!//</ClickText>
        <AboutImgArea href="resume">
        <AboutImg src="/img/about.jpg" alt="myphoto" />
        <AboutMessage>View my resume</AboutMessage>
        </AboutImgArea>
        <Name>Shiho Kazama</Name>
        <AboutP>
            Hello! My name is Shiho and I enjoy creating things that live on the internet. 
            I'm a <Highlight>front-end</Highlight> developer based in Vancouver.
            <Interest>
            <LikeThing>
            I'm Interrested in
            </LikeThing>
            <LikeThing>
            <Typewriter
            options={{
                strings: ['Web development.', 'Design.', 'new things.',  'EdTech.', 'AgriTech.', 'MedTech.', 'BeautyProducts.', 'cafes.', 'animals.', 'Anime.', 'Youtube.'],
                autoStart: true,
                loop: true,
            }}
            />
            </LikeThing>     
        </Interest>
        </AboutP>
        <SectionTitle>Skillsets</SectionTitle>
        <Skills>
           <Skill>HTML5<SiHtml5 /></Skill><Skill>CSS3<SiCss3 /></Skill><Skill>Sass<SiSass /></Skill><Skill>TailwindCSS<SiTailwindcss /></Skill>
           <Skill>BootStrap<SiBootstrap /></Skill>
           <Skill>Javascript(ES6)<SiJavascript /></Skill><Highlight><Skill>React<SiReact /></Skill></Highlight><Skill>Redux<SiRedux /></Skill>
           <Skill>TypeScript<SiTypescript /></Skill><Skill>Node.js<SiNodedotjs /></Skill><Skill>MongoDB<SiMongodb /></Skill>
        </Skills>
        </Profile>
        <Myself>
        <SectionTitle>Passionate about learning!</SectionTitle>
        <AboutP>
            I have always liked to learn new things and also liked to develop something using a computer. 
            I created movies when I was a high school student and I've learned multi-media at university in Japan. 
            <Highlight>I studied web development at Cornerstone International Community College of Canada,</Highlight> I realized about I like learning and developing the web. A web developer is my dream job because I'm a person who likes to learn new things!
            I mostly <Highlight>enjoy working with Javascript.</Highlight>  Especially, <Highlight>React JS.</Highlight> Currently, I'm hardly learning <Highlight>TypeScript.</Highlight> I have a solid knowledge of basic front-end development, I continue to learn further skillsets as a front-end developer.
        </AboutP>
        <SectionTitle>Bachelor of Multi-media.</SectionTitle>
        <AboutP>
            As mentioned above, I graduated with a <Highlight>Bachelor of Multi-media major at a University in Japan.</Highlight> So, In addition to web development,  I can edit videos, photos, make logos, and make basic web designs. 
            All my projects you can see on this website "WORK" page I designed.  
            I've gotten a scholarship at University since my grades were at the top. <Highlight>GPA was 4.2.</Highlight>
        </AboutP>
        </Myself>
        </Introduce>
        </AboutPageWrapper>
        <Contact  modeTheme={modeTheme} />
        </ThemeProvider>
        </>
    )
}