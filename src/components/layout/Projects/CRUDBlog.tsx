import { useState, useCallback } from "react"
import { useNavigate } from 'react-router-dom'
import { GrobalStyles } from "../../styles/Globals.styled"
import { NavBar } from "../pattern/NavBar"
import { ThemeProvider } from "styled-components"
import { theme, darkTheme } from "../../styles/Globals.styled"
import { useSetTheme } from "../../../hooks/useSetTheme"
import { ContentTitle, ContentWarapper, HoverMsg, Line, Top, TopImg, TextH1, TextP, DescSection, Content, BackBtn } 
  from "./Detail.styled"
import { ModeBtn } from "../Home/Hero.styled"
import { MdModeNight, MdWbSunny } from "react-icons/md"
import Data from '../../../ProjectData.json'
import { Skills, Skill } from "./Detail.styled"
import { IoArrowForwardCircleOutline } from "react-icons/io5"
import { motion } from 'framer-motion'
import { ProjectLinks, ProjectLink } from "../Work/WorkCard.styled"
import { GoMarkGithub, GoBrowser } from "react-icons/go"

export const CRUDBlog = () => {
  const { modeTheme, setNextMode } = useSetTheme()
  const data = Data.projects.filter(project => project.slug === 'node-mongodb')[0]
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
            <DescSection>
            <TextH1>Description - </TextH1>
            <TextP>
            I made a blog website using Node.js MongoDB and Express. 
            I also used mongoose. 
            I'll share you guys my project. 
            It was so simple one. 
            First, CRUD functions. We can make a new article, edit the article and delete the article. 
            Second, It have like-dislike button. 
            Lastly, It has comments feature. I created a comment schema using mongoose. When a new comment submits, it would be created through a comment schema that type is an object and then push to the array of articles. My article schema has a comments array. My blog doesn’t have edit and deletes features at each comment but It would be deleted from the database with the article deleted. 
            I was a complete beginner of Node.js but I could find the fun of the backend a bit through this project.
            </TextP>
          </DescSection>
          <BackBtn as={motion.button} whileHover={{ scale: 1.1 }} onClick={() => navigate(-1)}><IoArrowForwardCircleOutline size={width > 768 ? '40px': '30px'}  color={modeTheme === 'light' ? "#594a4e" : "#232946"} /></BackBtn>
    </ContentWarapper>
    </Content>
    </ThemeProvider>
    </>
    )
};

