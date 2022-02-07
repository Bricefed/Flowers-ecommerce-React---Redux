import Navigation from "./components/Navigation/Navigation";
import About from "./containers/About";
import Home from "./containers/Home";
import Icons from "./containers/Icons";

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Home />
        <About />
        <Icons />
      </main>
    </>
  );
}

export default App;
