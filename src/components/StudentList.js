import { useState } from "react";
import "./StudentList.css";
import Item from "./Item";
export default function StudentList(props) {
  const {students , deleteStudent} = props
  const [show, setShow] = useState(true);
  const btsStyle = {
    background: show ? "purple" : "green",
  };
  return (
    <>
      <ul>
        <div className="header">
          <h1>จำนวนนักเรียน ({students.length})</h1>
          <button onClick={() => setShow(!show)} style={btsStyle}>
            {show ? "ซ่อน" : "แสดง"}
          </button>
        </div>
        {show && students.map((data) => 
        <Item key={data.id} data={data} deleteStudent={deleteStudent}/>
        )}
      </ul>
    </>
  );
}
