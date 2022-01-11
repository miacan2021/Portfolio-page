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