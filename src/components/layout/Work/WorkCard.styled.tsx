import styled from "styled-components";

export const WorkCard = styled.div<{bg: string}>`
   color: ${({theme}) => theme.palette.head_text};
   background-color: ${({bg}) => bg};
   width: 100%;
`


export const WorkTitle = styled.h1`
   letter-spacing: 2px;
   color: ${({theme}) => theme.palette.head_text};
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
   justify-content: center;
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
  color: ${({theme}) => theme.palette.sub_text};
  font-size: 12px;
  gap: 3px;
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
`