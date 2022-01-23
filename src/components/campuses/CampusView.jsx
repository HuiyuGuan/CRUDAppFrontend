import React, { useEffect, useState } from "react";
import Axios from "axios"
import Card from "./Card";
import { Link } from 'react-router-dom'

export default function CampusView(props) {
    const [campuses, setCampuses] =useState([])
    
    useEffect(() => {
        async function fetchData(){
            const allCampuses = await Axios.get('http://localhost:5000/campuses')
            console.log(allCampuses)
            setCampuses(allCampuses.data)
        }
        fetchData()
    },[]);

    return (
        <div>
             <h1> CampusList</h1> 
             <Link to={"/addcampus"}>
                <button>Add Campus</button>
             </Link>

          { campuses.length !== 0 ?  campuses.map(campus => <Card key={campus.id} props={[campus,false]} />) :
          <h2> No Campuses </h2>}

        </div>);
}
