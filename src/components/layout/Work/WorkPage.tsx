import { useState } from "react";
import { Contact } from "../pattern/Contact"
import { GrobalStyles } from "../../styles/Globals.styled";
import { NavBar } from "../pattern/NavBar"
import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/Globals.styled"
import ProjectData from '../../../ProjectData.json'
import {CategoryBtn, CategoryWrapper, WorkPageWrapper} from "./WorkPage.styled";
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
        featured: colors[1],
        fun: colors[1],
    })
    const handleCategory = (value: string) => {
        if(value === 'all'){
            setDatas(ProjectData.projects)
            setBtnBg({
                all: colors[4],
                featured: colors[1],
                fun: colors[1],
            })
        }else if(value === 'featured'){
            const filterData = ProjectData.projects.filter((project) => project.category === value)
            setDatas(filterData)
            setBtnBg({
                all: colors[1],
                featured: colors[4],
                fun: colors[1],
            })
        }else if(value === 'fun'){
            const filterData = ProjectData.projects.filter((project) => project.category === value)
            setDatas(filterData)
            setBtnBg({
                all: colors[1],
                featured: colors[1],
                fun: colors[4],
            })
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
        <CategoryBtn bg={btnBg.featured} onClick={() => handleCategory('featured')}>Featured</CategoryBtn>
        <CategoryBtn bg={btnBg.fun} onClick={() => handleCategory('fun')}>Fun/Practice</CategoryBtn>
        </CategoryWrapper>
        {datas.map((data, i) => {
           let color = pickColor(i)
        return(
            <WorkCardWrapper key={data.title} color={color} data={data} />
        )}
        )}
        <Contact />
        </WorkPageWrapper>
        </ThemeProvider>
        </>
    )
}