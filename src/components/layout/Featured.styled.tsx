import styled from "styled-components";

export const FeaturedWrapper = styled.div`
     position: relative;
     background: ${({theme}) => theme.palette.beige };
     width: 100%;
     height: 400px;
     text-align: center;
     margin: 90px auto;
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
`
export const Cards = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
`