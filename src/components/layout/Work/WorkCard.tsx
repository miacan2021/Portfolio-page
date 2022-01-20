import { useState, useCallback } from "react"
import { WorkImg, WorkCard, CardDescription, CardImage, CardContent, WorkTitle, Skills, Skill, ProjectLinks, Description, MoreBtn, ProjectLink } from "./WorkCard.styled";
import { GoMarkGithub, GoBrowser } from "react-icons/go";
type Params = {
    data:{
        title: string,
        gif: string,
        thumbnail: string,
        skills: string[],
        category: string,
        github: string,
        url: string,
        slug: string,
        description: string,
    }
    color: string,
    direction: string
}


export const WorkCardWrapper = (props: Params) => {
    const [hover, setHover] = useState<boolean>(false)
    const handleHover = useCallback(
        () => {
           setHover(prev => !prev)
        },
        []
        )
  

return(
<WorkCard bg={`${props.color}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <WorkTitle>{props.data.title}</WorkTitle>
            <CardContent direction={props.direction}>
            <CardImage>
                { hover ?
                    <WorkImg src={props.data.gif} alt="project_featured_image" />
                    :
                    <WorkImg src={props.data.thumbnail} alt="project_featured_image" />
                }
            </CardImage>
            <CardDescription>
            <Skills>
            {props.data.skills.map((skill,i)=>(
                    <Skill key={i}>{skill}</Skill>
                ))}
            </Skills>
            <Description>{props.data.description}</Description>
            <ProjectLinks>
                <ProjectLink href={props.data.github} target="blank"><GoMarkGithub size={'30px'} color={"#594a4e"} /></ProjectLink>
                <ProjectLink href={props.data.url} target="blank"><GoBrowser size={'30px'} color={"#594a4e"} /></ProjectLink>
            </ProjectLinks>
            <MoreBtn href={props.data.slug}>MORE...</MoreBtn>
            </CardDescription>
            </CardContent>  
            </WorkCard>
            )
}