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
  const width = window.innerWidth;
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
            I like watching Youtube and I tend to waste my time watching Youtube. So, when I should study but I'd like to watch Youtube, I search "Study with me" videos on Youtube and then try to focus on my study. Youtube has a good algorithm that can analyze which videos are users wants to watch. When I decided to study with "Study with me" videos, recommended videos by Youtube tend to disturb my study. For this reason, I created this website FocusTube that just search and show up "Study with me" videos!            </TextP>
            </TextSection>
            <SubImg src="/img/focustube/logo.png" alt="siteimage" />
            </Section>
            <Line />
            <SectionRev>
            <TextSection>
            <TextH1>Features - YouTube Data API v3</TextH1>
            <TextP>
            Used YouTube Data API v3 to fetch video data.
            I've already incorporated the query keyword "study with me" on codes. It will be updated "study with me" + "new keywords (ex: "Pomodoro", "Harvard", "Tokyo") "when users search using the search bar.
            This API has a limit to provide information like video title, description so on and so forth. During I was creating this website, I saw an error that reaches the limit number. I added an error-handling code just in case.
            </TextP>
            </TextSection>
            <SubImg src="/img/focustube/about-1.png" alt="siteimage" />
            </SectionRev>
            <Section>
            <TextSection>
            <TextH1>Features - Favourite list function using Redux</TextH1>
            <TextP>
            Users can add videos to a favourite video list! 
            On "My fav page" users can see all videos they added to the list and they can remove them. Users can also handle favourite videos on the fav list (only over laptop size provided). The list contents are saved on local storage.
            </TextP>
            </TextSection>
            <SubImg src="/img/focustube/about-2.png" alt="siteimage" />
            </Section>
            <SectionRev>
            <TextSection>
            <TextH1>Features - Wherever can search videos </TextH1>
            <TextP>
            To add a search box on the navigation bar, users can search videos everywhere! After the search value submits, the page would be back to the home page and show the result videos of the search.
            </TextP>
            </TextSection>
            <SubImg src="/img/focustube/about-3.png" alt="siteimage" />
            </SectionRev>
            <Line />
            <DescSection>
            <TextH1>Description</TextH1>
            <TextP>
              A project which used Youtube Data API v3" & " Redux".
              On this website, we can control our favourite videos list easily.
              I tried to use "Redux" for the favourite list CRUD function. 
              The Data synchronize Redux store data and would be stored in local storage.
              I was not only code but also design. On this page, I try to make it simple not to disturb users' time.
            </TextP>
          </DescSection>
          <DescSection>
            <TextH1>Challenging part</TextH1>
            <TextP>
              The search bar was the hardest part for me. I was confused about how to handle a searched value and how to show the result of the search on the home page. 
              I used "react-router" plugin the first time. However, It'll render the page when the view page changes. 
              I realized that when the page renders, search results are gone! 
              So, I changed my mind, I created a navigation bar like a TAB. And then, I successfully change the tab to the home page and show the result of the search wherever on the website.
            </TextP>
          </DescSection>
          <BackBtn as={motion.button} whileHover={{ scale: 1.1 }} onClick={() => navigate(-1)}><IoArrowForwardCircleOutline size={width > 768 ? '40px': '30px'}  color={modeTheme === 'light' ? "#594a4e" : "#232946"} /></BackBtn>
    </ContentWarapper>
    </Content>
    </ThemeProvider>
    </>
    )
};

