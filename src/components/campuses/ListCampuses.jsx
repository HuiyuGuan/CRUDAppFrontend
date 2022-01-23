import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function ListCampuses(props) {

    console.log(props);

    const renderCampuses = props.campuses.map((campus,i)=> {
        return(
            <Card 
               campus= {campus}    
               key={i}      
            />
        )
    });
  
  return(
    <div>
      <h1> CampusList</h1> 
      <Link to={"/add"}>
          <button>Add Campus</button>
      </Link>
       {renderCampuses}      
    </div>
  );
};
