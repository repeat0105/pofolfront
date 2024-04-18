import { useState } from "react";
import { useStore } from "../zustandd/Store";

function Usercom({ obj, deleteform, ip }) {
  const { action } = useStore();
  const [edit, setEdit] = useState(null);
  const [updatecontenttxt, setUpdatecontenttxt] = useState("");

  //수정
  function updatafrom(id, content) {
    // console.log(id, content);

    setEdit(id);
    setUpdatecontenttxt(content);
  }

  // real수정
  // 어떻게 유효성 검사가 되었지 처음 저장시 Ip를 몽고디비에 저장하고 가져와서 사용
  // 2번째 수정할때는 저장을 거쳐야 수정이 가능하니까
  // 결론
  // 처음 브라우저키면 useEffect로 ip 따옴 그래서
  // 처음 저장된 ip와 현재 접속한 사람의 Ip를 비교가 가능해짐
  function realupdata(clickip) {
    if (clickip === ip) {
      // console.log(clickip);

      action("put", { id: edit, content: updatecontenttxt });
      setUpdatecontenttxt("");
      setEdit(null);
    } else {
      // console.log(clickip, ip);
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
          // deleteform(obj.id);
        }}
        style={edit ? { display: "none" } : { display: "inline-block" }}
      >
        삭제
      </button>
    </div>
  );
}

export default Usercom;
