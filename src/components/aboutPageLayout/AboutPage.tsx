import { Contact } from "../layout/Contact"
import { GrobalStyles } from "../styles/Globals.styled";
import { NavBar } from "../layout/NavBar"

export const AboutPage = () => {
    return(
        <>
        <GrobalStyles />
        <NavBar/>
        <h1>about page</h1>

        <Contact />
        </>
    )
}