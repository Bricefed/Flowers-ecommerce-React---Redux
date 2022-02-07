import Navigation from "./components/Navigation/Navigation";
import About from "./containers/About";
import Home from "./containers/Home";

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
