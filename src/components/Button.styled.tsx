import styled from "styled-components";

export const ButtonPink = styled.button`
    height: 50px;
    width: 250px;
    background:${({theme}) =>  theme.palette.pink};
    border: ${({theme}) => `2px solid ${theme.palette.green}`};
    position: relative;
    z-index: 1;
    display: inline-block;
    color: ${({theme}) => theme.palette.head_text};
    text-align: center;
    transition: .3s ease-in-out;
    cursor: pointer;
    margin-top: 50px;
    @media (max-width: ${({theme}) => theme.mobile}) {
      height: 40px;
      width: 170px;
    }
    &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;
    border: ${({theme}) => `2px solid ${theme.palette.head_text}`};
  }
 &::after {
    position: absolute;
    top: 4px;
    left: 4px;
    content: '';
    width: 102%;
    height: 102%;
    background: ${({theme}) => theme.palette.pink};
    transform: rotate(1deg);
    transition: .3s ease-in-out;
  }
  &:hover {
    color: ${({theme}) => theme.palette.green};
  }
  &:hover::after {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(0);
  }
`
export const ButtonSpan = styled.span`
    position: relative;
    z-index: 2;
    font-size: 16px;
    letter-spacing: 4px;
    @media (max-width: ${({theme}) => theme.mobile}) {
      font-size: 14px;
      letter-spacing: 2px;
    }
`


 
 