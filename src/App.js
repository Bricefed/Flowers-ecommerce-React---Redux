import Navigation from "./components/Navigation/Navigation";
import About from "./containers/About";
import Home from "./containers/Home";
import Icons from "./containers/Icons";
import Products from "./containers/Products";

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Home />
        <About />
        <Icons />
        <Products />
      </main>
    </>
  );
}

export default App;
