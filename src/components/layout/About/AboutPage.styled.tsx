import styled from "styled-components";

export const AboutPageWrapper = styled.div`
   width: 80vw;
   max-width: 1100px;
   padding-top: 130px;
   padding-bottom: 50px;
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
    background-color: ${({theme}) =>  theme.palette.beige };
    padding-bottom: 20px;
    padding-top: 20px;
    @media (max-width: ${({theme}) => theme.mobile}) {
       flex-direction: column;
       }
`


export const Name = styled.h1`
    font-family: 'Abel', sans-serif;
    font-size: 32px;
    color: ${({theme}) =>  theme.palette.sub_text};
    letter-spacing: 4px;
    background-color: ${({theme}) =>  theme.palette.pink};
    padding: 10px;
    border-radius: 5px;
    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 24px;
       }
`

export const Myself = styled.div`
    width: 60%;
    padding: 20px;
`

export const AboutTitle = styled.h1`
    font-family: 'Josefin Slab', serif;
    font-size: 48px;
    letter-spacing: 3px;
    color: ${({theme}) =>  theme.palette.pink};
    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 28px;
        letter-spacing: 2px;
       }
`

export const AboutImg = styled.img`
    width: 230px;
    height: 230px;
    object-fit: cover;
    box-shadow: 10px 10px 0px ${({theme}) =>  theme.palette.pink };
    transition: all 0.8s;
    @media (max-width: ${({theme}) => theme.mobile}) {
        width: 150px;
        height: 150px;
       }
`

export const AboutMessage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({theme}) =>  theme.palette.white };
    font-family: 'Abel', sans-serif;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 24px;
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

export const SectionTitle = styled.h2`
    font-family: 'Abel', sans-serif;
    font-size: 24px;
    color: ${({theme}) =>  theme.palette.sub_text};
    letter-spacing: 2px;
    background-color: ${({theme}) =>  theme.palette.green};
    padding: 10px;
    border-radius: 5px;
    margin-top: 20px;
    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 20px;
       }

`

export const AboutP = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    color: ${({theme}) =>  theme.palette.sub_text};
    background-color: ${({theme}) =>  theme.palette.white};
    padding: 20px 10px;
    border-radius: 5px;
    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 16px;
       }

`