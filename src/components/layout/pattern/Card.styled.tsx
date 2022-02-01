import styled from "styled-components";

export const CardWrapper = styled.div`
    z-index: 20;
    width: 400px;
    min-width: 350px;
    height: 220px;
    background: ${({theme}) => theme.palette.white};
    border: none;
    box-shadow: 8px 8px 0 0 ${({theme}) => theme.palette.green};
    backdrop-filter: blur( 2px );
    -webkit-backdrop-filter: blur( 2px );
    border-radius: 10px;
    border:${({theme}) => `1px solid${theme.palette.sub_text}`};
    transition: all ease 0.3s;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &:hover{
        transform: translateY(-10px);
    }
    @media (max-width: ${({theme}) => theme.tablet}) {
        width: 90%;
        max-width:350px;
        height: 190px;
        min-width: 150px;
        box-shadow: 4px 4px 0 0 ${({theme}) => theme.palette.green};
     }
`

export const CardFlex = styled.div`
    width: 40%;
    height: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`

export const CardTitle = styled.h1`
     font-size: 18px;
     font-family: 'Abel', sans-serif;
     padding-bottom: 4px;
     color:  ${({theme}) => theme.palette.sub_text};
     letter-spacing: 2px;
     @media (max-width: ${({theme}) => theme.tablet}) {
        font-size: 16px;
     }
`

export const CardDesc = styled.p`
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  color: ${({theme}) => theme.palette.sub_text};
     @media (max-width: ${({theme}) => theme.tablet}) {
        font-size: 11px;
     }
`

export const CardImg= styled.img`
      width: 49%;
      height: 90%;
      object-fit: cover;
      border-radius: 15px;
`
