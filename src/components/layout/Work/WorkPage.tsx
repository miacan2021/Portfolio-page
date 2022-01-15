import { Contact } from "../pattern/Contact"
import { GrobalStyles } from "../../styles/Globals.styled";
import { NavBar } from "../pattern/NavBar"
import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/Globals.styled"
import ProjectData from '../../../ProjectData.json'
import {WorkPageWrapper} from "./WorkPage.styled";
import { WorkCardWrapper } from "./WorkCard";


export const WorkPage = () => {
    const colors :string[] = [
       '#ffc6c7',
       '#fffffe',
       '#c3f0ca',
       '#faeee7',
       '#ff8ba7',
    ]

    const pickColor = (i: number) => {
       if(i >= 10){
            return colors[i-10]
       }else if(i >= 5){
            return colors[i-5]
       }else{
            return colors[i]
        }
    }
  

    return(
        <>
        <GrobalStyles />
        <NavBar/>
        <ThemeProvider theme={theme}>
        <WorkPageWrapper>
        {ProjectData.projects.map((data) => (
            <WorkCardWrapper key={data.title} color='pink' data={data} />
        ))}
        <Contact />
        </WorkPageWrapper>
        </ThemeProvider>
        </>
    )
}