import { CardTitle, CardWrapper } from "./Card.styled"

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
           <CardTitle>{props.data.title}</CardTitle>
       </CardWrapper>
    )
}