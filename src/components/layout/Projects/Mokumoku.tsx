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
  DescHead,
} from './Detail.styled'
import { ModeBtn, ModeBtnWrapperAbout } from '../Home/Hero.styled'
import { MdModeNight, MdWbSunny } from 'react-icons/md'
import Data from '../../../ProjectData.json'
import { Skills, Skill } from '../Projects/Detail.styled'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { ProjectLinks, ProjectLink } from '../Work/WorkCard.styled'
import { GoMarkGithub, GoBrowser } from 'react-icons/go'

export const Mokumoku = () => {
  const { modeTheme, setNextMode } = useSetTheme()
  const data = Data.projects.filter((project) => project.slug === 'mokumoku')[0]
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
                  <MdModeNight size={width > 768 ? '25px' : '20px'} color={'#594a4e'} />
                ) : (
                  <MdWbSunny size={width > 768 ? '25px' : '20px'} color={'#fffffe'} />
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
                  I wanted to hold Mokumoku-kai in Vancouver because I'd like to meet new people who study or work in
                  web development. Mokumoku-kai is a group of participants who gather to study, work, or read in
                  silence. It's held in the developer community in Japan. Mokumoku means "silently", Kai means
                  "meeting". It's kind of a meetup. I thought It was a good idea to create an event advertisement app
                  for Mokumoku-kai.
                </TextP>
              </TextSection>
              <SubImg src="../img/mokumoku/about.png" alt="image" />
            </Section>
            <Line />
            <SectionRev>
              <TextSection>
                <TextH1>Features - Event Calender</TextH1>
                <TextP>
                  Users can find mokumoku-kai from calender. If the event date is passed, the event card turned a darker
                  colour. And If participants are maximum people, the card shows "All booked!"
                </TextP>
              </TextSection>
              <SubImg src="../img/mokumoku/about1.png" alt="image" />
            </SectionRev>
            <Section>
              <TextSection>
                <TextH1>Features - Register</TextH1>
                <TextP>
                  Participants will submit their name and twitterID via the event detail page. This event can set
                  maximum people to join with creating new event posts. Admin can delete participants from the admin
                  page.
                </TextP>
              </TextSection>
              <SubImg src="../img/mokumoku/about2.png" alt="image" />
            </Section>
            <Line />
            <DescSection>
              <TextH1>Description</TextH1>
              <DescHead>1- This app has a CRUD function for every post.</DescHead>
              <TextP>
                Admin can control event posts from the admin page. There is an authentication layer before entering the
                admin page. This authentication layer was used Firebase.
              </TextP>
              <DescHead>2- Event page accepts posting markdown document and register</DescHead>
              <TextP>
                We can post the event page, edit it, delete it from the admin page. On the event page detail part, It
                can accept mark-down documents. So, We can post the head title, table, link at the same time.
                Participants who wanna join the event can register from the event page. They don't need sign-in, they
                just put some information on it.
              </TextP>
              <DescHead>3- UI/UX aspects</DescHead>
              <TextP>
                If the event is fully booked, It can't submit new participants' information because the button would be
                locked and shows "All booked" letters. Events calendar shows information date order. This page is
                mobile-friendly.
              </TextP>
            </DescSection>
            <DescSection>
              <TextH1>Challenging part</TextH1>
              <TextP>
                The challenging part was the participants' data handling. To show 'All booked' tag, I tried several
                ways. Even though the database was updated but the client-side didn't update. Now, I figure out to
                control using useState and useEffect.
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
