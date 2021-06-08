import React, { useEffect } from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import { Navbar, Footer } from "./components";
import Aos from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";

import { FooterObj } from "./data/FooterData";

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Home />
        <Footer {...FooterObj} />
      </Router>
    </>
  );
}

export default App;
