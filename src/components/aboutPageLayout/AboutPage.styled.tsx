import styled from "styled-components";

export const AboutPageWrapper = styled.div`
   width: 80vw;
   max-width: 1000px;
   padding-top: 130px;
   text-align: center;
   margin: auto;
   @media (max-width: ${({theme}) => theme.mobile}) {
        width: 90wh;
       }
`
export const Introduce = styled.div`
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: space-around;

`
export const Myself = styled.div`
    width: 60%;
    padding: 20px;
`
export const AboutTitle = styled.h1`
    font-family: 'Josefin Slab', serif;
    font-size: 48px;
    letter-spacing: 3px;
    color: ${({theme}) =>  theme.palette.pink };
`

export const AboutImg = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
    box-shadow: 10px 10px 0px ${({theme}) =>  theme.palette.pink };
    transition: all 0.8s;
`

export const AboutMessage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;transform: translate(-50%, -50%);
    color: ${({theme}) =>  theme.palette.pink };
    font-family: 'Abel', sans-serif;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 28px;
    opacity: 0;
    transition: all 0.8s;
`
export const AboutImgArea = styled.a`
    position: relative;
    cursor: pointer;
    &:hover ${AboutMessage} {
        opacity: 1;
    }
    &:hover ${AboutImg}{
    box-shadow: none;
    filter: grayscale(100%);
    }
`
