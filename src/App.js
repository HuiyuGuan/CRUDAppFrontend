import './App.css';
import { Routes, Route } from "react-router-dom";
import { NavBar, Home } from './components';
import { InputCampuses } from './components/campuses';
import { useEffect, useState } from 'react';
import ListCampuses from './components/campuses/ListCampuses';
import axios from 'axios';
import InputStudents from './components/students/InputStudents';
import CampusCard from './components/campuses/CampusCard';
import StudentCard from './components/students/StudentCard';
import ListStudents from './components/students/ListStudents';
import EditCampuses from './components/campuses/EditCampuses';
import EditStudents from './components/students/EditStudents';
import SingleCampus from './components/campuses/SingleCampus';
import SingleStudent from './components/students/SingleStudent';

function App() {

  const [campuses, setCampuses] = useState([]);
  const [students, setStudents] = useState([]);
  console.log(campuses)
  console.log(students)
  const fetchCampuses = async () => {
    const res = await axios.get("http://localhost:5000/campuses");
    return res.data;
  }

  const addCampusHandler = async (campus) => {
    console.log(campus);
    const req = {
      //id: i
      ...campus,
    };

    const res = await axios.post("http://localhost:5000/campuses", req);
    console.log(res);
    setCampuses([...campuses, res.data]);
  };
  useEffect(() => {
    const getAllCampuses = async () => {
      const allCampuses = await fetchCampuses();
      if (allCampuses) setCampuses(allCampuses);
    };

    getAllCampuses();
  }, []);

  const fetchStudents = async () => {
    const res2 = await axios.get("http://localhost:5000/students");
    return res2.data;
  }

  const addStudentsHandler = async (student) => {
    console.log(student);
    const req2 = {
      //id: i
      ...student,
    };
    const res2 = await axios.post("http://localhost:5000/students", req2);
    console.log(res2);
    setStudents([...students, res2.data]);
  };

  useEffect(() => {
    const getAllStudents = async () => {
      const allStudents = await fetchStudents();
      if (allStudents) setStudents(allStudents);
    };

    getAllStudents();
  }, []);




  return (
    <div className="App">
      <NavBar fixed="top" />
      <header className="App-header"></header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/campuses" element={<ListCampuses campuses={campuses} />} />
        <Route exact path="/campuses/add" element={<InputCampuses campuses={campuses}
          setCampuses={setCampuses}
          addCampusHandler={addCampusHandler}
        />} />
        <Route exact path="/campuses/change" element={<EditCampuses campuses={campuses}
        />} />
        <Route exact path={ `/campuses/:id`} element={<SingleCampus campuses={campuses} />} />
        <Route exact path="/students" element={<ListStudents students={students} />} />
        <Route exact path="/students/add" element={<InputStudents students={students}
          setStudents={setStudents}
          addStudentHandler={addStudentsHandler}
        />} />
        <Route exact path="/students/:id" element={<StudentCard />} />
        <Route exact path="/students/:id" element={<SingleStudent students={students} />} />
        <Route exact path="/students/change" element={<EditStudents students={students}
        />} />
      </Routes>
    </div>
  );
}

export default App;