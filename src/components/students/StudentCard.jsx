import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";



const StudentCard = (props) => {
  const {id, firstName, lastName, email, imageUrl, gpa } = props.students;
  const [studentInfo, setStudentInfo] = useState([])

  useEffect(() => {
      const getId = window.location.href.split("/");
      const id  = getId[getId.length -1]

      async function fectchData(){
      const studentInfo = await axios.get(`http://localhost:5000/students/${id}`)
      setStudentInfo(studentInfo.data)
      }
      fectchData()
      
},[]);
  return (
    <div className="card-item">

      <div className="card" style={{margin:1 + 'em'}} >
<<<<<<< HEAD
        <Link to={`/students/${props.students.id}`}>  
=======
      <Link to={`/students/${props.students.id}`}>  
>>>>>>> 072c6d5e27fda7e3845344da8d26095236e9d23b
            <img className="card-img-top" src={imageUrl} alt="Card cap" />
            </Link>
            <div className="card-body">
            <h5>{id} {firstName} {lastName}</h5>
            <h5>Email: {email}</h5>
            <h6>GPA: {gpa}</h6>
        </div>
      </div>
    </div>

    
    
  );
};

export default StudentCard;