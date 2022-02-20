import { Contact } from '../pattern/Contact'
import { GrobalStyles } from '../../styles/Globals.styled'
import { NavBar } from '../pattern/NavBar'
import {
  Interest,
  Highlight,
  Skill,
  Skills,
  Profile,
  Name,
  AboutImg,
  AboutImgArea,
  AboutMessage,
  AboutPageWrapper,
  AboutTitle,
  Introduce,
  Myself,
  AboutP,
  SectionTitle,
  LikeThing,
  ClickText,
} from './AboutPage.styled'
import { ThemeProvider } from 'styled-components'
import { theme, darkTheme } from '../../styles/Globals.styled'
import { useSetTheme } from '../../../hooks/useSetTheme'
import { MdModeNight, MdWbSunny } from 'react-icons/md'
import { ModeBtn, ModeBtnWrapperAbout } from '../../layout/Home/Hero.styled'
import {
  SiGithub,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
} from 'react-icons/si'
import Typewriter from 'typewriter-effect'
import { useNavigate } from 'react-router-dom'
import { BackBtn } from '../Projects/Detail.styled'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { AboutPSpan } from './AboutPage.styled'
import { AboutLiSpan } from '../Home/About.styled'

export const AboutPage = () => {
  const { modeTheme, setNextMode } = useSetTheme()
  const width = window.innerWidth
  const navigate = useNavigate()

  return (
    <>
      <GrobalStyles />
      <ThemeProvider theme={modeTheme === 'light' ? theme : darkTheme}>
        <NavBar />
        <AboutPageWrapper>
          <ModeBtnWrapperAbout>
            <ModeBtn onClick={() => setNextMode(modeTheme)}>
              {modeTheme === 'light' ? (
                <MdModeNight size={width > 768 ? '25px' : '20px'} color={'#594a4e'} />
              ) : (
                <MdWbSunny size={width > 768 ? '25px' : '20px'} color={'#fffffe'} />
              )}
            </ModeBtn>
          </ModeBtnWrapperAbout>
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
                Hello! My name is Shiho. I enjoy creating things that live on the internet. I'm a{' '}
                <Highlight>front-end</Highlight> developer based in Vancouver.
                <Interest>
                  <LikeThing>I'm Interrested in</LikeThing>
                  <LikeThing>
                    <Typewriter
                      options={{
                        strings: [
                          'Web development.',
                          'Design.',
                          'New things.',
                          'Education.',
                          'Cafes.',
                          'Youtube.',
                          'Social media.',
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </LikeThing>
                </Interest>
              </AboutP>
              <SectionTitle>Skillsets</SectionTitle>
              <Skills>
                <Skill>
                  HTML5
                  <SiHtml5 />
                </Skill>
                <Skill>
                  CSS3
                  <SiCss3 />
                </Skill>
                <Skill>
                  Sass
                  <SiSass />
                </Skill>
                <Skill>
                  TailwindCSS
                  <SiTailwindcss />
                </Skill>
                <Skill>
                  BootStrap
                  <SiBootstrap />
                </Skill>
                <Skill>
                  Javascript(ES6)
                  <SiJavascript />
                </Skill>
                <Highlight>
                  <Skill>
                    React
                    <SiReact />
                  </Skill>
                </Highlight>
                <Skill>
                  Redux
                  <SiRedux />
                </Skill>
                <Skill>
                  TypeScript
                  <SiTypescript />
                </Skill>
                <Skill>
                  GitHub
                  <SiGithub />
                </Skill>
                <Skill>
                  Node.js
                  <SiNodedotjs />
                </Skill>
                <Skill>
                  MongoDB
                  <SiMongodb />
                </Skill>
              </Skills>
            </Profile>
            <Myself>
              <SectionTitle>My Story - Passionate about creativity!</SectionTitle>
              <AboutP>
                <AboutPSpan>Why did I decide to aim to be a web developer?</AboutPSpan>
               I have always liked to learn new things and also liked to develop something using a computer since
                I was a child. I've learned multi-media at university. I got a scholarship because my school record was
                top-level.
             
                <AboutPSpan>The first job made me feel something is out of place.</AboutPSpan>
               
                After graduated university, I've worked at a famous car manufacturing company's customer service
                department. It wasn't related to my interest however it is considered a good thing to join a big company
                in Japan, so I worked there. I've worked hard so that I got some awards from the customer satisfaction
                survey. I was pleased to help customers however I also wanted to be someone who could tell people what I
                am without having to say the name of the company.
      
                <AboutPSpan>I am NOW...</AboutPSpan>
             
                Therefore, I decided to change my carrier because I like creative things, challenging jobs! I studied
                web development at Cornerstone International Community College of Canada. I was sure I like learning and
                developing the web. I like the fact that I can see my skills clearly stepping up. Now, I mostly enjoy
                working with Javascript. Especially,<AboutLiSpan>ReactJS</AboutLiSpan> . And currently, I'm learning hard <AboutLiSpan>TypeScript</AboutLiSpan> . I used
                Typescript on this portfolio. I have a solid knowledge of basic front-end development, I continue to
                learn further skillsets as a professional front-end developer.
              </AboutP>
            </Myself>
          </Introduce>
          <BackBtn as={motion.button} whileHover={{ scale: 1.1 }} onClick={() => navigate(-1)}>
            <IoArrowBackCircleOutline
              size={width > 768 ? '40px' : '30px'}
              color={modeTheme === 'light' ? '#594a4e' : '#232946'}
            />
          </BackBtn>
        </AboutPageWrapper>
        <Contact modeTheme={modeTheme} />
      </ThemeProvider>
    </>
  )
}
