import { ThemeProvider } from "styled-components"
import { theme } from "../styles/Globals.styled"
import { ContactWrapper } from "./Contact.styled"

export const Contact = () => {
    return(
        <ThemeProvider theme={theme}>
            <ContactWrapper>
                <h1>Get in Touch - HIRE ME!</h1>
            </ContactWrapper>
        </ThemeProvider>
    )
}