import { useState } from "react";
import { Contact } from "../pattern/Contact"
import { GrobalStyles } from "../../styles/Globals.styled";
import { NavBar } from "../pattern/NavBar"
import { ThemeProvider } from "styled-components"
import { theme, darkTheme } from "../../styles/Globals.styled"
import ProjectData from '../../../ProjectData.json'
import {CategoryBtn, CategoryWrapper, WorkPageWrapper, WorkCards} from "./WorkPage.styled";
import { WorkCardWrapper } from "./WorkCard";
import { useSetTheme } from "../../../hooks/useSetTheme";
import { MdModeNight, MdWbSunny } from "react-icons/md";
import { ModeBtn, ModeBtnWrapperAbout } from "../../layout/Home/Hero.styled";
import { AboutTitle } from "../About/AboutPage.styled";
import { useNavigate } from 'react-router-dom'
import { BackBtn } from "../Projects/Detail.styled"
import { IoArrowBackCircleOutline } from "react-icons/io5"
import { motion } from 'framer-motion'

export const WorkPage = () => {
    const {modeTheme, setNextMode} = useSetTheme()

    const colors :string[] = 
    modeTheme === 'light' ?
        [
            '#ffc6c7',
            '#fffffe',
            '#c3f0ca',
            '#faeee7',
            '#ff8ba7',
         ]
         :
         [
            '#d4d8f0',
            '#fffffe',
            '#eebbc3',
            '#d4d8f0',
            '#d4939d',
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
        }else if(value === 'Featured'){
            const filterData = ProjectData.projects.filter((project) => project.category === value)
            setDatas(filterData)
            setBtnBg({
                all: colors[3],
                featured: colors[4],
                fun: colors[3],
            })
        }else if(value === 'Fun'){
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
    const chooseDirection = (i: number) => {
        if(i % 2 === 0) {
           return directionArr[0]
        }else{
            return directionArr[1]
        }
    }
    
    const width = window.innerWidth;
    const navigate = useNavigate();


    return(
        <>
        <GrobalStyles />
        <ThemeProvider theme={ modeTheme === 'light' ? theme : darkTheme}>
        <NavBar/>
        <WorkPageWrapper>
        <ModeBtnWrapperAbout>
        <ModeBtn onClick={() => setNextMode(modeTheme)}>
            {modeTheme === 'light' ?
              <MdModeNight size={width > 768 ? '25px': '20px'} color={"#594a4e"} />
              :
              <MdWbSunny size={width > 768 ? '25px': '20px'} color={"#fffffe"} />
              }
          </ModeBtn>
        </ModeBtnWrapperAbout>
        <AboutTitle>My Work</AboutTitle>
        <CategoryWrapper>
        <CategoryBtn bg={btnBg.all} onClick={() => handleCategory('all')}>ALL</CategoryBtn>
        <CategoryBtn bg={btnBg.featured} onClick={() => handleCategory('Featured')}>FEATURED</CategoryBtn>
        <CategoryBtn bg={btnBg.fun} onClick={() => handleCategory('Fun')}>FUN / PRACTICE</CategoryBtn>
        </CategoryWrapper>
        <WorkCards>
        {datas.map((data, i) => {
           const color = pickColor(i)
           const direction = chooseDirection(i)
        return(
            <WorkCardWrapper key={data.title} color={color} data={data} direction={direction} />
        )}
        )}
        </WorkCards>
        <BackBtn as={motion.button} whileHover={{ scale: 1.1 }} onClick={() => navigate(-1)}><IoArrowBackCircleOutline size={width > 768 ? '40px': '30px'}  color={modeTheme === 'light' ? "#594a4e" : "#232946"} /></BackBtn>
        </WorkPageWrapper>
        <Contact modeTheme={modeTheme} />
        </ThemeProvider>
        </>
    )
}