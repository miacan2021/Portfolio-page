import { Contact } from "../pattern/Contact"
import { GrobalStyles } from "../../styles/Globals.styled";
import { NavBar } from "../pattern/NavBar"
import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/Globals.styled"
import ProjectData from '../../../ProjectData.json'
import { WorkPageWrapper } from "./WorkPage.styled";

interface Params {
        title: string,
        gif: string,
        skills: string[],
        category: string
    }

export const WorkPage = () => {
    const datas = ProjectData.projects

    const colors :string[] = [
       '#fffffe',
       '#faeee7',
       '#ff8ba7',
       '#ffc6c7',
       '#c3f0ca',
    ]

    const pickColor = (i: number) => {
       if(i >= 5){
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
        {datas.map((data: Params, i) => {
           let color =  pickColor(i)
            return(
            <WorkPageWrapper key={data.title} bg={`${color}`}>
                <h1>
                {data.title}
                </h1>
                
                </WorkPageWrapper>
            )
        })}
        <Contact />
        </ThemeProvider>
        </>
    )
}