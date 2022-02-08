import React from "react";
import Contact from "../components/Home/Contact/Contact";
import Heroes from "../components/Home/Heroes/Heroes";
import Icons from "../components/Home/Icons/Icons";
import Products from "../components/Home/Products/Products";
import Review from "../components/Home/Review/Review";
import About from "../components/Home/About/About";

export default function Home() {
  return (
    <main>
      <Heroes />
      <About />
      <Icons />
      <Products />
      <Review />
      <Contact />
    </main>
  );
}