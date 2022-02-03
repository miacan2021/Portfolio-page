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
import { Home, Loading, LoadingImg, LoadingText, LoadingWrapper, ModeBtn } from "./components/layout/Home/Hero.styled";
import { MdModeNight, MdWbSunny } from "react-icons/md";
import { motion } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const {modeTheme, setNextMode } = useSetTheme()
  let width = window.innerWidth;

  return (
    <>
    <ThemeProvider theme={ modeTheme === 'light' ? theme : darkTheme }>
    <GrobalStyles />
    {loading ?
    <LoadingWrapper>
    <Loading as={motion.div} 
    animate={{ y: -1000 }}
    initial={{ y: 0 }}
    transition={{ delay: 2, duration: 1}}>
     <LoadingImg as={motion.img} initial={{ height: '0px' }} animate={{ height: '60px'}} transition={{ duration: 1}} src="/img/logo.png" />
     <LoadingText as={motion.h1} initial={{ height: '0px' }} animate={{ height: '30px'}} transition={{ duration: 1.5}}>Shiho Kazama</LoadingText>
    </Loading>
    </LoadingWrapper>
      :  
       <LoadingWrapper>
       <motion.div animate={{ y: 0 }}
           initial={{ y: 1000 }}
           transition={{ duration: 1}}>
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
          </motion.div>
          </LoadingWrapper>
      }
      </ThemeProvider>
    </>
  );
}

export default App;
