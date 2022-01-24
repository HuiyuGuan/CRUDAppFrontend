import React from "react";
import { Link } from "react-router-dom";
import StudentCard from "./StudentCard";

export default function ListStudents(props) {

    console.log(props);

    const renderStudents = props.students.map((student,id)=> {
        return(
            <StudentCard 
            students= {student}    
               key={id}      
            />
        )
    });
  
  return(
    <div>
      <h1> StudentList</h1> 
      <Link to={"/students/add"}>
          <button>Add Student</button>
      </Link>
      <Link to={"/students/change"}>
          <button>Edit Student</button>
      </Link>
       {renderStudents}      
    </div>
  );
};
