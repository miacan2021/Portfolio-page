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
    </ContentWarapper>
    </ThemeProvider>
    </>
  )
};

