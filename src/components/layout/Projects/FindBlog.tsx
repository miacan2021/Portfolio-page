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

export const FindBlog = () => {
  const { modeTheme, setNextMode } = useSetTheme()
  const data = Data.projects.filter(project => project.slug === 'blog-search')[0]
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
            This is the first project I created using React.
            I've written articles about studying abroad and posted them on my blog for 9 months.
            In the begging, My blog didn't have many readers but I continue to post articles, it has gotten a lot of readers.
            Thankfully, I have been able to make some money from my blog.

            I decided to create a website related to this blog for this project.
            I created a website that was named 'FIND BLOG POSTS' can find articles written pieces of information users want to know.
            </TextP>
            </TextSection>
            <SubImg src="/img/blog/about-1.png" alt="siteimage" />
            </Section>
            <Line />
            <SectionRev>
            <TextSection>
            <TextH1>Features -Suggest article section</TextH1>
            <TextP>
            Suggest article section is linked to the chatbot.
            When users click a choice in the chatbot, the suggest article section would be showed articles that users interested in.
            In addition to the article block, titles will be updated by an operating chatbot.(Titles are also set on the dataset file.)
            I used 'WordPress Rest API' to get data on blog articles and I set URLs(to get data via API) at 'dataset.json' file.
            And then, I used 'useEffect' to fetch new data when the chatbot is updated.
            WordPress Rest API's URL and JSX are like this...
            I fetched six articles from blog categories related to the information selected in the chat and displayed them on the page.
            Loading dots will show when fetching datas.
            </TextP>
            </TextSection>
            <SubImg src="/img/blog/about-2.png" alt="siteimage" />
            </SectionRev>
            <Section>
            <TextSection>
            <TextH1>Features - Request article part</TextH1>
            <TextP>
            At the request article part, the form modal would be opened and then users can send a request for me.
            I can receive requests via slack.
            </TextP>
            </TextSection>
            <SubImg src="/img/blog/about-3.png" alt="siteimage" />
            </Section>
            <Line />
            <DescSection>
            <TextH1>Description - </TextH1>
            <TextP>
            add something
            </TextP>
          </DescSection>
          <DescSection>
            <TextH1>Challenging part - </TextH1>
            <TextP>
                add something
            </TextP>
          </DescSection>
          <BackBtn as={motion.button} whileHover={{ scale: 1.1 }} onClick={() => navigate(-1)}><IoArrowForwardCircleOutline size={width > 768 ? '40px': '30px'}  color={modeTheme === 'light' ? "#594a4e" : "#232946"} /></BackBtn>
    </ContentWarapper>
    </Content>
    </ThemeProvider>
    </>
    )
};

