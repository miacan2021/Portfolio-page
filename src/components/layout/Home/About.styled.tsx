import styled from "styled-components";

export const AboutWrapper = styled.div`
   width: 100wh;
   height: auto;
   background: ${({theme}) => theme.palette.white};
   padding-bottom: 40px;
   @media (max-width: ${({theme}) => theme.mobile}) {
        height: auto;
        padding-bottom: 40px;
       }
`
export const AboutH1 = styled.h1`
    font-size: 36px;
    color: ${({theme}) =>  theme.palette.sub_text};
    font-family: 'Abel', sans-serif;
    letter-spacing: 5px;
    padding: 20px 0px 0px 0px;
    text-align: center;
    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 20px;
       }
`
export const AboutUl = styled.ul`
    width: 80vw;
    margin: 0 auto;
    padding-top: 20px;
    @media (max-width: ${({theme}) => theme.mobile}) {
        width: 90vw;
        padding-top: 10px;
       }
`
export const AboutLi = styled.li`
    font-size: 18px;
    color: ${({theme}) =>  theme.palette.sub_text};
    font-family: 'Montserrat', sans-serif;
    padding: 5px 0;
    margin-top: 5px;
    line-height: 156%;
    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 14px;
        margin-top: 2px;
       }
`

export const AboutLiSpan = styled.span`
    font-weight: bold;
    letter-spacing: 3px;
    background: ${({theme}) =>  theme.palette.light_pink};
    padding: 3px;
    @media (max-width: ${({theme}) => theme.mobile}) {
        padding: 2px;
       }
`
export const ButtonCeter = styled.div`
        display: flex;
        justify-content: center;
`