import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CampusCard from "./CampusCard";
import axios from "axios";

export default function ListCampuses(props) {

  const [campus, setCampus] = useState({})

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/campuses/${id}`).then(
      (response) => {
        setCampus(response.data)
      }
    )
  }, []);

  if (campus.length === 0) {
    return <div><h2>No Campus</h2></div>
  } else {
    console.log(campus)
  }
  return (
    <div>
      <h1> Campus</h1>
      <CampusCard
        campus={campus}
        key={campus.id}
      />
    </div>
  );
}; 