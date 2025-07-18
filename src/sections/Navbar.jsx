/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

import { useState } from "react";
import { motion } from "motion/react";



function Navigation({ onLinkClick }){
  return <ul className="nav-ul">
    <li className="nav-li">
      <Link 
        to="/#hero" 
        className="nav-link cursor-pointer"
        onClick={onLinkClick}
      >
        Home
      </Link>
    </li>

    <li className="nav-li">
      <Link 
        to="/#about" 
        className="nav-link cursor-pointer"
        onClick={onLinkClick}
      >
        Chi Siamo
      </Link>
    </li>
    <li className="nav-li">
      <Link 
        to="/#work" 
        className="nav-link"
        onClick={onLinkClick}
      >
        Lavori
      </Link>
    </li>

    <li className="nav-li">
      <Link 
        to="/#contact" 
        className="nav-link"
        onClick={onLinkClick}
      >
        Contatti
      </Link>
    </li>
  </ul>
}

function Navbar() {

  const handleLinkClick = () => {
    setIsOpen(false); // chiudo il menu al click sul link
  };

  const [isOpen, setIsOpen ] = useState(false);

  return (
    <div 
      className="fixed inset-x-0 z-20 w-full
                 backdrop-blur-lg bg-primary/40 py-2"
    >
      <div className="mx-auto max-w-7xl c-space">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a 
            href="/"
            className="text-xl font-bold transition-colors
                       text-neutral-400 hover:text-white" 
          >
            ValRoc
          </a>
          <button
            onClick={()=> setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400
                       hover:text-white font-bold sm:hidden"
          >
            <img 
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle" 
              className="w-6 h-6"
            />
          </button>
          <nav
            className="hidden sm:flex"
          >
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
      <motion.div 
        className="block overflow-hidden text-center sm:hidden"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0}}
        style={{ maxHeight: "100vh" }}
        transition={{ duration: 1 }}
      >
        <nav className="pb-5">
          <Navigation onLinkClick={handleLinkClick}/>
        </nav>
      </motion.div>
      )}
    </div>
  )
}

export default Navbar;