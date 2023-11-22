import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Prices from "./components/prices/Prices";
import OurWorks from "./components/works/Works";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Prices />
        <OurWorks />
      </main>
    </>
  );
}

export default App;
