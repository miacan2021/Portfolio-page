import { Contact } from "../pattern/Contact"
import { GrobalStyles } from "../../styles/Globals.styled";
import { NavBar } from "../pattern/NavBar"
import { Interest, Highlight, Skill, Skills, Profile, Name, AboutImg, AboutImgArea, AboutMessage, AboutPageWrapper, AboutTitle, Introduce, Myself, AboutP, SectionTitle, LikeThing, ClickText } from "./AboutPage.styled";
import { ThemeProvider } from "styled-components"
import { theme, darkTheme } from "../../styles/Globals.styled"
import { useSetTheme } from "../../../hooks/useSetTheme";
import { MdModeNight, MdWbSunny } from "react-icons/md";
import { ModeBtn } from "../../layout/Home/Hero.styled";
import { SiGithub, SiHtml5, SiTailwindcss, SiCss3, SiSass, SiBootstrap, SiJavascript, SiReact, SiRedux, SiTypescript, SiNodedotjs, SiMongodb} from "react-icons/si";
import Typewriter from 'typewriter-effect';


export const AboutPage = () => {
    const {modeTheme, setNextMode} = useSetTheme()
    const width = window.innerWidth;

    return(
        <>
        <GrobalStyles />
        <ThemeProvider theme={ modeTheme === 'light' ? theme : darkTheme}>
        <NavBar/>
        <AboutPageWrapper>
        <ModeBtn onClick={() => setNextMode(modeTheme)}>
            {modeTheme === 'light' ?
              <MdModeNight size={width > 768 ? '25px': '20px'} color={"#594a4e"} />
              :
              <MdWbSunny size={width > 768 ? '25px': '20px'} color={"#fffffe"} />
              }
          </ModeBtn>
        <AboutTitle>About Me</AboutTitle>
        <Introduce>
        <Profile>
        <ClickText>\\Click Me!//</ClickText>
        <AboutImgArea href="resume">
        <AboutImg src="img/about.jpg" alt="myphoto" />
        <AboutMessage>View my resume</AboutMessage>
        </AboutImgArea>
        <Name>Shiho Kazama</Name>
        <AboutP>
            Hello! My name is Shiho. I enjoy creating things that live on the internet. 
            I'm a <Highlight>front-end</Highlight> developer based in Vancouver.
            <Interest>
            <LikeThing>
            I'm Interrested in
            </LikeThing>
            <LikeThing>
            <Typewriter
            options={{
                strings: ['Web development.', 'Design.', 'New things.', 'Education.', 'Cafes.', 'Youtube.', 'Social media.'],
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
           <Skill>TypeScript<SiTypescript /></Skill><Skill>GitHub<SiGithub /></Skill><Skill>Node.js<SiNodedotjs /></Skill><Skill>MongoDB<SiMongodb /></Skill>
        </Skills>
        </Profile>
        <Myself>
        <SectionTitle>My Story - Passionate about creativity!</SectionTitle>
        <AboutP>
            I have always liked to learn new things and also liked to develop something using a computer since I was a child. I had my website when I was a junior high. I created movies when I was a high school student. I've learned multi-media at university. I got a scholarship because my school record was top-level.
            After graduated university, I've worked at a famous car manufacturing company's customer service department as an admin and customer support operator for four years.
            I got a new face award in my first year at work because I was a fast learner. I could handle working like a senior employee in my first year.
            Later also, I got another award two years in a row from the customer satisfaction survey.
            I was pleased to help customers however I sometimes felt unsatisfied with not challenging work.
            I also wanted to be someone who could tell people what I am without having to say the name of the company.
            It was always the information on websites and web services (SNS, etc.) that helped me solve my problems.

            Therefore, I decided to change my carrier because I like creative things, challenging jobs!
            I studied web development at Cornerstone International Community College of Canada.
            I was sure  I like learning and developing the web. 
            A web developer is my dream job because I'm a person who likes to learn new things! 
            I also like the fact that I can see my skills clearly stepping up. 

            Now, I mostly enjoy working with Javascript. Especially, ReactJS. And currently, I'm learning hard TypeScript. I used Typescript on this portfolio.  I have a solid knowledge of basic front-end development, I continue to learn further skillsets as a professional front-end developer.
            I am eager to participate in making websites or services that help people / useful for people, looking forward to it.

        </AboutP>
        </Myself>
        </Introduce>
        </AboutPageWrapper>
        <Contact  modeTheme={modeTheme} />
        </ThemeProvider>
        </>
    )
}