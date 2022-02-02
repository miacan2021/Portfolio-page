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
      height: 300px;
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
      height: 450px;
      width: 100%;
      padding-bottom: 40px;
      padding-top: 10px;
      overflow-y: auto;
      transform: translateX(-47%);
     }
`

export const ButtonStyle= styled.div`
     width: 100%;
     display: flex;
     justify-content: center;
     padding: 200px 5px 90px 5px;
     @media (max-width: ${({theme}) => theme.tablet}) {
          padding: 200px 5px 40px 5px;
     }
`

export const CloseBtn= styled.button`
     background: ${({theme}) =>  theme.palette.beige };
     color: ${({theme}) =>  theme.palette.head_text};
     font-size: 18px;
     width: 40px;
     height: 40px;
     border-radius: 50%;
     border: none;
     border: ${({theme}) => `1px solid ${theme.palette.white}`};
     outline: none;
     cursor: pointer;
     transition: all .5s;
     position: absolute;
     top: 10px;
     left: 10px;
     z-index: 1001;
     border:${({theme}) => `1px solid ${theme.palette.sub_text}`};
     display: inline-flex;
     align-items: center;
     justify-content: center;
     &:hover{
     background: ${({theme}) =>  theme.palette.green};
     }
     @media (max-width: ${({theme}) => theme.mobile}) {
     width: 35px;
     height: 35px;
     }
`    

export const OpenCard = styled.div`
     width: 500px;
     height: 400px;
     position: absolute;
     overflow: hidden;
     background: ${({theme}) =>  theme.palette.white };
     color: ${({theme}) =>  theme.palette.sub_text};
     top: -150px;
     left: 0;
     right: 0;
     bottom: 0;
     margin: auto;
     z-index: 1000 ;
     border-radius: 5px;
     box-shadow: 8px 8px 0 0 ${({theme}) => theme.palette.green};
     border:${({theme}) => `1px solid${theme.palette.sub_text}`};
     @media (max-width: ${({theme}) => theme.mobile}) {
     width: 95vw;
     height: 90vh;
     max-width: 300px;
     max-height: 350px;
     top: -350px;
     box-shadow: 4px 4px 0 0 ${({theme}) => theme.palette.green};

     }
`


export const CardContainer = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-around;
`

export const ProjectImg = styled.img`
     width: 65%;
     height: 53%;
     object-fit: cover;
     object-position: top;
     margin: auto;
     display: block;
     border-radius: 5px;
     @media (max-width: ${({theme}) => theme.mobile}) {
     width: 90%;
     height: 45%;
     }
`
     

export const ProjectLinks = styled.div`
     width: 100%;
     display: flex;
     justify-content: space-evenly;
     align-items: center;
     flex-flow: row wrap;
     border-top: ${({theme}) => `1px solid${theme.palette.sub_text}`};
`

export const SplitLine = styled.div`
     width: 1px;
     height: 50px;
     background: ${({theme}) =>  theme.palette.sub_text };
`

export const TextContainer = styled.div`
     width: 80%;
     text-align: center;
     padding-top: 15px;
     padding-bottom: 25px;
     @media (max-width: ${({theme}) => theme.mobile}) {
          width: 95%;
          padding-bottom: 5px;
     }
`

export const TextHead = styled.h1`
     letter-spacing: 2px;
     padding-bottom:15px;
     font-size: 22px;
     font-family: 'Josefin Slab', serif;
     @media (max-width: ${({theme}) => theme.mobile}) {
          font-size: 16px;
          padding-bottom: 10px;
     }
`

export const TextSub = styled.p`
     font-family: 'Montserrat', sans-serif;
     font-size: 16px;
     @media (max-width: ${({theme}) => theme.mobile}) {
          font-size: 13px;
          padding-bottom: 10px;
     }
`

export const ProjectLink = styled.a`
     font-size: 20px;
     color: ${({theme}) =>  theme.palette.sub_text};
     display: flex;
     align-items: center;
     gap: 3px;
     flex-wrap: nowrap;
     transition: transform ease .3s;
     padding: 10px 0 20px 0;
     &:hover{
          transform: translateY(-3px);
     }
     @media (max-width: ${({theme}) => theme.mobile}) {
     font-size: 18px;
     gap: 1px;
     padding: 0px;
     }
`