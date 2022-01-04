import { About } from "./components/layout/About";
import { Contact } from "./components/layout/Contact";
import { Featured } from "./components/layout/Featured";
import { Hero } from "./components/layout/Hero";
import { NavBar } from "./components/layout/NavBar";
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
