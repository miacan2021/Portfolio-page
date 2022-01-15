import { useState, useCallback } from "react"
import { CardTitle, CardWrapper, CardImg, CardLi, CardFlex, CardUl } from "./Card.styled"

type DataItem = {
    data:{
    title: string,
    gif: string,
    thumbnail: string,
    skills: string[],
    slug: string,
    }
}

export const Card = (props: DataItem) => {
    const [hover, setHover] = useState<Boolean>(false)
    const handleHover = useCallback(
        () => {
           setHover(prev => !prev)
        },
        []
        )
        
    return(
       <CardWrapper onMouseEnter={handleHover} onMouseLeave={handleHover}>
           { hover ? 
           <CardImg src={props.data.gif} alt="project-image" />
            :
           <CardImg src={props.data.thumbnail} alt="project-image" />
            }
           <CardFlex>
           <CardTitle>{props.data.title}</CardTitle>
           <CardUl>
               {props.data.skills.map((skill, i) => (
                   <CardLi key={i}>{skill}</CardLi>
               ))}
           </CardUl>
           </CardFlex>
       </CardWrapper>
    )
}