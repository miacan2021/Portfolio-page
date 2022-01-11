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
    color: ${({theme}) => theme.palette.head_text};
`
export const ContactP = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin-top: 40px;
    white-space: wrap;
    color: ${({theme}) => theme.palette.sub_text};;
`

export const Links = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    padding-top: 35px;
    gap: 10px;
`

export const Link = styled.a<{title:string}>`
    width: 50px;
    height: 50px;
    padding: 3px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease .6s;
    color: ${({theme}) => theme.palette.head_text};
    font-family: 'Montserrat', sans-serif;
    &:hover{
        flex-direction: column;
    }
    &:hover::after{
        content: '${({ title }) => title }';
    }
`