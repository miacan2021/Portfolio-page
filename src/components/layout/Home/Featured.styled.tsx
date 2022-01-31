import styled from "styled-components";


export const FeaturedWrapper = styled.div`
     position: relative;
     background: ${({theme}) => theme.palette.beige };
     width: 100%;
     max-width: 1200px;
     height: auto;
     margin-top: 130px;
     left: 50%;
     transform: translateX(-50%);
     @media (max-width: ${({theme}) => theme.tablet}) {
      margin-top: 280px;
      margin-bottom: 40px;
      height: 160px;
     }
`


export const Cards = styled.div`
    position: absolute;
    height: 300px;
    display: flex;
    align-items: center;
    gap: 15px;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    margin-bottom: 100px;
    overflow-x: auto;
    @media (max-width: ${({theme}) => theme.tablet}) {
      flex-direction: column;
      gap: 25px;
      top: -220px;
      overflow-x: hidden;
      height: 550px;
      width: 100%;
      padding-bottom: 40px;
      padding-top: 10px;
      overflow-y: auto;
      transform: translateX(-47%);
     }
`

export const ButtonStyle= styled.div`
     width: 100vw;
     display: flex;
     justify-content: center;
     padding: 200px 5px 90px 5px;
     @media (max-width: ${({theme}) => theme.tablet}) {
          padding: 120px 5px 40px 5px;
     }
`

export const CloseBtn= styled.button`
     background: ${({theme}) =>  theme.palette.beige };
     color: ${({theme}) =>  theme.palette.head_text};
     font-size: 18px;
     width: 50px;
     height: 50px;
     border-radius: 50%;
`

export const OpenCard = styled.div`
     position: absolute;
     background: ${({theme}) =>  theme.palette.white };
     color: ${({theme}) =>  theme.palette.sub_text};
     width: 70vw;
     height: 50vh;
     position: absolute;
     top: -200px;
     left: 50%;
     transform: translateX(-50%);
     z-index: 100;
`