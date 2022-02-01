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
     width: 50px;
     height: 50px;
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
     &:hover{
     background: ${({theme}) =>  theme.palette.green};
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
     padding: 10px;
     z-index: 1000 ;
     border-radius: 5px;
     @media (max-width: ${({theme}) => theme.mobile}) {
     width: 80%;
     height: 100%;
     max-width: 300px;
     max-height: 350px;
     top: -350px;
     }
`
export const ProjectImg = styled.img`
     width: 50%;
     height: 40%;
     object-fit: cover;
     margin: auto;
     display: block;
`
     
