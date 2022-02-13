import { useState, useCallback } from "react"
import { useNavigate } from 'react-router-dom'
import { GrobalStyles } from "../../styles/Globals.styled"
import { NavBar } from "../pattern/NavBar"
import { ThemeProvider } from "styled-components"
import { theme, darkTheme } from "../../styles/Globals.styled"
import { useSetTheme } from "../../../hooks/useSetTheme"
import { ContentTitle, ContentWarapper, HoverMsg, Line, Top, TopImg, SubImg, 
  Section, TextSection, SectionRev, TextH1, TextP, DescSection, Content, BackBtn, DescHead } 
  from "./Detail.styled"
import { ModeBtn } from "../Home/Hero.styled"
import { MdModeNight, MdWbSunny } from "react-icons/md"
import Data from '../../../ProjectData.json'
import { Skills, Skill } from "../Projects/Detail.styled"
import { IoArrowBackCircleOutline } from "react-icons/io5"
import { motion } from 'framer-motion'
import { ProjectLinks, ProjectLink } from "../Work/WorkCard.styled"
import { GoMarkGithub, GoBrowser } from "react-icons/go"


export const Cafe = () => {
  const { modeTheme, setNextMode } = useSetTheme()
  const data = Data.projects.filter(project => project.slug === 'cafe-van')[0]
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
            <TextH1>Story</TextH1>
            <TextP>
            I like cafes, sometimes I use them for study, sometimes I use them for writing my blog.
            When I try to find cafes in Vancouver that I've never been to, I always take much time to search which cafe is fit for working or has outlets and Wi-Fi.
            So, I decided to create a website we can search cafes that are suited for work or study.
            The design was created to convey a comfortable atmosphere.
            </TextP>
            </TextSection>
            <SubImg src="/img/van-cafe/about-1.png" alt="cafesiteimage" />
            </Section>
            <Line />
            <SectionRev>
            <TextSection>
            <TextH1>Features - Search section</TextH1>
            <TextP>
              Users can search cafes from areas or a map.
              On the area search page, we can see a list of cafes information in the area.
              On the map search page, we can find a cafe on the map and access the cafe's detail page or open Google Maps.
            </TextP>
            </TextSection>
            <SubImg src="/img/van-cafe/about-4.png" alt="cafesiteimage" />
            </SectionRev>
            <Section>
            <TextSection>
            <TextH1>Features - Send section</TextH1>
            <TextP>
            Users can send information about cafes that fit for work.
            The information would be saved on WordPress is used as a headless CMS.
            </TextP>
            </TextSection>
            <SubImg src="/img/van-cafe/about-3.png" alt="cafesiteimage" />
            </Section>
            <Line />
            <DescSection>
            <TextH1>Description</TextH1>
            <DescHead>1 - Using Next.js for the front-end and WordPress as a headless CMS.</DescHead>
            <TextP>
            I used WordPress as part of the Jamstack architecture in a database-like fashion.
            </TextP>
            <DescHead>2 - Fetch and Post data to WordPress</DescHead>
            <TextP>
            You might think why you used WordPress. As you know, WordPress is the most famous CMS in the world. They're supporting some kinds of languages so I thought it good to know how to use WordPress as a headless CMS.
            'WP GraphQL' was used for getting data and sending data to WordPress. 'WordPress REST API' is to send 'featured photos' to WordPress because WP GraphQL hasn't supported sending images yet.
            I regretted a bit I had to search WP GraphQL is supporting all functions I need. However, I've used 'WordPress REST API before so I wanted to try different techniques. I could understand to use GraphQL what REST API would be fetched whole data, whereas  GraphQL can get specific data I need.
            </TextP>
            <DescHead>3 - Data Approve process</DescHead>
            <TextP>
            When users send cafe information via the form, it sends to WordPress and saved it as a draft.
             The information that users provided will show up after approval from the admin(me).
             Users just provide the Cafe's name, areas and detail inside a cafe.
             I checked the posts tab on the WordPress admin page. And then, I'll put the cafe's address, open-close time as a piece of basic information, latitude and longitude for the map search page to the custom field I've prepared. This process takes time a bit. However, I didn't want users to hesitate to post information just because It takes time and effort to fill out the form. In addition, sending information as a draft could protect the website from trolling.
            </TextP>
          </DescSection>
          <DescSection>
            <TextH1>Challenging part</TextH1>
            <TextP>
            The hardest part was the authentication part when users send information about cafes. I had no idea how to send information and an image to the WordPress admin page as a draft article since I learned just front-end development at the moment.
            Finally, I found a way to use JSON Basic Authentication plugin for authentication. I mentioned before 'WP GraphQL' doesn't support post images for now. It was also a challenging part for me to figure out the way to post featured images.
            Now, I can see information sent by users through the WordPress admin page, put extra information myself, and then It'll be published. 
            </TextP>
          </DescSection>
          <BackBtn as={motion.button} whileHover={{ scale: 1.1 }} onClick={() => navigate(-1)}><IoArrowBackCircleOutline size={width > 768 ? '40px': '30px'}  color={modeTheme === 'light' ? "#594a4e" : "#232946"} /></BackBtn>
    </ContentWarapper>
    </Content>
    </ThemeProvider>
    </>
  )
}