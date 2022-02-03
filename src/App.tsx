import { useState, useEffect } from "react";
import { About } from "./components/layout/Home/About";
import { Contact } from "./components/layout/pattern/Contact";
import { Featured } from "./components/layout/Home/Featured";
import { Hero } from "./components/layout/Home/Hero";
import { NavBar } from "./components/layout/pattern/NavBar";
import { GrobalStyles } from "./components/styles/Globals.styled";
import { useSetTheme } from "./hooks/useSetTheme";
import { ThemeProvider } from "styled-components"
import { theme, darkTheme } from "./components/styles/Globals.styled"
import { Home, ModeBtn } from "./components/layout/Home/Hero.styled";
import { MdModeNight, MdWbSunny } from "react-icons/md";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const {modeTheme, setNextMode } = useSetTheme()
  let width = window.innerWidth;

  return (
    <>
    <ThemeProvider theme={ modeTheme === 'light' ? theme : darkTheme }>
    <GrobalStyles />
    {loading ?
    
    <h1>loading</h1> 
    
    :   <>
          <NavBar />
          <Home>
          <ModeBtn  onClick={() => setNextMode(modeTheme)}>
            {modeTheme === 'light' ?
              <MdModeNight size={width > 768 ? '25px': '20px'} color={"#594a4e"} />
              :
              <MdWbSunny size={width > 768 ? '25px': '20px'} color={"#fffffe"} />
              }
          </ModeBtn>
          <Hero />
          <Featured modeTheme={modeTheme} />
          <About />
          <Contact modeTheme={modeTheme} />
          </Home>
          </>
      }
      </ThemeProvider>
    </>
  );
}

export default App;
