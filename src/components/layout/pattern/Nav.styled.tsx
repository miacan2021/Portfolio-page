import styled from "styled-components";

export const Nav = styled.nav<{open: boolean}>`
    height: 110px;
    width: 100%;
    background: ${({ open }) => open ? '#fffffe' : 'transparent'};
    display: flex;
    align-items: center;
    gap: 5px;
    z-index: 90;
    position: fixed;
    transition: all ease .5s;
    @media (max-width: ${({theme}) => theme.mobile}) {
        width: 80vw;
        justify-content: center;
        transition: all ease 1.5s;
    }
`
export const LogoSet = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding-left: 25px;
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
    color: #E090B9;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
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
    color: ${({theme}) =>  theme.palette.sub_text };
    width: 0.5px;
    height: 20px;
    background-color: ${({theme}) =>  theme.palette.head_text };
    margin-left: 10px;
`


export const MenuIcon = styled.div`
    color: ${({theme}) => theme.palette.white};
    background-color: ${({theme}) =>  theme.palette.sub_text};
    padding: 7px;
    border: ${({theme}) => `1px solid ${theme.palette.green}` };
    font-family: 'Abel', sans-serif;
    margin-left: 20px;
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 16px;
    cursor: pointer;
    transition: all ease .5s;
    box-shadow: ${({theme}) => `5px 5px 0px 0 ${theme.palette.pink}`}; 
    &:hover {
        letter-spacing: 5px;
        margin-left: 15px;
        box-shadow:none;
    }
    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 12px;
        letter-spacing: 3px;
        box-shadow: ${({theme}) => `3px 3px 0px 0 ${theme.palette.pink}`}; 
        &:hover {
        letter-spacing: 4px;
        margin-left: 16px;
    }
    }
`

export const NavList = styled.ul<{open: boolean}>`
    width: 100%;
    height: 80px;
    padding-right: 20px;
    display: ${({ open }) => open ? 'flex' : 'none'};
    align-items: flex-end;
    justify-content: space-around;
    color: ${({theme}) =>  theme.palette.sub_text };
    font-family: 'Abel', sans-serif;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    flex-wrap: wrap;
    transition: all ease .5s;
    z-index: 97;
    animation: ${({ open }) => open ? 'fade-in .8s' : 'fade-out .8s'};
    overflow: hidden;
        @keyframes fade-in {
        from {
            transform: translateX(-2000px);
        }
        to {
            transform: translateX(0px);
        }
        }
        @keyframes fade-out {
        from {
            transform: translateX(0px);
        }
        to {
            transform: translateX(-2000px);
        }
        }
    @media (max-width: ${({theme}) => theme.mobile}) {
        width: 80vw;
        height: 80vh;
        flex-direction: column;
        justify-content: space-around;
        background:${({theme}) =>  theme.palette.white };
        position: fixed;
        top: 0;
        left: 0;
        margin-top: 100px;
        padding-bottom: 3rem;
        align-items: center;
    }
`

export const NavItem = styled.li <{open: boolean}>` 
    width: 70px;
    margin-left: 20px;
    transition: all ease .3s;
    & a{
        color: ${({theme}) =>  theme.palette.sub_text };
    }
    &:hover{
      letter-spacing: 1px;
    }
    @media (max-width: ${({theme}) => theme.mobile}) {
        width: auto;
        margin-left: 0px;
    }
`

export const Resume = styled.div`
    cursor: pointer;
    width: 100px;
    background:${({theme}) =>  theme.palette.light_pink };
    padding: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${({theme}) =>  theme.palette.sub_text};
`

export const LinkLi = styled.li`
    transition: all ease .3s;
    &:hover{
        transform: scale(1.1, 1.1)
    }
`

export const LinkUl = styled.ul`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content:flex-end;
    gap: 20px;
@media (max-width: ${({theme}) => theme.mobile}) {
    width: 80%;
    margin: 0 auto;
    justify-content:center;
    }
   
`
