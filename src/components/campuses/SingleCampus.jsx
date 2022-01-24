import Axios from "axios"
import React, { useEffect, useState } from "react";

export default function SingleCampus() {

    const [campusesInfo, setCampusInfo] = useState([])
    const [isDelete, setIsDelete] = useState(false)

    useEffect(() => {
        const getId = window.location.href.split("/");
        const id  = getId[getId.length -1]

        async function fectchData(){
        const campusInfo = await Axios.get(`http://localhost:5000/campuses/${id}`)
        console.log( campusInfo)
        setCampusInfo(campusInfo.data)
        alert("help")
        }
        fectchData()
        
  },[]);

  function handleOnClick(){

   
  Axios.delete(`http://localhost:5000/campuses/${campusesInfo.id}`)
        .then(response =>{
          console.log(response)} )
       
        .catch(error => {
          setIsDelete(false)
            console.error('There was an error!', error);
        })
        window.location.replace('/campuses')

  }


  return (
        <div>
            Hello
        <img  src={campusesInfo.imageUrl} />
        <p> {campusesInfo.name}</p>
        <p> {campusesInfo.address}</p>
        <p> {campusesInfo.description}</p>
        <button onClick={()=> handleOnClick()}>
          Delete
        </button>
        </div>
    );
}
