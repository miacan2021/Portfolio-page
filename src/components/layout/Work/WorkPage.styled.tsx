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

export const CategoryWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background: ${({theme}) => theme.palette.beige};
`

export const CategoryBtn = styled.button<{bg: string}>`
   color: ${({theme}) => theme.palette.head_text};
   background: ${({bg}) => bg};
   width: 180px;
   height: 50px;
   font-size: 16px;
   padding: 5px;
   font-family: 'Montserrat', sans-serif;
   letter-spacing: 3px;
   cursor: pointer;
   transition: all 0.5s;
   border: none;
   border-top:${({theme}) => `1px solid ${theme.palette.sub_text}`};
   border-left: ${({theme}) => `1px solid ${theme.palette.sub_text}`};
   border-right: ${({theme}) => `1px solid ${theme.palette.sub_text}`};
   @media (max-width: ${({theme}) => theme.mobile}) {
      width: 120px;
      height: 40px;
      font-size: 14px;
      letter-spacing: 1px;
      padding: 2px;
       }
`


export const WorkCards = styled.div`
 border: ${({theme}) => `1px solid ${theme.palette.sub_text}`};
`