import { createContext } from "react";
import { About } from "./components/layout/Home/About";
import { Contact } from "./components/layout/pattern/Contact";
import { Featured } from "./components/layout/Home/Featured";
import { Hero } from "./components/layout/Home/Hero";
import { NavBar } from "./components/layout/pattern/NavBar";
import { GrobalStyles } from "./components/styles/Globals.styled";
 
export const ModeContext: React.Context<string> = createContext('light')

const App = () => {
  return (
    <>
    <GrobalStyles />
    <ModeContext.Provider value={'light'}>
          <NavBar />
          <Hero />
          <Featured />
          <About />
          <Contact />
      </ModeContext.Provider>
    </>
  );
}

export default App;
