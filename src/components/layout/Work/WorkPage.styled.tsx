import styled from "styled-components";

export const WorkPageWrapper = styled.div<{bg: string}>`
   width: 80vw;
   max-width: 1000px;
   padding-top: 130px;
   text-align: center;
   margin: auto;
   color: ${({theme}) => theme.palette.head_text};
   background-color: ${({bg}) => bg};
   @media (max-width: ${({theme}) => theme.mobile}) {
        width: 90wh;
       }
`