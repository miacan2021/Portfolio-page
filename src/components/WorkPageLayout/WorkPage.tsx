import { Contact } from "../layout/pattern/Contact"
import { GrobalStyles } from "../styles/Globals.styled";
import { NavBar } from "../layout/pattern/NavBar"

export const WorkPage = () => {
    return(
        <>
        <GrobalStyles />
        <NavBar/>
        <h1>worl page</h1>

        <Contact />
        </>
    )
}