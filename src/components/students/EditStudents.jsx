import React, { Fragment, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const EditStudents = (props) => {
    const [newStudent, setNewStudent] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        imageUrl: "",
        gpa: ""
    });

    const updateStudent = (event) => {
        setNewStudent((prev) => ({
            ...prev, [event.target.name]: event.target.value
        }

        ))
    }
    async function submitHandler(e){
        e.preventDefault()
        await axios.put(`http://localhost:5000/students`, newStudent)
        return (<Navigate to="/students" />)
    }
    return (
        <Fragment>
            <h1 className="text-center mt-5">Input Student Info</h1>
            <form onSubmit={submitHandler} className="mt-5" >
                <input type="textarea"
                    name="id"
                    className="form-control"
                    placeholder='Enter id'
                    value={newStudent.id}
                    onChange={(event) => updateStudent(event)}
                />
                <input type="textarea"
                    name="firstName"
                    className="form-control"
                    placeholder='Enter First Name'
                    value={newStudent.firstName}
                    onChange={(event) => updateStudent(event)}
                />
                <input type="textarea"
                    name="lastName"
                    className="form-control"
                    placeholder='Enter Last Name'
                    value={newStudent.lastName}
                    onChange={(event) => updateStudent(event)}
                />
                <input type="textarea"
                    name="email"
                    className="form-control"
                    value={newStudent.email}
                    placeholder='Enter Email'
                    onChange={(event) => updateStudent(event)}
                />
                <input type="text"
                    name="imageUrl"
                    className="form-control"
                    placeholder='Enter image link'
                    value={newStudent.imageUrl}
                    onChange={(event) => updateStudent(event)}
                />
                <input type="text"
                    name="gpa"
                    className="form-control"
                    placeholder='Enter gpa'
                    value={newStudent.gpa}
                    onChange={(event) => updateStudent(event)}
                />



                <button className="btn btn-primary">Add</button>
            </form>
        </Fragment>

    )
};
export default EditStudents;