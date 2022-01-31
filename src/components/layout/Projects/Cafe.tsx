import { useState, useCallback } from "react"
import { GrobalStyles } from "../../styles/Globals.styled"
import { NavBar } from "../pattern/NavBar"
import { ThemeProvider } from "styled-components"
import { theme, darkTheme } from "../../styles/Globals.styled"
import { useSetTheme } from "../../../hooks/useSetTheme"
import { ContentTitle, ContentWarapper, HoverMsg, Line, Top, TopImg } from "./Detail.styled"
import { ModeBtn } from "../Home/Hero.styled"
import { MdModeNight, MdWbSunny } from "react-icons/md";
import Data from '../../../ProjectData.json'
import { Skills, Skill } from "../Projects/Detail.styled"

export const Cafe = () => {
  const { modeTheme, setNextMode } = useSetTheme()
  const data = Data.projects[0]

  const [hover, setHover] = useState<boolean>(false)
  const handleHover = useCallback(
      () => {
         setHover(prev => !prev)
      },
      []
      )

  return(
    <>
    <GrobalStyles />
    <ThemeProvider theme={ modeTheme === 'light' ? theme : darkTheme}>
    <NavBar />
    <ContentWarapper>
      <ContentTitle>{data.title}</ContentTitle>
      <Line />
      <ModeBtn onClick={() => setNextMode(modeTheme)}>
            {modeTheme === 'light' ?
              <MdModeNight size={'25px'} color={"#594a4e"} />
              :
              <MdWbSunny size={'25px'} color={"#fffffe"} />
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
          <section>
            <h1>Story - </h1>
            <p>
            I like cafes, sometimes I use them for study, sometimes I use them for writing my blog.
            When I try to find cafes in Vancouver that I've never been to, I always take much time to search which cafe is fit for working or has outlets and Wi-Fi.
            So, I decided to create a website we can search cafes that are suited for work or study.
            </p>
            <img src="/img/van-cafe/about-1.png" alt="cafesiteimage" />
            <h1>Features - </h1>
            <p>
              Users can search cafes from areas or a map.
              On the area search page, we can see a list of cafes information in the area.
              On the map search page, we can find a cafe on the map and access the cafe's detail page or open Google Maps.
            </p>
            <img src="/img/van-cafe/about-2.png" alt="cafesiteimage" />
            <img src="/img/van-cafe/about-4.png" alt="cafesiteimage" />
            <p>
            Users can send information about cafes that fit for work.
            The information would be saved on WordPress is used as a headless CMS.
            </p>
            <img src="/img/van-cafe/about-3.png" alt="cafesiteimage" />
            <img src="/img/van-cafe/about-5.png" alt="cafesiteimage" />
            <h1>Description</h1>
            <p>
              It was used Next.js for the front-end and WordPress as a headless CMS.  WP GraphQL was used for getting data and sending data to WordPress, WP REST API to send featured photos to WordPress because WP GraphQL hasn't supported sending images yet.
              I'd like to try different techniques so I used both, Graph QL and REST API. 
            </p>
            <p>
              When users send cafe information via the form at the bottom, it sends to WordPress and saved it as a draft.  The information that users provided will show up after approval from the admin(me).
              Users just provide the Cafe's name, areas and detail inside a cafe.
              I checked the posts tab on the WordPress admin page, and I'll check the information that the user-provided. 
            </p>
            <p>
              And then, I'll put the cafe's address, open-close time as a piece of basic information, latitude and longitude for the map search page to the custom field I've prepared.
              This process takes time a bit but I didn't want users to hesitate to post information just because It takes time and effort to fill out the form.
              In addition, sending information as a draft could protect the website from trolling.
            </p>
          </section>
          <section>
            <h1>Hardest part</h1>
            <p>
              The hardest part was the authentication part when users send information about cafes. I had no idea how to send information and an image to the WordPress admin page as a draft article.
              I found the way to use JSON Basic Authentication plugin for authentication and WP GraphQL doesn't support post images for now.
              Now, I can see information sent by users through the WordPress admin page, put extra information myself, and then It'll be published.
            </p>
          </section>
    </ContentWarapper>
    </ThemeProvider>
    </>
  )
}