import React from "react";
import { Link } from "react-router-dom";
import CmpusCard from "./CampusCard";

export default function ListCampuses(props) {
  const renderCampuses = props.campuses.map((campus, id) => {
    return (
      <CmpusCard
        campus={campus}
        key={id}
      />
    )
  });
  if (props.campuses.length === 0) {
    return (
      <div>
        <h1> CampusList</h1>
        <Link to={"/campuses/add"}>
          <button>Add Campus</button>
        </Link>
        <Link to={"/campuses/change"}>
          <button>Edit Campus</button>
        </Link>
        <div><h2>No Campus</h2></div>
        {renderCampuses}
      </div>
    )
  } else {
    return (
      <div>
        <h1> CampusList</h1>
        <Link to={"/campuses/add"}>
          <button>Add Campus</button>
        </Link>
        <Link to={"/campuses/change"}>
          <button>Edit Campus</button>
        </Link>
        {renderCampuses}
      </div>
    )
  }
};
