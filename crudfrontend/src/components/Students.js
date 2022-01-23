import React from "react"
import {useState, useEffect} from "react";
import axios from "axios";
import Student from "./Student";

export default function Students(){
    const [students, setStudents] = useState([])

    useEffect(() => {
        async function fetchData(){
            const allStudents = await axios.get(`http://localhost:5000/students/`)
            console.log("this", allStudents)
            setStudents((allStudents.data))
        }
        fetchData()
    },[])
    return (
        <div>
            {
                students && students.map(student=><Student key = {student.id} props = {student}/>)
            }
        </div>
    )

}