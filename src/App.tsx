import { Hero } from "./components/layout/Hero";
import { NavBar } from "./components/layout/NavBar";
import { GrobalStyles } from "./components/styles/Globals.styled";

const App = () => {

  return (
    <>
    <GrobalStyles />
    <NavBar />
      <Hero />
    </>
  );
}

export default App;
