import styled from "styled-components";

export const AboutPageWrapper = styled.div`
   width: 80wh;
   padding-top: 130px;
   text-align: center;
   @media (max-width: ${({theme}) => theme.mobile}) {
        width: 90wh;
       }
`

export const AboutTitle = styled.h1`
    font-family: 'Josefin Slab', serif;
    font-size: 48px;
    letter-spacing: 3px;
    color: ${({theme}) =>  theme.palette.pink };
`
