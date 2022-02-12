import { useState, } from "react"
import {FeaturedWrapper, Cards, ButtonStyle, CloseBtn, OpenCard, ProjectImg, ProjectLinks, ProjectLink, CardContainer, SplitLine, TextContainer, TextHead, TextSub } from "./Featured.styled"
import { Card } from "../pattern/Card"
import ProjectData from '../../../ProjectData.json'  
import { Button } from "../pattern/Button"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from 'react-router-dom'
import { GoMarkGithub, GoBrowser } from "react-icons/go"
import { BiDetail, BiX } from "react-icons/bi";



interface project {
        title: string,
        gif: string,
        thumbnail: string,
        skills: string[],
        category: string,
        github: string,
        url: string,
        slug: string,
        description: string
    }


type Props= {
    modeTheme: string|null
}

export const Featured = ({modeTheme}:Props) => {
    const featuredProjects: project[] = []
    ProjectData.projects.forEach((project: project) => {
        if(project.category === 'featured'){
            featuredProjects.push(project)
        } else {
            return
        }
    })

    const [selectedId, setSelectedId] = useState<null|string>(null)

    const openItem = featuredProjects.filter(item => item.title === selectedId)
    const width = window.innerWidth;
   return(
        <>
        <FeaturedWrapper>
            <Cards>
               {featuredProjects.map((item, i:number) => (
                     <motion.div  key={i} layoutId={item.title} onClick={() => setSelectedId(item.title)}>
                     <Card data={item} />
                     </motion.div>
                ))
                }
            </Cards>
            <AnimatePresence>
                     {selectedId && 
                     ( <OpenCard as={motion.div} layoutId={selectedId}>
                         <CloseBtn as={motion.button} onClick={() => setSelectedId(null)}><BiX size={width > 768 ? '25px': '18px'} color={modeTheme === 'light' ? "#594a4e" : "#fffffe" }/></CloseBtn>
                          <CardContainer>
                          <ProjectImg as={motion.img} src={openItem[0].thumbnail} alt="projectimage" />
                          <TextContainer>
                          <TextHead as={motion.h1}>{openItem[0].title}</TextHead>
                          <TextSub as={motion.p}>{openItem[0].description}</TextSub>
                          </TextContainer>
                          <ProjectLinks>
                          <ProjectLink as={Link} to={`/work/${openItem[0].slug}`}>Detail<BiDetail size={width > 768 ? '20px': '17px'} color={"#594a4e"} /></ProjectLink>
                            <SplitLine />
                            <ProjectLink href={openItem[0].url}>View<GoBrowser size={width > 768 ? '20px': '17px'} color={"#594a4e"} /></ProjectLink>
                            <SplitLine />
                            <ProjectLink href={openItem[0].github}>GitHub<GoMarkGithub size={width > 768 ? '20px': '17px'} color={"#594a4e"} /></ProjectLink>
                           </ProjectLinks>
                           </CardContainer>
                        </OpenCard>
                     )}
            </AnimatePresence>
        <ButtonStyle>
         <Link to='/work'><Button title={'ALL PROJECTS'}></Button></Link>
        </ButtonStyle>
        </FeaturedWrapper>
        </>
    )
}