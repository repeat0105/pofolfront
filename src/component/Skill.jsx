import React, { useEffect, useState } from "react";
import Menubar from "./Menubar";
import MouseOneHtml from "./MouseOneHtml";
import "../scss/skill.scss";
import skilljson from "../datajson/data.json";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import bubblybutton from "../jsjs/bubblybutton";
import { Link, useLocation } from "react-router-dom";
import topscroll from "../jsjs/topscroll";

function Skill(props) {
  const [skilldatastore, setSkilldatastore] = useState([]);

  const [visibleWork, setVisibleWork] = useState(5);

  const locate = useLocation();

  

  useEffect(() => {
    bubblybutton();

    //상단스크롤
    if (locate.state.num === 0) {
      topscroll(locate.state.num);
    } else if (locate.state === "0") {
      topscroll(locate.state);
    }

    setSkilldatastore(skilljson.skilldata);
  }, []);

  const loadMoreWorks = () => {
    
    setVisibleWork((prev) => prev + 2);
  };
 
  
  return (
    <div className="skillcalss">
      <h1>SKILL</h1>

      <div className="swiperskill">
        <Swiper
          
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            468: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1130: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1450: {
              slidesPerView: 7,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {skilldatastore.map((obj) => {
            return (
              <SwiperSlide key={Number(obj.id)}>
                <div className="swiperskillmap">
                  <img src={obj.img} width="100px" height="100px" />
                  <p>{obj.title}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="flrowtext">
        <p>
          HTML5&nbsp;&nbsp;CSS3&nbsp;&nbsp;JAVASCRIPT&nbsp;&nbsp;SASS&nbsp;&nbsp;JQUERY&nbsp;&nbsp;FIGMA&nbsp;&nbsp;GITHUB&nbsp;&nbsp;REACT&nbsp;&nbsp;REDUX&nbsp;&nbsp;TYPESCRIPT
        </p>
      </div>

      <div>
        {skilldatastore.slice(0, visibleWork).map((obj) => {
          return (
            <div key={obj.id}>
              <div>
                <img src={obj.img} width="100px" height="100px" />
                <p>{obj.content}</p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>

    
      <div>
        {
          visibleWork < 11  
          ? <button className="bubbly-button" onClick={loadMoreWorks}>더 보기</button> 
          :<Link to="/work" state={"0"} className="morecls"> WORK </Link>  
        }

      </div>

      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <Menubar />
      <MouseOneHtml />
    </div>
  );
}

export default Skill;
