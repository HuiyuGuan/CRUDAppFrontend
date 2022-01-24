import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState} from "react";
import { Navigate } from "react-router-dom";

const CampusCard = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {id, name, imageUrl, address, description } = props.campus || [];

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
          <h5>{id} {name}</h5>
          <h6>{address}</h6>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>

    
    
  );
};

export default CampusCard;