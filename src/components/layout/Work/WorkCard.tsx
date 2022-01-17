import { useState, useCallback } from "react"
import { WorkImg, WorkCard, CardDescription, CardImage, CardContent, WorkTitle, Skills, Skill, ProjectLinks, Description, MoreBtn } from "./WorkCard.styled";
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
            {props.data.skills.map((skill)=>(
                    <Skill>{skill}</Skill>
                ))}
            </Skills>
            <Description>{props.data.description}</Description>
            <ProjectLinks>
                <a href={props.data.github} target="blank"><GoMarkGithub size={'30px'} color={"#594a4e"} /></a>
                <a href={props.data.url} target="blank"><GoBrowser size={'30px'} color={"#594a4e"} /></a>
            </ProjectLinks>
            <MoreBtn href={props.data.slug}>MORE DETAIL</MoreBtn>
            </CardDescription>
            </CardContent>  
            </WorkCard>
            )
}