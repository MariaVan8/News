import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open)
    };

    useEffect(() => {
        const mql = window.matchMedia('(min-width: 766px)');

        function removeTransition(e) {
            if (e.matches) {
                // document.body.classList.remove('is-open');
                setIsOpen(false);
            }
          }

          mql.addListener(removeTransition);

          // Cleanup function to remove listener when component unmounts
          return () => {
              mql.removeListener(removeTransition);
          }
      }, []);


    return (
      <nav className="nav">
        <div className="nav-logo">
          <a href="#0">
            <img src="./Images/raincity-report.png" alt="RainCity News Report Logo" />
          </a>
          <div className={`nav-menu-trigger ${isOpen ? 'nav-is-open' : ""}`} onClick={toggleMenu} ><span></span><span></span><span></span></div>
        </div>
       <div className={`nav-container ${isOpen ? 'nav-is-open' : ""}`}>
 

        <li><NavLink to="#0" className="nav-link">Home</NavLink></li>
        <li><NavLink to="#0" className="nav-link">Feature</NavLink></li>
        <li><NavLink to="#0" className="nav-link">Pets</NavLink></li>
        <li><NavLink to="#0" className="nav-link">Games</NavLink></li>
        <li><NavLink to="#0" className="nav-link">Technology</NavLink></li>
        </div>
        
        </nav>
    );
}

export default Nav;