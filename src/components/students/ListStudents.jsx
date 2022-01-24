import React from "react";
import { Link } from "react-router-dom";
import StudentCard from "./StudentCard";

export default function ListStudents(props) {

    console.log(props);

    const renderStudents = props.students.map((student,id)=> {
        return(
            <StudentCard 
<<<<<<< HEAD
              students= {student}     
=======
            students= {student}    
>>>>>>> 072c6d5e27fda7e3845344da8d26095236e9d23b
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
