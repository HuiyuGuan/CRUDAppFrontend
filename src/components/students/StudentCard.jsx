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

const deleteHandler =() => {
  axios
    .delete(`http://localhost:5000/students/${id}`)
    .then((response) => {
      console.log(response.status);
    
    })
    .catch((e) => console.log('something wrong'))
   
}

  return (
    <div className="card-item">
      <div className="card" style={{margin:1 + 'em'}} >
      <Link to={`/students/${props.students.id}`}>  
            <img className="card-img-top" src={imageUrl} alt="Card cap" />
            </Link>    
            <div className="card-body">
            <h5>{id} {firstName} {lastName}</h5>
            <h5>Email: {email}</h5>
            <button  className="btn btn-danger" onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    </div>

    
    
  );
};

export default StudentCard;