import { FeatureContainer, FeaturedWrapper, Cards, ButtonStyle } from "./Featured.styled"
import { Card } from "../pattern/Card"
import ProjectData from '../../../ProjectData.json'  
import { Button } from "../pattern/Button"


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
   
    return(
        <>
        <FeaturedWrapper>
            <FeatureContainer />
            <Cards>
             {featuredProjects.map((data, i) => (
                <Card key={i} data={data} />
             ))}
            </Cards>
        </FeaturedWrapper>
        <ButtonStyle>
         <Button title={'ALL PROJECTS'}></Button>
        </ButtonStyle>
        </>
    )
}