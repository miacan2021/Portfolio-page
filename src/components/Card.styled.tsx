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
    &:hover{
        transform: translateY(-10px);
    }
    @media (max-width: ${({theme}) => theme.mobile}) {
        width: 250px;
        height: 220px;
     }
`

export const CardTitle = styled.h1`
     font-size: 15px;
     @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 12px;
     }
`




