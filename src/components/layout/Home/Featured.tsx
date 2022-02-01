import { useEffect, useState, } from "react"
import {FeaturedWrapper, Cards, ButtonStyle, CloseBtn, OpenCard, ProjectImg } from "./Featured.styled"
import { Card } from "../pattern/Card"
import ProjectData from '../../../ProjectData.json'  
import { Button } from "../pattern/Button"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from 'react-router-dom'

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


export const Featured = () => {
    
    let featuredProjects: project[] = []
    ProjectData.projects.forEach((project: project) => {
        if(project.category === 'featured'){
            featuredProjects.push(project)
        } else {
            return
        }
    })

    const [selectedId, setSelectedId] = useState<null|string>(null)

    let openItem = featuredProjects.filter(item => item.title === selectedId)

   return(
        <>
        <FeaturedWrapper>
            <Cards>
               {featuredProjects.map((item, i:number) => (
                     <motion.div layoutId={item.title} onClick={() => setSelectedId(item.title)}>
                     <Card key={i} data={item} />
                     </motion.div>
                ))
                }
            </Cards>
            <AnimatePresence>
                     {selectedId && 
                     ( <OpenCard as={motion.div} layoutId={selectedId}>
                         <CloseBtn as={motion.button} onClick={() => setSelectedId(null)}>X</CloseBtn>
                          <ProjectImg as={motion.img} src={openItem[0].thumbnail} alt="projectimage" />
                          <motion.h5>{openItem[0].title}</motion.h5>
                          <motion.h2>{openItem[0].description}</motion.h2>
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