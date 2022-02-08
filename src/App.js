import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./containers/Home";
import Footer from "./components/Footer/Footer";
import Product from "./containers/Product";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
