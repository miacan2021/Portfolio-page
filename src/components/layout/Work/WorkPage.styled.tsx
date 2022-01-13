import styled from "styled-components";

export const WorkPageWrapper = styled.div`
   width: 80vw;
   max-width: 1000px;
   padding-top: 130px;
   text-align: center;
   margin: auto;
   @media (max-width: ${({theme}) => theme.mobile}) {
        width: 90wh;
       }
`

export const WorkCard = styled.div<{bg: string}>`
   color: ${({theme}) => theme.palette.head_text};
   background-color: ${({bg}) => bg};
`


export const WorkImg = styled.img`
   width: 200px;
   height: 200px;
   object-fit: cover;


`