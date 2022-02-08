import React from "react";
import Contact from "./Contact";
import Heroes from "./Heroes";
import Icons from "./Icons";
import Products from "./Products";
import Review from "./Review";
import About from "./About";

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
