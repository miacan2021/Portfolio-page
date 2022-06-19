import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { GrobalStyles } from '../../styles/Globals.styled'
import { NavBar } from '../pattern/NavBar'
import { ThemeProvider } from 'styled-components'
import { theme, darkTheme } from '../../styles/Globals.styled'
import { useSetTheme } from '../../../hooks/useSetTheme'
import {
  ContentTitle,
  ContentWarapper,
  HoverMsg,
  Line,
  Top,
  TopImg,
  SubImg,
  Section,
  TextSection,
  SectionRev,
  TextH1,
  TextP,
  DescSection,
  Content,
  BackBtn,
} from './Detail.styled'
import { ModeBtn, ModeBtnWrapperAbout } from '../Home/Hero.styled'
import { MdModeNight, MdWbSunny } from 'react-icons/md'
import Data from '../../../ProjectData.json'
import { Skills, Skill } from '../Projects/Detail.styled'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { ProjectLinks, ProjectLink } from '../Work/WorkCard.styled'
import { GoMarkGithub, GoBrowser } from 'react-icons/go'

export const Webeginner = () => {
  const { modeTheme, setNextMode } = useSetTheme()
  const data = Data.projects.filter((project) => project.slug === 'webeginner')[0]
  const [hover, setHover] = useState<boolean>(false)
  const width = window.innerWidth
  const handleHover = useCallback(() => {
    setHover((prev) => !prev)
  }, [])
  const navigate = useNavigate()
  return (
    <>
      <GrobalStyles />
      <ThemeProvider theme={modeTheme === 'light' ? theme : darkTheme}>
        <Content>
          <NavBar />
          <ContentWarapper>
            <ContentTitle>{data.title}</ContentTitle>
            <Line />
            <ModeBtnWrapperAbout>
              <ModeBtn onClick={() => setNextMode(modeTheme)}>
                {modeTheme === 'light' ? (
                  <MdModeNight size={width > 768 ? '25px' : '18px'} color={'#594a4e'} />
                ) : (
                  <MdWbSunny size={width > 768 ? '25px' : '18px'} color={'#fffffe'} />
                )}
              </ModeBtn>
            </ModeBtnWrapperAbout>
            <Skills>
              {data.skills.map((skill, i) => (
                <Skill key={i}>{skill}</Skill>
              ))}
            </Skills>
            <Top onMouseEnter={handleHover} onMouseLeave={handleHover}>
              <HoverMsg>\\Hover Me//</HoverMsg>
              {hover ? (
                <TopImg src={`../${data.gif}`} alt="project_featured_image" />
              ) : (
                <TopImg src={`../${data.thumbnail}`} alt="project_featured_image" />
              )}
            </Top>
            <ProjectLinks>
              <ProjectLink href={data.github} target="blank">
                <GoMarkGithub size={width > 768 ? '30px' : '25px'} color={'#594a4e'} />
              </ProjectLink>
              <ProjectLink href={data.url} target="blank">
                <GoBrowser size={width > 768 ? '30px' : '25px'} color={'#594a4e'} />
              </ProjectLink>
            </ProjectLinks>
            <Line />
            <Section>
              <TextSection>
                <TextH1>Story</TextH1>
                <TextP>
                  A communication web app for junior/entry-level or people who are aiming to be a developer. I was in a
                  tutorial hell when I was a college student. There're a lot of learning plat form these days like
                  youtube videos, Udemy, Corsera, etc... This is good but it made us hard to find good tutorials. I
                  often start one tutorial but quit to continue and then start another tutorials before I learn how to
                  study web debelopment. I called this kinds of situation is "tutorial hell". So I created this app. It
                  can post your reccomendation tutorials and comment on posts. It helps to find good web development
                  tutorials.
                </TextP>
              </TextSection>
              <SubImg src="../img/weather/about-1.png" alt="siteimage" />
            </Section>
            <Line />
            <SectionRev>
              <TextSection>
                <TextH1>Features - Dark Mode</TextH1>
                <TextP>
                  Applied 'Dark Mode' using Tailwind CSS. The first view shows whether light mode or dark mode depends
                  on the users' device setting. If users set their device light mode, it shows light mode first. If
                  users set their devices in dark mode, it shows dark mode first. If users set their devices in light
                  and dark mode, it shows light or dark mode it depends on time. And users can change the mode using the
                  button placed top-left of the website.
                </TextP>
              </TextSection>
              <SubImg src="../img/weather/about-2.png" alt="siteimage" />
            </SectionRev>
            <Section>
              <TextSection>
                <TextH1>Features - World Clock and Weekly Weather</TextH1>
                <TextP>
                  It shows the city's current day and time that users searched. It's using the timezone that I fetched.
                  Compared to Canada to Japan, japan's time is proceeding because of timezone. For example, now, Canada
                  is Nov.19, Japan is Nov.20. So, the weekly weather section should be shown from Nov.20 for the Canada
                  page and from Nov.21 for the Japan page.
                </TextP>
              </TextSection>
              <SubImg src="../img/weather/about-3.png" alt="siteimage" />
            </Section>
            <SectionRev>
              <TextSection>
                <TextH1>Features - Serverless application</TextH1>
                <TextP>
                  This is a serverless application. I wanted to learn AWS so I stared to learn from AWS amplify. It can
                  sign in/login and have basic CRUD functions.
                </TextP>
              </TextSection>
              <SubImg src="../img/weather/about-4.png" alt="siteimage" />
            </SectionRev>
            <Line />
            <DescSection>
              <TextH1>Challenging part</TextH1>
              <TextP>
                I have an experience to use GraphQL but it was hard part for me because AWS amplify is so kind of
                begginer people since they've already prepared graphQL Query/Mutation. However in my case, it takes time
                to figire out file structurte and mofdify to code can store comments.
              </TextP>
            </DescSection>
            <BackBtn as={motion.button} whileHover={{ scale: 1.1 }} onClick={() => navigate(-1)}>
              <IoArrowBackCircleOutline
                size={width > 768 ? '40px' : '30px'}
                color={modeTheme === 'light' ? '#594a4e' : '#232946'}
              />
            </BackBtn>
          </ContentWarapper>
        </Content>
      </ThemeProvider>
    </>
  )
}
