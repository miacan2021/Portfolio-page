import { Contact } from "../pattern/Contact"
import { GrobalStyles } from "../../styles/Globals.styled";
import { NavBar } from "../pattern/NavBar"
import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/Globals.styled"
import Data from '../../../ProjectData.json'


export const WorkPage = () => {
    return(
        <>
        <GrobalStyles />
        <NavBar/>
        <ThemeProvider theme={theme}>
        {}
        <Contact />
        </ThemeProvider>
        </>
    )
}