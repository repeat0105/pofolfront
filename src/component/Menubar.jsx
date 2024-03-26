import React, { useState, useEffect, useRef } from "react";
import "../scss/menubar.scss";
import { Link } from "react-router-dom";

const Menubar = () => {

  const lastScrollTop = useRef(0);
  const [navClass, setNavClass] = useState("");

  const hasScrolled = () => {
    const st = window.pageYOffset;

    if (st > lastScrollTop.current) {
      setNavClass("nav-up");
    } else {
      setNavClass("");
    }
    lastScrollTop.current=st;
  };
  

  useEffect(() => {
    window.addEventListener("scroll", hasScrolled);

    return () => {
      window.removeEventListener("scroll", hasScrolled);
    };
  }, []);


  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleButtonClick = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (

      <header className={`header ${navClass}`}>
        
        <div className="logo">
          <h3><Link to="/">KKY PortFolio</Link></h3>
        </div>
        <div>
          <ul className="nav" style={isSidebarActive ? {display:'block', display:'flex'} : {display:'none'}}>
            <li className="nav__item">
              <Link to="/" state={"0"}>
                HOME
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/skill" state={"0"}>
                SKILL
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/work" state={"0"}>
                WORK
              </Link>
            </li>
          </ul>
          <div
            id="btn9"
            className={isSidebarActive ? "active9" : ""}
            onClick={handleButtonClick}
            >
            <div id="top9"></div>
            <div id="middle9"></div>
            <div id="bottom9"></div>
          </div>
        </div>
      </header>
  );
};

export default Menubar;
