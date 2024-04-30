import React, { useEffect, useState } from "react";
import axios from "axios";
import "../scss/workform.scss";
import { useStore } from "../zustandd/Store";
import { Link } from "react-router-dom";
import Usercom from "./Usercom";


function Workform({ url }) {
 
  const { action, workform } = useStore();
 
  
  const [title, setTitle] = useState("");
  const [inserttxt, setInserttxt] = useState("");

 

  useEffect(() => {
    action("get");
  }, []);


  const date = new Date();
  let day = date.getDate();

  let month = ("0" + (date.getMonth() + 1)).slice(-2); 

  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;


  //ip   
  const [ip, setIp] = useState();
  useEffect(() => {
    try {
      axios.get(process.env.REACT_APP_IPURL).then((res) => {
        setIp(res.data);
      });

    }catch (err) {
      console.log('서버 대기 중 입니다.', '에러 :', err )
    }
  }, []);



  //추가
  const save = async (e) => {
    e.preventDefault();

    if (title === "" || inserttxt === "") {
      alert("리뷰할 프로젝트 이름과 리뷰내용을 다 적어주세요");
    } else {
      let newData = {
        id: Date.now(),
        title: title,
        date: currentDate,
        content: inserttxt,
        ip: ip,
      };
      await action("post", newData);
    }

    setTitle("");
    setInserttxt("");
  };

  //삭제
  function deleteform(value) {

    action("delete", value);
  }


  function twofromsubmit(e) {
    e.preventDefault();
  }


  function createform(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }


  function inserform(e) {
    e.preventDefault();
    setInserttxt(e.target.value);
  }



  return (
    <article className="crudrevue" style={url === undefined ? {width: '100%'} : {width:'687px'}}>
      
      <div>
       
       
        <form onSubmit={save}>
          <div>
            <input
              type="text"
              name="title"
              placeholder="프로젝트 제목 입력해주세요"
              value={title}
              onChange={createform}
            />
            <textarea
              type="textcontent"
              name="content"
              placeholder="프로젝트 리뷰를 입력해주세요"
              value={inserttxt}
              onChange={inserform}
            />
            <input type="submit" name="save" id="rewidth" value="저장  &#12297;" />
          </div>
        </form>

        {url === "/Writelevue" ? (
          <>
            <button>
              <Link
                style={{
                  color: "#000",
                }}
                to="/Work"
                state={"0"}
              >
                &#12296; 뒤로가기
              </Link>
            </button>
            <form onSubmit={twofromsubmit}>
              {workform.length &&
                workform.map((obj) => {
                  return (
                    <Usercom
                      key={obj.id}
                      obj={obj}
                      ip={ip}
                      deleteform={deleteform}
                    />
                  );
                })}
            </form>
          </>
        ) : (
          <>
          
            <form onSubmit={twofromsubmit}>
              {workform.length &&
                
                workform.slice(0, 3).map((obj) => {
                  return (
                    <Usercom
                      key={obj.id}
                      obj={obj}
                      ip={ip}
                      deleteform={deleteform}
                    />
                  );
                })}
            </form>
            <div className="workmore">
            <button>
              <Link
                style={{
                  color: "#000",
                }}
                to="/Writelevue"
                state={"0"}
              >
                프로젝트 리뷰하기 &#12297;
              </Link>
            </button>
     

            </div>
          </>
        )}
      </div>
      
    </article>
  );
}

export default Workform;
