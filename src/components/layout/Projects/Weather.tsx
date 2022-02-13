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
import { ModeBtn, ModeBtnWrapperAbout } from "../Home/Hero.styled"
import { MdModeNight, MdWbSunny } from "react-icons/md"
import Data from '../../../ProjectData.json'
import { Skills, Skill } from "../Projects/Detail.styled"
import { IoArrowBackCircleOutline } from "react-icons/io5"
import { motion } from 'framer-motion'
import { ProjectLinks, ProjectLink } from "../Work/WorkCard.styled"
import { GoMarkGithub, GoBrowser } from "react-icons/go"

export const Weather = () => {
  const { modeTheme, setNextMode } = useSetTheme()
  const data = Data.projects.filter(project => project.slug === 'weather-app')[0]
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
      <ModeBtnWrapperAbout>
      <ModeBtn onClick={() => setNextMode(modeTheme)}>
            {modeTheme === 'light' ?
              <MdModeNight size={width > 768 ? '25px': '20px'} color={"#594a4e"} />
              :
              <MdWbSunny size={width > 768 ? '25px': '20px'} color={"#fffffe"} />
              }
      </ModeBtn>
      </ModeBtnWrapperAbout>
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
            <TextH1>Story</TextH1>
            <TextP>
              I created a weather forecast web application using open weather API. It can use to know current weather where users search, weekly weather. And You can also know the current time on this app.
              I could know how to handle API on React and try to cool styling through this project.
            </TextP>
            </TextSection>
            <SubImg src="/img/weather/about-1.png" alt="siteimage" />
            </Section>
            <Line />
            <SectionRev>
            <TextSection>
            <TextH1>Features - Dark Mode</TextH1>
            <TextP>
            Applied 'Dark Mode' using Tailwind CSS. 
            The first view shows whether light mode or dark mode depends on the users' device setting. If users set their device light mode, it shows light mode first. If users set their devices in dark mode, it shows dark mode first.
            If users set their devices in light and dark mode, it shows light or dark mode it depends on time. And users can change the mode using the button placed top-left of the website.
            </TextP>
            </TextSection>
            <SubImg src="/img/weather/about-2.png" alt="siteimage" />
            </SectionRev>
            <Section>
            <TextSection>
            <TextH1>Features - World Clock and Weekly Weather</TextH1>
            <TextP>
            It shows the city's current day and time that users searched.
            It's using the timezone that I fetched.
            Compared to Canada to Japan, japan's time is proceeding because of timezone.
            For example, now, Canada is Nov.19, Japan is Nov.20. So, the weekly weather section should be shown from Nov.20 for the Canada page and from Nov.21 for the Japan page.
            </TextP>
            </TextSection>
            <SubImg src="/img/weather/about-3.png" alt="siteimage" />
            </Section>
            <SectionRev>
            <TextSection>
            <TextH1>Features - Background Image</TextH1>
            <TextP>
            Used Unsplash Source.
            When users search the city, the background image changed at the same time.
            The logic is that add a query for the city name to unsplash URL.
            I tried to use unsplash API but it takes a long time to fetch and apply for background image so I use unsplash source directly.
            It sometimes takes time to change the background image so I set the default image. It shows when the site is loading data.
            To show this loading image, the background might be like flashing but it is better than a white background.
            </TextP>
            </TextSection>
            <SubImg src="/img/weather/about-4.png" alt="siteimage" />
            </SectionRev>
            <Line />
            <DescSection>
            <TextH1>Description</TextH1>
            <TextP>
            I used two different types of API provided from "Open weather API" to handle typical weather data and the world clock and weekly forecasts.
            For adapting dark mode, I tried to use "Tailwind CSS" dark-mode function.
            The styling theme is 'Glassmorphism' which was the trend of web design in 2021. The Glassmorphism feature is like a frosted-glass effect using a background blur.
            I didn't want to be a boring web app, I made this page's background image will change with every search.
            Considering user experience, I applied a loading spinner view during fetching data. In addition, when no the city's information, it shows up a sorry comment.
            </TextP>
          </DescSection>
          <DescSection>
            <TextH1>Challenging part</TextH1>
            <TextP>
            I used 'tailwind css' for styling the whole of this project. They have dark mode classes but it was really hard to apply because of the SVG file.
            I used SVG icons. First, I imported the SVG icon for the image tag but it can't apply for dark mode. Due to the image tag, I had to import the SVG file as a component using 'React Component' to handle it like using SVG tag instead of an image tag with source attribute.
            It was a beginner-level stuck. But yet, It is worth it for me since I'm also getting better with my googling skills!
            </TextP>
          </DescSection>
          <BackBtn as={motion.button} whileHover={{ scale: 1.1 }} onClick={() => navigate(-1)}><IoArrowBackCircleOutline size={width > 768 ? '40px': '30px'}  color={modeTheme === 'light' ? "#594a4e" : "#232946"} /></BackBtn>
    </ContentWarapper>
    </Content>
    </ThemeProvider>
    </>
    )
};

