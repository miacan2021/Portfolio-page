import styled from "styled-components";

export const CardWrapper = styled.button`
    z-index: 20;
    width: 450px;
    min-width: 350px;
    height: 250px;
    background: rgba( 255, 255, 255, 0.5 );
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
    @media (max-width: ${({theme}) => theme.mobile}) {
        width: 180px;
        height: 200px;
     }
`

export const CardFlex = styled.div`
    padding: 5px;
    width: 40%;
    
`

export const CardTitle = styled.h1`
     font-size: 18px;
     font-family: 'Abel', sans-serif;
     @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 12px;
     }
`

export const CardImg= styled.img`
      width: 49%;
      height: 90%;
      object-fit: cover;
      border-radius: 15px;
`
export const CardUl= styled.ul`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
    justify-content: center;
    align-items: center;
`

export const CardLi= styled.li`
    width: 75px;
    background-color: ${({theme}) => theme.palette.light_pink};
    color: ${({theme}) => theme.palette.sub_text};
    font-family: 'Abel', sans-serif;
    padding: 2px;
`
