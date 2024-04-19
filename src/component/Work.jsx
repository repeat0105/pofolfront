import React, { useState, useEffect, useRef } from "react";
import Menubar from "./Menubar";
import MouseOneHtml from "./MouseOneHtml";
import "../scss/work.scss";
import { Link, useLocation } from "react-router-dom";
import topscroll from "../jsjs/topscroll";

import Workform from "./Workform";
import workdata from "../datajson/data.json";

function Work(props) {

  const [pagenum, setPagenum] = useState(0);
  const [prolists, setProlists] = useState(false);
  const bigimgref = useRef(0)


  const locate = useLocation();

  //페이지
  const work = workdata.workdata[pagenum];



  useEffect(() => {
    if (locate.state.num === null ?  locate.state.num = 0 : locate.state.num === 0) {
      // 검색 + 상단스크롤
      topscroll(locate.state.num);
      // 메뉴바 상단스크롤
    } else if (locate.state === "0") {
      topscroll(locate.state);
    }

  }, []);

 
  const handelList = () => {
    setProlists(!prolists);
  };

  return (
    <div className="classwork">
      <div className={`workmask`}>
        <div>
          <p>
            {work.title}
          </p>
          <img ref={bigimgref} className="makbigimg" src={work.bigimg} alt=""/>
        </div>
      </div>

      <article className={`project-work`}>
        <div>
          <div>
            <div className="left">
              {/* <h1>{work.title}</h1> */}
              {/* <p><b>개요</b>{work.titletxt}</p> */}
              <p><b>제작일</b>{work.date} </p>
              <p><b>제작스킬</b>{work.language}</p>
              <p><b>배포</b><Link to={work.site} target="_blank">{work.site}</Link></p>
              <p><b>깃허브</b><Link to={work.github} target="_blank">{work.github}</Link></p>
                {/* <div>
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
                </div> */}
            </div>
            <div className="project-list" style={prolists ? { display: "block" } : { display: "none" }}>
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
                // if(pagenum === 0) {
                //   pagenum = 2
                // }
                setPagenum(pagenum);
                if(pagenum === 2) {                
                  setPagenum(1)                
                }else if(pagenum === 1) {
                  setPagenum(0)
                } else if(pagenum === 0) {
                  setPagenum(2);
                }
              }}
            >
              
            </p>
            <article className="all-project" onClick={handelList}>
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
                if(pagenum === 0) {
                
                  setPagenum(1)
                
                }else if(pagenum === 1) {
                  setPagenum(2)
                } else if(pagenum === 2) {

                  setPagenum(0);
                }
              }}
            >
              
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
          <img src={work.img} width={560} height={300} alt="" />

          <p>글남기기:</p>
          <Workform  />
        </div>
      </article>

      <Menubar />
      <MouseOneHtml />
    </div>
  );
}

export default Work;
