import styled from "styled-components";

export const Nav = styled.nav`
    height: 80px;
    width: 100%;
    background:${({theme}) =>  theme.palette.white };
    display: flex;
    align-items: center;
    gap: 5px;
    z-index: 98;
    @media (max-width: ${({theme}) => theme.mobile}) {
        width: 24rem;
        justify-content: center;
    }
`
export const LogoSet = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    cursor: pointer;
    z-index: 99;
    padding-left: 20px;
    @media (max-width: ${({theme}) => theme.mobile}) {
        justify-content: center;
    }
`

export const LogoImg = styled.div`
    width: 40px;
    height: 40px;
    background-image: url("../img/logo.png");
    background-size: cover;
    @media (max-width: ${({theme}) => theme.mobile}) {
        width: 30px;
        height: 30px;
    }
`
export const Logo = styled.h1`
    color: ${({theme}) =>  theme.palette.head_text };
    font-family: 'Josefin Slab', sans-serif;
    font-size: 13px;
    letter-spacing: 5px;
    font-weight: bold;
    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 10px;
        letter-spacing: 3px;
    }
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    z-index: 99;
`


export const Line = styled.div`
    color: ${({theme}) =>  theme.palette.head_text };
    width: 0.5px;
    height: 20px;
    background-color: ${({theme}) =>  theme.palette.head_text };
    margin-left: 10px;
`


export const MenuIcon = styled.div`
    color: ${({theme}) =>  theme.palette.head_text };
    font-family: 'Abel', sans-serif;
    margin-left: 20px;
    font-weight: bold;
    text-shadow: ${({theme}) => `0px 0px 1px ${theme.palette.head_text}` };
    letter-spacing: 3px;
    font-size: 14px;
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover {
        letter-spacing: 5px;
        margin-left: 15px;
    }
    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 12px;
        letter-spacing: 3px;
        &:hover {
        letter-spacing: 4px;
        margin-left: 16px;
    }
    }
`

export const NavList = styled.ul<{open: boolean}>`
    background:${({theme}) => `linear-gradient(-135deg, ${theme.palette.beige}, transparent)`};
    width: 100%;
    height: 80px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${({theme}) =>  theme.palette.head_text };
    font-family: 'Abel', sans-serif;
    cursor: pointer;
    font-size: 14px;
    flex-wrap: wrap;
    transform: ${({ open }) => open ? 'translateX(0px)' : 'translateX(-400px)'} translateX(0px);
    opacity: ${({ open }) => (open ? 1 : 0)};
    transition: all ease 0.5s;
    @media (max-width: ${({theme}) => theme.mobile}) {
        width: 24rem;
        height: 100vh;
        flex-direction: column;
        justify-content: space-around;
        background:${({theme}) =>  theme.palette.white };
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 2rem;
    }
`

export const NavItem = styled.li <{open: boolean}>` 
    width: 70px;
    margin-left: 20px;
    transition: all ease 0.5s;
    &:hover{
      letter-spacing: 1px;
    }
    @media (max-width: ${({theme}) => theme.mobile}) {
        margin-left: 0px;
    }
`

export const Resume = styled.div`
    cursor: pointer;
    background:${({theme}) =>  theme.palette.light_pink };
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`