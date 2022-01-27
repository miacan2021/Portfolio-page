import styled from "styled-components";

export const AboutPageWrapper = styled.div`
   width: 80vw;
   max-width: 1100px;
   padding-top: 130px;
   padding-bottom: 50px;
   text-align: center;
   margin: auto;
   @media (max-width: ${({theme}) => theme.tablet}) {
        width: 90wh;
       }
`
export const Introduce = styled.div`
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme}) =>  theme.palette.beige};
    padding-bottom: 20px;
    padding-top: 20px;
    border-radius: 5px 5px 0 0;
    @media (max-width: ${({theme}) => theme.tablet}) {
       flex-direction: column;
       }
`


export const Name = styled.h1`
    font-family: 'Abel', sans-serif;
    font-size: 30px;
    color: ${({theme}) =>  theme.palette.sub_text};
    letter-spacing: 3px;
    background-color: ${({theme}) =>  theme.palette.pink};
    padding: 10px;
    border-radius: 5px 5px 0 0;
    margin-top: 40px;
    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 24px;
       }
`

export const Myself = styled.div`
    width: 60%;
    padding: 20px;
    @media (max-width: ${({theme}) => theme.tablet}) {
        width: 90%;
        padding: 10px;
       }
`

export const Profile = styled.div`
    width: 39%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    margin: 20px;
    @media (max-width: ${({theme}) => theme.tablet}) {
        width: 90%;
       }
`
export const AboutTitle = styled.h1`
    font-family: 'Josefin Slab', serif;
    font-size: 48px;
    letter-spacing: 3px;
    color: ${({theme}) =>  theme.palette.pink};
    background-color: ${({theme}) =>  theme.palette.beige};
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 5px;
    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 28px;
        letter-spacing: 2px;
       }
`
export const ClickText = styled.p`
    font-family: 'Josefin Slab', serif;
    font-size: 12px;
    letter-spacing: 3px;
    color: ${({theme}) =>  theme.palette.head_text};
    padding-bottom: 5px;
    letter-spacing: 3px;
    animation: flash 1s linear infinite;
    @keyframes flash {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
     }
    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 8px;
        letter-spacing: 2px;
       }
`


export const AboutImg = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
    box-shadow: 10px 10px 0px ${({theme}) =>  theme.palette.pink };
    transition: all 0.8s;
    border-radius: 5px;
    @media (max-width: ${({theme}) => theme.mobile}) {
        width: 220px;
        height: 220px;
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
    border-radius: 5px 5px 0 0;
    margin-top: 20px;
    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 20px;
       }

`

export const AboutP = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: ${({theme}) => theme.palette.sub_text};
    background-color: ${({theme}) =>  theme.palette.white};
    padding: 20px 10px;
    border-radius: 0 0 5px 5px;
    line-height: 150%;
    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 14px;
       }

`


export const Skills = styled.div`
    background-color: ${({theme}) =>  theme.palette.white};
    border-radius: 0 0 5px 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    @media (max-width: ${({theme}) => theme.mobile}) {
        grid-template-columns: 1fr 1fr 1fr;
       }
`

export const Skill = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    color: ${({theme}) =>  theme.palette.sub_text};
`

export const Highlight = styled.span`
    background-color: ${({theme}) =>  theme.palette.green};
    padding: 2px;
`

export const Interest = styled.div`
    display: flex;
    justify-content: center;
`

export const LikeThing = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    padding: 5px;
    color: ${({theme}) =>  theme.palette.sub_text};
`
