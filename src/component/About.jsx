import React, { useState } from "react";
import "../scss/about.scss";

function About(props) {
  const [hovered, setHovered] = useState(false);


  return (
    <div className="aboutc">
      <h1 id="NavAbout">About</h1>
      <p>
        배운것으로 끝내지 않고 숙달이 될 때까지 반복 하면서 새로운 내용은
        <br />
        늘려가면서 끊임없이 배우려는 사람입니다. 배움에 욕심이 많아서 새로운{" "}
        <br />
        시도는 새로운 배움으로 생각하는 신입 개발자 입니다.
      </p>
      <div>
        <div>
          <img src={`/imgs/info.png`} width="50px" height="50px" />
          <p>강권영</p>
        </div>
        <div>
          <img src={`/imgs/year_happy.png`} width="50px" height="50px" />
          <p>1991 .1 .6</p>
        </div>
        <div>
          <img src={"/imgs/port_phone.png"} width="50px" height="50px" />
          <p>010-9104-2440</p>
        </div>
      
        <div>
          <img src={"/imgs/adress.png"} width="50px" height="50px" />
          <p>
            <span>인천광역시 남동구</span>
          </p>
        </div>
        <div>
          <img src={"/imgs/emile.png"} width="50px" height="50px" />
          <p>
            <span>breaker0105@nate.com</span>
          </p>
        </div>
        <div>
          <img src={"/imgs/book.png"} width="50px" height="50px" />
          <p>
            <span>인하공업전문대학</span>
          </p>
        </div>
      </div>
      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {hovered ? (
        <img src={"/imgs/resume.png"} width="680px" height="480px" className="aboutimg"/>
      ) : (
        <img src={"/imgs/imageaa.png"} width="680px" height="480px" />
      )}
    </div>
    </div>
  );
}

export default About;
