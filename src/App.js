import Navigation from "./components/Navigation/Navigation";
import Home from "./containers/Home";
import About from "./containers/About";
import Icons from "./containers/Icons";
import Products from "./containers/Products";
import Review from "./containers/Review";
import Contact from "./containers/Contact";

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Home />
        <About />
        <Icons />
        <Products />
        <Review />
        <Contact />
      </main>
    </>
  );
}

export default App;
