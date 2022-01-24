import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CampusCard from "./CampusCard";
import axios from "axios";
import StudentCard from "../students/StudentCard";

export default function ListCampuses(props) {

    const [campus,setCampus] = useState({})
    const [campusStudents, setCampusStudents] = useState([])

    const {id} = useParams();

    useEffect(() => {
            axios.get(`http://localhost:5000/campuses/${id}`).then(
            (response) =>{
            setCampus(response.data)
            }
        )

        axios.get(`http://localhost:5000/campuses/${id}/students`).then(
          (response) =>{
            setCampusStudents(response.data)
            console.log(response.data)
          }
      )

      }, []);

      const renderStudents = campusStudents.map((student,id)=> {
        return(
            <StudentCard 
            students= {student}    
               key={id}      
            />
        )
      })

  return(
    <div>
      <h1> Campus</h1> 
      <CampusCard
               campus= {campus}    
               key={campus.id}      
            />     
      <h1> Students</h1>
      {renderStudents}
    </div>
  );
}; 