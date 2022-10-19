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
import { motion, useScroll } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
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

export default App;
