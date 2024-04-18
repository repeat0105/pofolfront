import React, { useRef, useState } from "react";
import "../scss/fritstext.scss";
import { Link, useNavigate } from "react-router-dom";

function FritsText(props) {
  const [serach, setSerach] = useState("");
  const userRef = useRef(null);
  const navigate = useNavigate();

  function serachtxt(e) {
    e.preventDefault();
    const userInput = userRef.current?.value || "";

    if (
      userInput.toUpperCase() === "WORK" ||
      userInput.toUpperCase() === "SKILL"
    ) {
      switch (userInput.toUpperCase()) {
      
        case "SKILL":
          navigate(`/${userInput} `, { state: { num: 0 } });
          break;
        case "WORK":
          navigate(`/${userInput}`, { state: { num: 0 } });
          break;
      }
    } else {
      alert("work, skill 을 입력해주세요");
      setSerach("");
    }
  }
  return (
    <div className="fritstext">
      <p>
        Frontend를 파악하고
        <br /> Backend까지 응용하고 싶은
        <br /> 열정이 있는 신입 개발자
      </p>
      <div>
        <p>
          새로운 기술과 도전을 즐기며, 끊임없이 성장하는 모습을 보여줄 수 있는
          개발자 <br />
          강권영입니다. 문제에 대한 뛰어난 해결능력을 가지고, 어려운
          상황에서도 <br />
          적극적으로 대응할 수 있는 개발자 입니다.
        </p>
        <div>
          <form
            onSubmit={(e) => {
              serachtxt(e);
            }}
          >
            <label htmlFor="serach"></label>
            <input
              type="text"
              name="serach"
              id="serach"
              placeholder="WORK"
              ref={userRef}
              value={serach}
              onChange={(e) => {
                setSerach(e.target.value);
              }}
            />
            <label htmlFor="serach"></label>
            <input type="submit"></input>
          </form>
          <div>
            <p>
              <Link to="/work" state={"0"}>
                #WORK
              </Link>
            </p>
            <p>
              <Link to="/" state={"0"}>
                #ABOUT
              </Link>
            </p>
            <p>
              <Link to="/skill" state={"0"}>
                #SKILL
              </Link>
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default FritsText;
