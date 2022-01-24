import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import StudentCard from "./StudentCard";

export default function SingleStudent() {

  const [students, setStudents] = useState({})

  const { id } = useParams();

  useEffect(() => {
    console.log("fetchiggggggggggggggggg")
    axios.get(`http://localhost:5000/students/${id}`).then(
      (response) => {
        console.log(response)
        setStudents(response.data)
      }
    )
  }, [])

  if (students.length === 0) {
    return <div><h2>No student</h2></div>
  } else {
    console.log(students)
  }
  return (
    <div>
      <h1> Campus</h1>
      <StudentCard
        students={students}
        key={students.id}
      />
    </div>
  );
}; 