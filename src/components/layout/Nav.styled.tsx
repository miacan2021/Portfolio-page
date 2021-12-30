import styled from "styled-components";

export const Nav = styled.nav`
    height: 80px;
    width: 100%;
    padding: 0 20px;
    background:${({theme}) =>  theme.palette.beige };
`
export const LogoSet = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
`

export const LogoImg = styled.div`
    width: 50px;
    height: 50px;
    background-image: url("../img/logo.png");
    background-size: cover;
`
export const Logo = styled.h1`
    color: ${({theme}) =>  theme.palette.head_text };
    font-family: 'Josefin Slab', sans-serif;
`
