import { About } from "./components/layout/Home/About";
import { Contact } from "./components/layout/pattern/Contact";
import { Featured } from "./components/layout/Home/Featured";
import { Hero } from "./components/layout/Home/Hero";
import { NavBar } from "./components/layout/pattern/NavBar";
import { GrobalStyles } from "./components/styles/Globals.styled";
import { useSetTheme } from "./hooks/useSetTheme";
import { ThemeProvider } from "styled-components"
import { theme, darkTheme } from "./components/styles/Globals.styled"
import { Home } from "./components/layout/Home/Hero.styled";


const App = () => {
  const {modeTheme, setNextMode } = useSetTheme()

  return (
    <>
    <ThemeProvider theme={ modeTheme === 'light' ? theme : darkTheme }>
    <GrobalStyles />
          <NavBar />
          <button style={{position:"absolute", zIndex:500, width:'100px'}} onClick={() => setNextMode(modeTheme)}>theme</button>
          <Home>
          <Hero />
          <Featured />
          <About />
          <Contact />
          </Home>
      </ThemeProvider>
    </>
  );
}

export default App;
