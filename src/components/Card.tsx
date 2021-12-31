import { CardWrapper } from "./Card.styled"

type DataItem = {
    data:{
    title: string,
    gif: string,
    skills: string[]
    }
}

export const Card = (props: DataItem) => {
    return(
       <CardWrapper>
           <h1>{props.data.title}</h1>
       </CardWrapper>
    )
}