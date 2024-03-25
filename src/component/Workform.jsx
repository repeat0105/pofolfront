import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../scss/workform.scss";
import { useStore } from "../zustandd/Store";
import { Link } from "react-router-dom";
import Usercom from "./Usercom";

function Workform({ url, worktitle }) {

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

    axios.get(process.env.REACT_APP_IPURL).then((res) => {
      setIp(res.data);
    });
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
   
    let a = workform.filter((obj) => {
      return obj.id !== id;
    });
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

  return (
    <article className="crudrevue" style={url && {width: '687px', marginLeft: '50px' }}>
      <div>
        <h4>{worktitle === undefined ? "프로젝트 리뷰" : worktitle}</h4>
        <form onSubmit={save}>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={createform}
            />
            <input
              type="textcontent"
              name="content"
              value={inserttxt}
              onChange={inserform}
            />
            <input type="submit" name="save" value="저장" />
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
                뒤로가기
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
                프로젝트 리뷰하기
              </Link>
            </button>
            <form onSubmit={twofromsubmit}>
              {workform.length &&
                workform.slice(0, 1).map((obj) => {
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
        )}
      </div>
      
    </article>
  );
}

export default Workform;
