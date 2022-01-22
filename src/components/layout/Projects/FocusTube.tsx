import { GrobalStyles } from "../../styles/Globals.styled"
import { NavBar } from "../pattern/NavBar"
import { ThemeProvider } from "styled-components"
import { theme, darkTheme } from "../../styles/Globals.styled"
import { useSetTheme } from "../../../hooks/useSetTheme"
import { ContentTitle, ContentWarapper } from "./Detail.styled"

export const FocusTube = () => {
  const { modeTheme } = useSetTheme()

    return(
      <>
      <GrobalStyles />
      <ThemeProvider theme={ modeTheme === 'light' ? theme : darkTheme}>
        <NavBar />
      <ContentWarapper>
        <ContentTitle>Cafe Van</ContentTitle>
      </ContentWarapper>
      </ThemeProvider>
      </>
    )
};

