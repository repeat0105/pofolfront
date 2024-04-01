import React, { useState, useEffect, useRef } from "react";
import Menubar from "./Menubar";
import MouseOneHtml from "./MouseOneHtml";
import "../scss/work.scss";
import { Link, useLocation } from "react-router-dom";
import topscroll from "../jsjs/topscroll";

import Workform from "./Workform";
import workdata from "../datajson/data.json";

function Work(props) {
  const [scrollCount, setScrollCount] = useState(0);
  const [pagenum, setPagenum] = useState(0);
  const [prolists, setProlists] = useState(false);
  const bigimgref = useRef(0)


  const locate = useLocation();

  //페이지
  const work = workdata.workdata[pagenum];

  let a ;
  useEffect(() => {
    a= bigimgref.current
    if (pagenum === 1) {
      a.style.backgroundImage = "url('/imgs/imagework.png')";
    } 
  },[prolists, pagenum])

  useEffect(() => {
    if (locate.state.num === null ?  locate.state.num = 0 : locate.state.num === 0) {
      // 검색 + 상단스크롤
      topscroll(locate.state.num);
      // 메뉴바 상단스크롤
    } else if (locate.state === "0") {
      topscroll(locate.state);
    }

    //마스킹
    const handleScroll = () => {
      setScrollCount(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
  const handelList = () => {
    setProlists(!prolists);
  };

  return (
    <div className="classwork">
      <div className={`workmask`}>
        <div
          style={{
            clipPath: `circle(calc(100% - ${
              scrollCount * 0.1
            }%) at center 700px)`,
          }}
        >
          <img ref={bigimgref} className="makbigimg" src={work.bigimg} alt=""/>
        </div>
      </div>

      <article className={`project-work`}>
        <div>
          <div>
            <div style={prolists ? { display: "none" } : { display: "block" }}>
              <h1>{work.title}</h1>
              <p>{work.titletxt}</p>
              <p>{work.date} </p>
              <p>{work.language}</p>
              <div>
                <button>
                  <Link to={work.site} target="_blank">
                    사이트 보기
                  </Link>
                </button>
                <button>
                  <Link to={work.github} target="_blank">
                    깃허브
                  </Link>
                </button>
              </div>
            </div>
            <div style={prolists ? { display: "block" } : { display: "none" }}>
              {workdata.workdata.map((a, i) => {
                return (
                  <div
                    key={i}
                    className="prolist1"
                    onClick={() => {
                      setPagenum(i);
                    }}
                  >
                    <div className="prolist2">
                      <img src={a.bigimg} width={50} height={50} alt="" />
                    </div>
                    <div className="prolist3">
                      <p>{a.title}</p>
                      <p>{a.language}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p
              onClick={() => {
                setPagenum(0);
              }}
            >
              이전{" "}
            </p>
            <article onClick={handelList}>
              <div>
                <div>
                  <span></span>
                  <span></span>
                </div>
                <div>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </article>
            <p
              onClick={() => {
                setPagenum(1);
              }}
            >
              다음{" "}
            </p>
          </div>
        </div>
        <div style={{ color: "#fff" }}>
          <p>목표:</p>
          <p>{work.content}</p>
          <p>설명:</p>
          <p>{work.contentthree}</p>
          <p>후기:</p>
          <p>{work.contenttwo}</p>
          <img src={work.img} width={560} alt="" />
          <Workform worktitle={work.title} />
        </div>
      </article>

      <Menubar />
      <MouseOneHtml />
    </div>
  );
}

export default Work;
