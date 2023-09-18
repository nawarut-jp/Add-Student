import { useState } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import "./App.css";
import AddFrom from "./components/AddFrom";
function App() {
  const [students, setStudent] = useState([
    // { id: 1, name: "Tan" },
  ]);

  function deleteStudent(id) {
    setStudent(students.filter((item) => item.id !== id));
  }

  return (
    <div className="containter">
      <Header title="Home" />
      <main>
        <AddFrom students={students} setStudent={setStudent}/>
        <StudentList students={students} deleteStudent={deleteStudent}/>
      </main>
    </div>
  );
}

export default App;
