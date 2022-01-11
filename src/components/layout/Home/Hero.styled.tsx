import styled from "styled-components";

export const HeroWrapper = styled.div`
        background:${({theme}) =>  theme.palette.beige };
        width: 100vw;
        height: auto;
        font-family: 'Abel', sans-serif;
        color:${({theme}) =>  theme.palette.head_text };
        padding: 130px 20px 80px 20px;
        @media (max-width: ${({theme}) => theme.mobile}) {
              padding: 100px 5px 50px 5px;
              overflow: hidden;
       }
`
export const HeroContainer = styled.div`
        width: 80%;
        max-width: 1400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        @media (max-width: ${({theme}) => theme.mobile}) {
              width: 90%;
       }
`
export const HeroTitle = styled.div`
       position: relative;
       left: -50px;
       @media (max-width: ${({theme}) => theme.mobile}) {
              left: 10px;
       }
`

export const Hello= styled.h1`
       font-size: 36px;
       font-weight: 500;
       letter-spacing: 2px;
       @media (max-width: ${({theme}) => theme.mobile}) {
              font-size: 25px;
       }
`
export const Name= styled.h1`
       font-size: 144px;
       letter-spacing: 6px;
       @media (max-width: ${({theme}) => theme.mobile}) {
              font-size: 70px;
       }
`
export const FamilyName= styled.h1`
       font-size: 72px;
       letter-spacing: 30px;
       @media (max-width: ${({theme}) => theme.mobile}) {
              font-size: 30px;
       }
`   
export const Title= styled.h1`
       margin-top: 10px;
       font-size: 36px;
       letter-spacing: 2px;
       @media (max-width: ${({theme}) => theme.mobile}) {
              font-size: 20px;
       }
`  
export const TitleBorder= styled.span`
       background-color: ${({theme}) => theme.palette.pink};
       padding: 0 5px;
       border: ${({theme}) => `1px solid ${theme.palette.sub_text}`};
` 
export const Img= styled.div`
      position: absolute;
      top: 50px;
      left: 380px;
      @media (max-width: ${({theme}) => theme.mobile}) {
       top: 20px;
       left: 200px;
    }

`   
export const TopImg= styled.img`
      width: 230px;
      height: 230px;
      border-radius: 50%;
      object-fit: cover;
      object-position: 100% 0%;
      box-shadow: ${({theme}) => `30px 5px 0px 0 ${theme.palette.pink}`}; 
      border: ${({theme}) => `2px solid ${theme.palette.head_text}`};
      @media (max-width: ${({theme}) => theme.mobile}) {
       width: 100px;
       height: 100px;
       box-shadow: ${({theme}) => `20px 5px 0px 0 ${theme.palette.pink}`}; 

    }
`   