import { CardTitle, CardWrapper, CardImg, CardLi, CardFlex, CardUl } from "./Card.styled"

type DataItem = {
    data:{
    title: string,
    gif: string,
    skills: string[],
    slug: string,
    }
}

export const Card = (props: DataItem) => {
    return(
       <CardWrapper>
           <CardImg src={props.data.gif} alt="projext-image" />
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