import React, { useEffect, useState } from "react";
import axios from "axios";
import "../scss/workform.scss";
import { useStore } from "../zustandd/Store";
import { Link } from "react-router-dom";
import Usercom from "./Usercom";
// import { useLocation } from "react-router-dom";

function Workform({ url, worktitle }) {
  // const location = useLocation();
  const { action, workform } = useStore();
  // const [nowurl, setnowurl] = useState(location.pathname)
  
  const [title, setTitle] = useState("");
  const [inserttxt, setInserttxt] = useState("");

  const [revue, setRevue] = useState(3);

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
  function deleteform(id) {
   
    // let a = workform.filter((obj) => {
    //   return obj.id !== id;
    // });
    action("delete", id);
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

  const loadMore = () => {
    setRevue((prev) => prev + 2);
  }

  return (
    <article className="crudrevue" style={url === undefined ? {width: '100%',  margin: '200px auto'} : {width:'687px'}}>
      <p>리뷰:</p>
      <div>
        {/* <h4>{worktitle === undefined ? "프로젝트 리뷰" : worktitle}</h4> */}
        
        <form onSubmit={save}>
          <div>
            <input
              type="text"
              name="title"
              placeholder="프로젝트 제목 입력해주세요"
              value={title}
              onChange={createform}
            />
            <input
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
            <form onSubmit={twofromsubmit}>
              {workform.length &&
                // workform.slice(0, 1).map((obj) => {
                workform.slice(0, revue).map((obj) => {
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
              <p onClick={loadMore}>MORE</p>
            </div>
          </>
        )}
      </div>
      
    </article>
  );
}

export default Workform;
