import React,{useState} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";


const ContactCard = ({props}) => {

  const info = props[0]
  const showAll = props[1]

  console.log(info)
  console.log(showAll)
  
  function CardLessInfo(){
    return (
    <div>
      <img src={info.imageUrl } /> 
          <p>{info.name}</p>
          <p>{info.address }</p>
          <Link to={'/campuses/'+ info.id} >
                      view
          </Link>        
    </div>)
  }


  
  function CardWithInfo(){
    return (
    <div>
      <img src={info.imgageUrl } /> 
          <p>{info.name}</p>
          <p>{info.address }</p>
          <p>{info.description }</p>
          <Link to={'/campuses/'+ info.id} >
                      view
          </Link>        
    </div>)
  }

  const handleDeleteClick =() =>{
    // Axios.delete("http://localhost:5000/campuses", {params: {id: info.id}})
    Axios.delete("http://localhost:5000/campuses", {data: {info : info.id}})
    .then(reponse => {
      console.log(reponse);
    })
  }
  
  
  return (
    <div className="card-item">
      
          { !(showAll.info) ? <CardLessInfo /> : <CardWithInfo />} 

          <button onClick={handleDeleteClick}>Delete</button>
    </div>

    
    
  );
};

export default ContactCard;