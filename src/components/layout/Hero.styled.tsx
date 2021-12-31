import styled from "styled-components";


export const HeroWrapper = styled.div`
        background:${({theme}) =>  theme.palette.beige };
        width: 100vw;
        height: auto;
        font-family: 'Abel', sans-serif;
        color:${({theme}) =>  theme.palette.head_text };
        padding: 80px 20px;
`
export const HeroContainer = styled.div`
        width: 80%;
        max-width: 1400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
`
export const HeroTitle = styled.div`
       position: relative;
       left: -50px;
`

export const Hello= styled.h1`
       font-size: 36px;
       font-weight: 500;
       letter-spacing: 2px;
`
export const Name= styled.h1`
       font-size: 144px;
       letter-spacing: 6px;
`
export const FamilyName= styled.h1`
       font-size: 72px;
       letter-spacing: 30px;
`   
export const Title= styled.h1`
       margin-top: 10px;
       font-size: 36px;
       letter-spacing: 2px;
`  
export const TitleBorder= styled.span`
       background-color: ${({theme}) => theme.palette.pink};
       padding: 0 5px;
       border: ${({theme}) => `2px solid ${theme.palette.head_text}`};
` 
export const Img= styled.div`
      position: absolute;
      top: 50px;
      left: 380px;
`   
export const TopImg= styled.img`
      width: 250px;
      height: 250px;
      border-radius: 50%;
      object-fit: cover;
      object-position: 0% 0%;
      box-shadow: ${({theme}) => `40px 5px 0px 0 ${theme.palette.pink}`}; 
      border: ${({theme}) => `2px solid ${theme.palette.head_text}`};
`   