import { useState, useCallback } from "react"
import { FeatureContainer, FeaturedWrapper, Cards, ButtonStyle, CloseBtn } from "./Featured.styled"
import { Card } from "../pattern/Card"
import ProjectData from '../../../ProjectData.json'  
import { Button } from "../pattern/Button"
import { motion, AnimatePresence } from "framer-motion"
import { CardTitle, CardWrapper, CardImg, CardFlex, CardDesc} from "../pattern/Card.styled"


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
    
    let featuredProjects:project[] = []
    ProjectData.projects.forEach((project: project) => {
        if(project.category === 'featured'){
            featuredProjects.push(project)
        } else {
            return
        }
    })

    const [selectedId, setSelectedId] = useState<number|null|string>(null)
    
    return(
        <>
        <FeaturedWrapper>
            <FeatureContainer />
            <Cards>
             {/* {featuredProjects.map((data, i) => (
                <Card key={i} data={data} />
             ))} */}
               {featuredProjects.map((item, i:number) => (
                     <motion.div layoutId={item.title} onClick={() => setSelectedId(item.title)}>
                     <Card key={i} data={item} />
                     </motion.div>
                   ))
                }
            </Cards>
            <AnimatePresence>
                     {selectedId &&
                     featuredProjects.map(item => (
                       <motion.div layoutId={selectedId.toString()}>
                         <motion.h5>{item.title}</motion.h5>
                         <motion.h2>{item.description}</motion.h2>
                         <motion.button onClick={() => setSelectedId(null)}><CloseBtn>X</CloseBtn></motion.button>
                       </motion.div>
                     ))}
            </AnimatePresence>
        </FeaturedWrapper>
        <ButtonStyle>
         <Button title={'ALL PROJECTS'}></Button>
        </ButtonStyle>
        </>
    )
}