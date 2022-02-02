import { useState, useCallback } from "react"
import { useNavigate } from 'react-router-dom'
import { GrobalStyles } from "../../styles/Globals.styled"
import { NavBar } from "../pattern/NavBar"
import { ThemeProvider } from "styled-components"
import { theme, darkTheme } from "../../styles/Globals.styled"
import { useSetTheme } from "../../../hooks/useSetTheme"
import { ContentTitle, ContentWarapper, HoverMsg, Line, Top, TopImg, SubImg, 
  Section, TextSection, SectionRev, TextH1, TextP, DescSection, Content, BackBtn } 
  from "./Detail.styled"
import { ModeBtn } from "../Home/Hero.styled"
import { MdModeNight, MdWbSunny } from "react-icons/md"
import Data from '../../../ProjectData.json'
import { Skills, Skill } from "../Projects/Detail.styled"
import { IoArrowForwardCircleOutline } from "react-icons/io5"
import { motion } from 'framer-motion'
import { ProjectLinks, ProjectLink } from "../Work/WorkCard.styled"
import { GoMarkGithub, GoBrowser } from "react-icons/go"

export const FocusTube = () => {
  const { modeTheme, setNextMode } = useSetTheme()
  const data = Data.projects.filter(project => project.slug === 'focustube')[0]
  const [hover, setHover] = useState<boolean>(false)
  let width = window.innerWidth;
  const handleHover = useCallback(
      () => {
         setHover(prev => !prev)
      },
      []
      )
    const navigate = useNavigate();
  return(
    <>
    <GrobalStyles />
    <ThemeProvider theme={ modeTheme === 'light' ? theme : darkTheme}>
    <Content>
    <NavBar />
    <ContentWarapper>
      <ContentTitle>{data.title}</ContentTitle>
      <Line />
      <ModeBtn onClick={() => setNextMode(modeTheme)}>
            {modeTheme === 'light' ?
              <MdModeNight size={width > 768 ? '25px': '20px'} color={"#594a4e"} />
              :
              <MdWbSunny size={width > 768 ? '25px': '20px'} color={"#fffffe"} />
              }
      </ModeBtn>
         <Skills>
            {data.skills.map((skill,i)=>(
                 <Skill key={i}>{skill}</Skill>
                ))}
          </Skills>
          <Top onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <HoverMsg>\\Hover Me//</HoverMsg>
                { hover ?
                    <TopImg src={data.gif} alt="project_featured_image" />
                    :
                    <TopImg src={data.thumbnail} alt="project_featured_image" />
                }
          </Top>
          <ProjectLinks>
                <ProjectLink href={data.github} target="blank"><GoMarkGithub size={width > 768 ? '30px': '25px'} color={"#594a4e"} /></ProjectLink>
                <ProjectLink href={data.url} target="blank"><GoBrowser size={width > 768 ? '30px': '25px'} color={"#594a4e"} /></ProjectLink>
           </ProjectLinks>
          <Line />
          <Section>
            <TextSection>
            <TextH1>Story - </TextH1>
            <TextP>
             I like watching Youtube and I tend to waste my time watching Youtube.
             So, when I should study but I'd like to watch Youtube,
             I search "Study with me" videos on Youtube and then try to focus on my study. 
             Youtube has a good algorithm that can analyze which videos are users wants to watch. Unfortunately, If I decided to study with "Study with me" videos, recommended videos by Youtube tend to disturb my study. 
             For this reason, I created this website FocusTube!
            </TextP>
            </TextSection>
            <SubImg src="/img/focustube/logo.png" alt="siteimage" />
            </Section>
            <Line />
            <SectionRev>
            <TextSection>
            <TextH1>Features - YouTube Data API v3</TextH1>
            <TextP>
            Used YouTube Data API v3 to fetch video data.
            It has limit to provide information like video title, descriptopn so on and so fourth.
            During I was creating this web site, I saw error that is acheve limit number.
            I added error handling code just in case.
            </TextP>
            </TextSection>
            <SubImg src="/img/focustube/about-1.png" alt="siteimage" />
            </SectionRev>
            <Section>
            <TextSection>
            <TextH1>Features - Favourite list function using Redux</TextH1>
            <TextP>
            Users can add videos to a favourite video list!
            On My fav page, user can see all videos they added to the list and they can remove one by one or all by use reset button or hearts icon. 
            Users can also handle favourite videos on the fav list, check videos and delete on the fav list button on the navbar(only over laptop size provided).
            The list contents are saved on local storage!
            </TextP>
            </TextSection>
            <SubImg src="/img/focustube/about-2.png" alt="siteimage" />
            </Section>
            <SectionRev>
            <TextSection>
            <TextH1>Features - Wherever can search videos </TextH1>
            <TextP>
            To add a search box on the navigation bar, users can search videos everywhere!
            It was the hardest part that I created.
            I was confused about how to handle search value and how to show it on the home page.
            I used react-router the first time but it can be rendered the page when the page changes. I realized that when the page renders, search results are gone!
            So, I changed my mind, I created a navigation bar like a tab.
            And then, I successfully change the tab to the Home page and show the result of the search wherever on the website.
            </TextP>
            </TextSection>
            <SubImg src="/img/focustube/about-3.png" alt="siteimage" />
            </SectionRev>
            <Line />
            <DescSection>
            <TextH1>Description - </TextH1>
            <TextP>
            “Youtube Data API v3” & “Redux” project. On this website, we can control our favourite videos list easily.
             We also search videos from the search bar on this website.
            </TextP>
          </DescSection>
          <DescSection>
            <TextH1>Hardest part - </TextH1>
            <TextP>
           i'll add here something.....
            </TextP>
          </DescSection>
          <BackBtn as={motion.button} whileHover={{ scale: 1.1 }} onClick={() => navigate(-1)}><IoArrowForwardCircleOutline size={width > 768 ? '40px': '30px'}  color={modeTheme === 'light' ? "#594a4e" : "#232946"} /></BackBtn>
    </ContentWarapper>
    </Content>
    </ThemeProvider>
    </>
    )
};

