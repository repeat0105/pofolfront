import { useState } from "react";
import { useStore } from "../zustandd/Store";

function Usercom({ obj, deleteform, ip }) {
  const { action } = useStore();
  const [edit, setEdit] = useState(null);
  const [updatecontenttxt, setUpdatecontenttxt] = useState("");

  //수정
  function updatafrom(id, content) {
    setEdit(id);
    setUpdatecontenttxt(content);
  }

  function realupdata(clickip) {
    if (clickip === ip) {
   

      action("put", { id: edit, content: updatecontenttxt });
      setUpdatecontenttxt("");
      setEdit(null);
    } else {
    
      alert("다른사람의 댓글입니다.");
    }
  }

  return (
    <div style={{ border: "1px sold #ffffff" }}>
      <p>
        <span> {obj.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>/&nbsp;{obj.date}</span>
      </p>
      <p> {obj.content} </p>
      <div style={edit ? { display: "flex" } : { display: "none" }}>
        <input
          type="textcontent"
          name="updatecontent"
          value={updatecontenttxt}
          onChange={(e) => {
            setUpdatecontenttxt(e.target.value);
          }}
        />
        <button
          onClick={() => {
            realupdata(obj.ip);
          }}
        >
          수정하기
        </button>
      </div>

      <button
        onClick={() => {
          updatafrom(obj.id, obj.content);
        }}
        style={edit ? { display: "none" } : { display: "inline-block" }}
      >
        수정
      </button>
      <button
        onClick={() => {
          deleteform({ id: obj.id, ip: ip });
     
        }}
        style={edit ? { display: "none" } : { display: "inline-block" }}
      >
        삭제
      </button>
    </div>
  );
}

export default Usercom;
