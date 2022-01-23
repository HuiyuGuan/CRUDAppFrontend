import React, {Fragment, useState} from "react";
// import api from '../src/api/campuses';
import campuses from "../../api/campuses";
import { Navigate } from "react-router-dom";




const InputCampuses = (props) => {

    const [newCampus, setNewCampus] = useState({
        name:"",
        address:"",
        img:"",
        description:""
    });

//    const handleChange = (event) => {
//        event.preventDefault();
      

//        const fieldName = event.target.getAttribute('name');
//        const fieldValue = event.target.value;
//        console.log(fieldValue)

//        const newInfo = {...newCampus};
//        newInfo[fieldName] = fieldValue;

//        setNewCampus(newInfo);
//    }

   const handleChange2 = (event) => {
       event.preventDefault();
       props.addCampusHandler(newCampus)
        
       return <Navigate to="/campuses" />
   }

   const updateCampus = (event) => {
        setNewCampus((prev) => ({
            ...prev, [event.target.name]: event.target.value
        }

        ))
   }
//    const handleSubmit =(event) => {
//        event.preventDefault();
//        const updateCamp = {
//            name: newCampus.name,
//            address: newCampus.address,
//            img: newCampus.img,
//            description: newCampus.description
//        };
//       //need to put current database in '' 
//        //some insert function to db
//        props.setCampuses(updateCamp)


//    }
    

    return (
        <Fragment>
            <h1 className="text-center mt-5">Input Campus Info</h1>
            {/* <form onSubmit={handleSubmit} className="mt-5" > */}
            <form onSubmit={handleChange2} className="mt-5" >    
                <input type ="textarea" 
                    name="name"
                    className="form-control" 
                    placeholder='Enter Name'
                    value={newCampus.name}
                    // onChange={handleChange}
                    onChange={(event) => updateCampus(event)}
                />
                 
                <input type ="text"
                    name="address"
                    className="form-control" 
                    value={newCampus.address}
                    placeholder='Enter Address'
                    // onChange={handleChange}
                    onChange={(event) => updateCampus(event)}
                />
                <input type ="text"
                    name="img"
                    className="form-control" 
                    placeholder='Enter image link'
                    value={newCampus.img}
                    // onChange={handleChange}
                    onChange={(event) =>  updateCampus(event)}
                />
                <input type ="text"
                    name="description"
                    className="form-control" 
                    placeholder='Enter description'
                    value={newCampus.description}
                     // onChange={handleChange}
                     onChange={(event) =>  updateCampus(event)}
                />
                 
  
                

                <button className="btn btn-primary">Add</button>
            </form>
        </Fragment>
        
        )
};

export default InputCampuses;