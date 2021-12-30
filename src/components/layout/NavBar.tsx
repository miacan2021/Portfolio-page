import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { Line, Logo, LogoImg, LogoSet, Menu, MenuIcon, Nav, NavList, NavItem, Resume} from "./Nav.styled"
import { theme } from "../styles/Globals.styled"



export const NavBar = () => {

    const [open, setOpen] = useState<boolean>(false)
    
    const handleOpen = (): void => setOpen(!open)

    return(
        <ThemeProvider theme={theme}>
            <Nav>
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
                </NavList>
            </Nav>
         </ThemeProvider>

    )
}