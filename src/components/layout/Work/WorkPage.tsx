import { useState } from "react";
import { Contact } from "../pattern/Contact"
import { GrobalStyles } from "../../styles/Globals.styled";
import { NavBar } from "../pattern/NavBar"
import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/Globals.styled"
import ProjectData from '../../../ProjectData.json'
import {CategoryBtn, CategoryWrapper, WorkPageWrapper, WorkCards} from "./WorkPage.styled";
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
  
    const [datas, setDatas] = useState(ProjectData.projects)
    const [btnBg, setBtnBg] = useState({
        all: colors[4],
        featured: colors[3],
        fun: colors[3],
    })
    const handleCategory = (value: string) => {
        if(value === 'all'){
            setDatas(ProjectData.projects)
            setBtnBg({
                all: colors[4],
                featured: colors[3],
                fun: colors[3],
            })
        }else if(value === 'featured'){
            const filterData = ProjectData.projects.filter((project) => project.category === value)
            setDatas(filterData)
            setBtnBg({
                all: colors[3],
                featured: colors[4],
                fun: colors[3],
            })
        }else if(value === 'fun'){
            const filterData = ProjectData.projects.filter((project) => project.category === value)
            setDatas(filterData)
            setBtnBg({
                all: colors[3],
                featured: colors[3],
                fun: colors[4],
            })
        }
    }
    
    const directionArr: string[] = ['row', 'row-reverse']
    let chooseDirection = (i: number) => {
        if(i % 2 === 0) {
           return directionArr[0]
        }else{
            return directionArr[1]
        }
    }

    return(
        <>
        <GrobalStyles />
        <NavBar/>
        <ThemeProvider theme={theme}>
        <WorkPageWrapper>
        <CategoryWrapper>
        <CategoryBtn bg={btnBg.all} onClick={() => handleCategory('all')}>ALL</CategoryBtn>
        <CategoryBtn bg={btnBg.featured} onClick={() => handleCategory('featured')}>FEATURED</CategoryBtn>
        <CategoryBtn bg={btnBg.fun} onClick={() => handleCategory('fun')}>FUN / PRACTICE</CategoryBtn>
        </CategoryWrapper>
        <WorkCards>
        {datas.map((data, i) => {
           let color = pickColor(i)
           let direction = chooseDirection(i)
        return(
            <WorkCardWrapper key={data.title} color={color} data={data} direction={direction} />
        )}
        )}
        </WorkCards>
        <Contact />
        </WorkPageWrapper>
        </ThemeProvider>
        </>
    )
}