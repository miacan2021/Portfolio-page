import styled from "styled-components";

export const ContactWrapper = styled.div`
    background: ${({theme}) => theme.palette.beige};
    width: 80vw;
    height: auto;
    text-align: center;
    padding: 60px 0;
    margin: 0 auto;
`

export const ContactTitle = styled.h1`
    font-family: 'Abel', sans-serif;
    font-size: 38px;
    letter-spacing: 4px;

`
export const ContactP = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    letter-spacing: 4px;
    margin-top: 40px;
    white-space: wrap;

`

export const Links = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    padding-top: 35px;
`

export const Link = styled.a`
    width: 40px;
    height: 40px;
    background: ${({theme}) => theme.palette.light_pink};
    border: ${({theme}) =>`1px solid ${theme.palette.sub_text}`};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background: ${({theme}) => theme.palette.pink};
        border: none;
    }
`