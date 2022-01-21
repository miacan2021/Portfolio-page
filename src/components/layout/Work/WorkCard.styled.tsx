import styled from "styled-components";

export const WorkCard = styled.div<{bg: string}>`
   color: ${({theme}) => theme.palette.head_text};
   background-color: ${({bg}) => bg};
   width: 100%;
`

export const WorkTitle = styled.h1`
   letter-spacing: 2px;
   color: ${({theme}) => theme.palette.sub_text};
   margin-bottom: 20px;
   padding-top: 20px;
   font-family: 'Montserrat', sans-serif;
`

export const WorkImg = styled.img`
   width: 100%;
   object-fit: cover;
  
`

export const CardContent = styled.div<{direction: string}>`
   display: flex;
   justify-content: space-around;
   align-items: center;
   flex-direction: ${({direction}) => direction};
   @media (max-width: ${({theme}) => theme.mobile}) {
      flex-direction: column;
      justify-content: center;
       }
`

export const CardDescription = styled.div`
   width: 49%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   font-family: 'Open Sans', sans-serif; 
   @media (max-width: ${({theme}) => theme.mobile}) {
      width: 100%;
       }
`

export const CardImage= styled.div`
   width: 50%;
   padding: 10px;
   @media (max-width: ${({theme}) => theme.mobile}) {
      width: 100%;
       }
`

export const Skills = styled.ul`
  display: flex; 
  color: ${({theme}) => theme.palette.head_text};
  font-size: 12px;
  gap: 3px;
  padding: 10px;
`

export const Skill = styled.li`
  border:${({theme}) => `1px solid ${theme.palette.sub_text}`};
  background: ${({theme}) => theme.palette.beige};
  border-radius: 5px;
  padding: 3px;
`

export const ProjectLinks= styled.div`
   display: flex;
   justify-content: center;
   gap: 10px;
   padding: 10px;
`

export const ProjectLink= styled.a`
   transition: all .5s;
   &:hover{
      transform: translateY(-3px);
   }
`

export const Description= styled.p`
   padding: 10px;
   color: ${({theme}) => theme.palette.sub_text};
   font-size: 16px;
`

export const MoreBtn= styled.div`
   color: ${({theme}) => theme.palette.head_text};
   background: ${({theme}) => theme.palette.beige};
   border:${({theme}) => `1px solid ${theme.palette.sub_text}`};
   padding: 10px 20px;
   letter-spacing: 2px;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: all .5s;
   &:hover {
      background: ${({theme}) => theme.palette.white};
      color: ${({theme}) => theme.palette.sub_text};
      transform: translateY(-3px);
   }
`