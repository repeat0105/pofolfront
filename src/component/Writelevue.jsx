import React, { useEffect, useState } from "react";
import Workform from "./Workform";
import { useLocation } from "react-router-dom";
import Fireworks from "../jsjs/Fireworks";

function Writelevue(props) {
  const location = useLocation();
  const [revueurl, setRevueurl] = useState(null);

  useEffect(() => {
    setRevueurl(location.pathname);
  }, [location]);

  return (
    <div>
      <Workform url={revueurl} />
      <Fireworks />
    </div>
  );
}

export default Writelevue;
