import styled from "styled-components";

export const CardWrapper = styled.div`
    z-index: 20;
    width: 400px;
    min-width: 350px;
    height: 220px;
    background: rgba( 255, 255, 255, 0.8 );
    border: none;
    box-shadow: 8px 8px 10px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2px );
    -webkit-backdrop-filter: blur( 2px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
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
        min-width: 150px;
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
