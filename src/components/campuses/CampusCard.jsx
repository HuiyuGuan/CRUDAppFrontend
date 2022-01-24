import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


const CampusCard = (props) => {
  const [campusesInfo, setCampusInfo] = useState([])
  const { id, name, imageUrl, address, description } = props.campus;

  useEffect(() => {
      const getId = window.location.href.split("/");
      const id  = getId[getId.length -1]

      async function fectchData(){
      const campusInfo = await axios.get(`http://localhost:5000/campuses/${id}`)
      setCampusInfo(campusInfo.data)
      }
      fectchData()
      
},[]);
  return (
    <div className="card-item">

      <div className="card" style={{ margin: 1 + 'em' }} >
<<<<<<< HEAD
        <Link to={`/campuses/${props.campus.id}`}>  
=======
      <Link to={`/campuses/${props.campus.id}`}>  
>>>>>>> 072c6d5e27fda7e3845344da8d26095236e9d23b
          <img className="card-img-top" src={imageUrl} alt="Card cap"/>
        </Link>
        <div className="card-body">
          <h5>{id} {name}</h5>
          <h6>{address}</h6>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>



  );
};

export default CampusCard;