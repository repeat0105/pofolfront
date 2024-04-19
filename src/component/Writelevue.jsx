import React, { useEffect, useState } from "react";
import Workform from "./Workform";
import { useLocation } from "react-router-dom";
import Fireworks from "../jsjs/Fireworks";
import Menubar from "./Menubar";

function Writelevue(props) {
  const location = useLocation();
  const [revueurl, setRevueurl] = useState(null);
  const [formwidth, setFormwidth] = useState(window.innerWidth);

  useEffect(() => {
    setRevueurl(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setFormwidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className={`resive ${formwidth <= 768 ? formwidth <= 510 ? 'bigsmall-screen': 'small-screen' : ''}`} style={{marginTop:'120px'}}>
      <Workform url={revueurl} />
      <Fireworks />
      <Menubar />
    </div>
  );
}

export default Writelevue;
