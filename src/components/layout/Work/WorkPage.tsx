import { Contact } from "../pattern/Contact"
import { GrobalStyles } from "../../styles/Globals.styled";
import { NavBar } from "../pattern/NavBar"
import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/Globals.styled"
import ProjectData from '../../../ProjectData.json'
import { WorkImg, WorkPageWrapper, WorkCard } from "./WorkPage.styled";

interface Params {
        title: string,
        gif: string,
        skills: string[],
        category: string,
        github: string,
        url: string,
        slug: string,
        description: string
    }

export const WorkPage = () => {
    const datas = ProjectData.projects

    const colors :string[] = [
       '#fffffe',
       '#c3f0ca',
       '#ffc6c7',
       '#faeee7',
       '#ff8ba7',
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
        <WorkPageWrapper>
        {datas.map((data: Params, i) => {
           let color =  pickColor(i)
            return(
            <WorkCard key={data.title} bg={`${color}`}>
                <h1>{data.title}</h1>
            {data.skills.map((skill)=>(
                <ul>
                    <li>{skill}</li>
                </ul>
                ))}
                <p>#{data.category}</p>
                <WorkImg src={data.gif} alt="project_featured_image" />
                
            </WorkCard>
            )
            
        })}
        <Contact />
        </WorkPageWrapper>
        </ThemeProvider>
        </>
    )
}