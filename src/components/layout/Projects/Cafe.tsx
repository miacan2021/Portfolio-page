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


export const Cafe = () => {
  const { modeTheme, setNextMode } = useSetTheme()
  const data = Data.projects[0]
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
          <Line />
          <Section>
            <TextSection>
            <TextH1>Story - </TextH1>
            <TextP>
            I like cafes, sometimes I use them for study, sometimes I use them for writing my blog.
            When I try to find cafes in Vancouver that I've never been to, I always take much time to search which cafe is fit for working or has outlets and Wi-Fi.
            So, I decided to create a website we can search cafes that are suited for work or study.
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
            <TextH1>Description - </TextH1>
            <TextP>
              It was used Next.js for the front-end and WordPress as a headless CMS.  WP GraphQL was used for getting data and sending data to WordPress, WP REST API to send featured photos to WordPress because WP GraphQL hasn't supported sending images yet.
              I'd like to try different techniques so I used both, Graph QL and REST API. 
            </TextP>
            <TextP>
              When users send cafe information via the form at the bottom, it sends to WordPress and saved it as a draft.  The information that users provided will show up after approval from the admin(me).
              Users just provide the Cafe's name, areas and detail inside a cafe.
              I checked the posts tab on the WordPress admin page, and I'll check the information that the user-provided. 
            </TextP>
            <TextP>
              And then, I'll put the cafe's address, open-close time as a piece of basic information, latitude and longitude for the map search page to the custom field I've prepared.
              This process takes time a bit but I didn't want users to hesitate to post information just because It takes time and effort to fill out the form.
              In addition, sending information as a draft could protect the website from trolling.
            </TextP>
          </DescSection>
          <DescSection>
            <TextH1>Hardest part - </TextH1>
            <TextP>
              The hardest part was the authentication part when users send information about cafes. I had no idea how to send information and an image to the WordPress admin page as a draft article.
              I found the way to use JSON Basic Authentication plugin for authentication and WP GraphQL doesn't support post images for now.
              Now, I can see information sent by users through the WordPress admin page, put extra information myself, and then It'll be published.
            </TextP>
          </DescSection>
          <BackBtn as={motion.button} whileHover={{ scale: 1.1 }} onClick={() => navigate(-1)}><IoArrowForwardCircleOutline size={width > 768 ? '40px': '30px'}  color={modeTheme === 'light' ? "#594a4e" : "#232946"} /></BackBtn>
    </ContentWarapper>
    </Content>
    </ThemeProvider>
    </>
  )
}