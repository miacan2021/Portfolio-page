import { About } from "./components/layout/Home/About";
import { Contact } from "./components/layout/pattern/Contact";
import { Featured } from "./components/layout/Home/Featured";
import { Hero } from "./components/layout/Home/Hero";
import { NavBar } from "./components/layout/pattern/NavBar";
import { GrobalStyles } from "./components/styles/Globals.styled";
 

const App = () => {
  return (
    <>
    <GrobalStyles />
    <NavBar />
      <Hero />
      <Featured />
      <About />
      <Contact />
    </>
  );
}

export default App;
