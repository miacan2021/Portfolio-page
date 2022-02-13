import { useState, useCallback } from "react"
import { CardTitle, CardWrapper, CardImg, CardFlex, CardDesc} from "./Card.styled"

type DataItem = {
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
}

export const Card = (props: DataItem) => {
    const [hover, setHover] = useState<boolean>(false)
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
           <CardDesc>{props.data.description.length > 65 ? props.data.description.slice(0 , 65).concat('...') : props.data.description.length}</CardDesc>
           </CardFlex>
       </CardWrapper>
    )
}