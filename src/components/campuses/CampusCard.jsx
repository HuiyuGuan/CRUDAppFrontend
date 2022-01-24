import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";


const CampusCard = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
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


if(isSubmitted){
  setIsSubmitted(false)
  console.log(1)
}


const deleteHandler =() => {
  axios
    .delete(`http://localhost:5000/campuses/${id}`)
    .then((response) => {
      console.log(response.status);
      setIsSubmitted(true)
    
    })
    .catch((e) => console.log('something wrong'))
   
}

console.log(id)

if(isSubmitted){    
  console.log(isSubmitted)
  return  <Navigate to="/campuses" />
}


  return (
    <div className="card-item">

      <div className="card" style={{ margin: 1 + 'em' }} >
      <Link to={`/campuses/${props.campus.id}`}>  
          <img className="card-img-top" src={imageUrl} alt="Card cap"/>
        </Link>
        <div className="card-body">
             <h5>{id} </h5>
            <h5>{name}</h5>
            <h6>{address}</h6>
          <p className="card-text">{description}</p>
          <button  class="btn btn-danger" onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    </div>



  );
};

export default CampusCard;