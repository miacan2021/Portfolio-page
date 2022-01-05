import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { Line, Logo, LogoImg, LogoSet, Menu, MenuIcon, Nav, NavList, NavItem, Resume, LinkUl, LinkLi} from "./Nav.styled"
import { theme } from "../styles/Globals.styled"
import { GoMarkGithub } from "react-icons/go";
import { TiSocialLinkedinCircular, TiSocialTwitterCircular, TiMail } from "react-icons/ti";
import { SiDevdotto } from "react-icons/si";

export const NavBar = () => {

    const [open, setOpen] = useState<boolean>(false)
    
    const handleOpen = (): void => setOpen(!open)

    return(
        <ThemeProvider theme={theme}>
            <Nav open={open}>
                
                <LogoSet>
                <LogoImg />
                <Logo>SHIHO<br/>KAZAMA</Logo>
                </LogoSet>
                <Menu>
                <Line />
                <MenuIcon onClick={handleOpen}>
                    {open ? 'CLOSE' : 'MENU' }</MenuIcon>
                </Menu>
                <NavList open={open}>
                    <NavItem open={open} onClick={handleOpen}>HOME</NavItem>
                    <NavItem open={open} onClick={handleOpen}>ABOUT</NavItem>
                    <NavItem open={open} onClick={handleOpen}>WORK</NavItem>
                    <NavItem open={open} onClick={handleOpen}>CONTACT</NavItem>
                    <NavItem open={open} onClick={handleOpen}><Resume>RESUME</Resume></NavItem>
                    <LinkUl>
                    <LinkLi><a href="https://github.com/miacan2021" rel="noopener noreferrer" target="_blank"><GoMarkGithub size={'20px'} color={"#594a4e"} /></a></LinkLi>
                    <LinkLi><a href="https://github.com/miacan2021" rel="noopener noreferrer" target="_blank"><TiSocialLinkedinCircular size={'30px'} color={"#594a4e"} /></a></LinkLi>
                    <LinkLi><a href="https://twitter.com/shiho_kazama" rel="noopener noreferrer" target="_blank"><TiSocialTwitterCircular size={'30px'} color={"#594a4e"} /></a></LinkLi>
                    <LinkLi><a href="https://dev.to/miacan2021" rel="noopener noreferrer" target="_blank"><SiDevdotto size={'30px'} color={"#594a4e"} /></a></LinkLi>
                    <LinkLi><a href="mailto:mia.can2021@gmail.com"><TiMail size={'30px'} color={"#594a4e"} /></a></LinkLi>
                    </LinkUl>
                </NavList>
            </Nav>
         </ThemeProvider>

    )
}