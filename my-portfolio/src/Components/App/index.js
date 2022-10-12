import React from "react";
import Header from "../Header";
import Nav from "../Nav";
import About from "../About";
import Experience from "../Experience";
import Services from "../Services";
import Portfolio from "../Portfolio";
import Testimonials from "../Testimonials";
import Contact from "../Contact";
import Footer from "../Footer";

const index = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
