import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToHash from "./components/ScrollToHash";
import Loading from "./components/Loading";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
// import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  const [loading, setLoading ] = useState(true);

  useEffect(()=> {
    const timer = setTimeout(()=> setLoading(false), 1500);
    return () => clearTimeout(timer);

  }, []);

    useEffect(() => {
    if (loading) {
      // blocca scroll disabilitando overflow per evitare flash
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [loading]);

  return (
    <BrowserRouter>
    { loading ? <Loading /> :
    <>
      <ScrollToHash />
        <div className="container mx-auto max-w-7xl">
          <Navbar />
          <div id="hero"><Hero /></div>
          <div id="about"><About /></div>
          <div id="work"><Projects /></div>
          <Experience />
          {/* <Testimonial /> */}
          <div id="contact"><Contact /></div>
          <Footer />
        </div>
    </>
    }
    </BrowserRouter>
  )
}

export default App;
