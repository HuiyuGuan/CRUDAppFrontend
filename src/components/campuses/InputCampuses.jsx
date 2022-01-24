import React, { Fragment, useState } from "react";
import { Navigate } from "react-router-dom";


const InputCampuses = (props) => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [newCampus, setNewCampus] = useState({
        id: "",
        name: "",
        imageUrl: "",
        address: "",
        description: ""
    })

    const handleChange2 = (event) => {
        event.preventDefault();
        props.addCampusHandler(newCampus)

        setIsSubmitted(true)
    }

    const updateCampus = (event) => {
        setNewCampus((prev) => ({
            ...prev, [event.target.name]: event.target.value
        }

        ))
    }

    if(isSubmitted) {
        setIsSubmitted(false)
        return <Navigate to="/campuses" />
        
    }

    

    return (
        <Fragment>
            <h1 className="text-center mt-5">Input Campus Info</h1>
            <form onSubmit={handleChange2} className="mt-5" >
                <input type="int"
                    name="id"
                    className="form-control"
                    placeholder='Enter id'
                    value={newCampus.id}               
                    onChange={(event) => updateCampus(event)}
                />
                <input type="textarea"
                    name="name"
                    className="form-control"
                    placeholder='Enter Name'
                    value={newCampus.name}                 
                    onChange={(event) => updateCampus(event)}
                />
                <input type="text"
                    name="imageUrl"
                    className="form-control"
                    placeholder='Enter image link'
                    value={newCampus.imageUrl}    
                    onChange={(event) => updateCampus(event)}
                />
                <input type="text"
                    name="address"
                    className="form-control"
                    value={newCampus.address}
                    placeholder='Enter Address'              
                    onChange={(event) => updateCampus(event)}
                />
                <input type="text"
                    name="description"
                    className="form-control"
                    placeholder='Enter description'
                    value={newCampus.description}
                    onChange={(event) => updateCampus(event)}
                />
               

                <button className="btn btn-primary">Add</button>
            </form>
        </Fragment>

    )
};

export default InputCampuses;
