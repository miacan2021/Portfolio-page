import styled from "styled-components";

export const FeaturedWrapper = styled.div`
     position: relative;
     background: ${({theme}) => theme.palette.beige };
     width: 100vw;
     text-align: center;
     margin: 90px auto;
     @media (max-width: ${({theme}) => theme.mobile}) {
          margin-top: 280px;
     }
`
export const FeatureContainer = styled.div`
     background: ${({theme}) =>  theme.palette.beige };
     font-family: 'Josefin Slab', serif;
     color: ${({theme}) =>  theme.palette.green };
     font-size: 90px;
     font-family: 'Montserrat', sans-serif;
     overflow: hidden;
     font-weight: bold;
     transform: scale(1.2, 3.8);
     white-space: nowrap;
     letter-spacing: 10px;
     &::before{
          content: 'FEATURED PROJECTS';
     }
     @media (max-width: ${({theme}) => theme.mobile}) {
          white-space: normal;
          font-size: 40px;
          width: 95%;
          margin: 0 auto;
          &::before{
          content: 'FEATURED PROJECTS FEATURED PROJECTS';
     }
     }
`
export const Cards = styled.div`
    position: absolute;
    height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 15px;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    overflow-x: scroll;
    overflow-y: hidden;
    @media (max-width: ${({theme}) => theme.mobile}) {
      flex-direction: column;
      gap: 25px;
      top: -220px;
      overflow-x: hidden;
      justify-content: center;
      height: 600px;
     }
`


export const ButtonStyle= styled.div`
     width: 100vw;
     display: flex;
     justify-content: center;
     padding: 50px 5px;
`