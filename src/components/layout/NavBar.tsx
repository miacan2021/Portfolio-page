import { ThemeProvider } from "styled-components"
import { Logo, LogoImg, LogoSet, Nav } from "./Nav.styled"
import { theme } from "../styles/Globals.styled"

export const NavBar = () => {
    return(
        <ThemeProvider theme={theme}>
            <Nav>
                <LogoSet>
                <LogoImg />
                <Logo>SHIHO<br/>KAZAMA</Logo>
                </LogoSet>
                <div>Menu</div>
                <div>Nav list</div>
            </Nav>
         </ThemeProvider>

    )
}