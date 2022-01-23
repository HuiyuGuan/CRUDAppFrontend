import React, {useState }from "react";
import { Fragment } from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";



export default function AddCampus() {

    const [redirect, setRedirect] =useState(false);
    const [newCampus, setNewCampus] = useState({
        name:"",
        address:"",
        img:"",
        description:"",
    });

   console.log(newCampus.id)

    const updateCampus = (event) => {
        setNewCampus((prev) => ({
            ...prev, [event.target.name]: event.target.value
        }))

        
   }

    async function submitHandler(e){
        e.preventDefault()
        await Axios.post(`http://localhost:5000/campuses`, newCampus)
        setRedirect(true)
    }

     if(redirect === true){
            
        return (<Navigate to="/campuses" />

        )
    }


  return(
           
           <Fragment>
            <h1 className="text-center mt-5">Input Campus Info</h1>
            <form onSubmit={submitHandler} className="mt-5" >    
                <input type ="textarea" 
                    name="name"
                    className="form-control" 
                    placeholder='Enter Name'
                    value={newCampus.name}
                    onChange={(event) => updateCampus(event)}
                />
                 
                <input type ="text"
                    name="address"
                    className="form-control" 
                    value={newCampus.address}
                    placeholder='Enter Address'
                    onChange={(event) => updateCampus(event)}
                />
                <input type ="text"
                    name="img"
                    className="form-control" 
                    placeholder='Enter image link'
                    value={newCampus.img}
                    onChange={(event) =>  updateCampus(event)}
                />
                <input type ="text"
                    name="description"
                    className="form-control" 
                    placeholder='Enter description'
                    value={newCampus.description}
                     onChange={(event) =>  updateCampus(event)}
                />                              

                <button className="btn btn-primary">Add</button>
            </form>
        </Fragment>
      );
}
