import React from "react"
import {useState, useEffect} from "react";
import Axios from "axios";
import Campus from "./Campus";

export default function Campuses(){
    const [campuses, setCampuses] = useState([])

    useEffect(() => {
        async function fetchData(){
            const allCampuses = await Axios.get(`http://localhost:5000/campuses`)
            console.log("this", allCampuses)
            setCampuses((allCampuses.data))
        }
        fetchData()
    },[])

    return (
        <div>
            {
                campuses && campuses.map(campus=><Campus key = {campus.id} props = {campus}/>)
            }
        </div>
    )

}