import { useState, useCallback } from "react"
import { WorkImg, WorkCard, CardDescription, CardImage, CardContent } from "./WorkPage.styled";

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
<WorkCard bg={'pink'} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <h1>{props.data.title}</h1>
            <CardContent>
            <CardImage>
                { hover ?
                    <WorkImg src={props.data.gif} alt="project_featured_image" />
                    :
                    <WorkImg src={props.data.thumbnail} alt="project_featured_image" />
                }
            </CardImage>
            <CardDescription>
            {props.data.skills.map((skill)=>(
                <ul>
                    <li>{skill}</li>
                </ul>
                ))}
                <p>#{props.data.category}</p>
            </CardDescription>
            </CardContent>  
            </WorkCard>
            )
}