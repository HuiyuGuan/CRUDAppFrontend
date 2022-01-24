import React, { Fragment, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const EditCampuses = (props) => {
    const [newCampus, setNewCampus] = useState({
        id: "",
        name: "",
        imageUrl: "",
        address: "",
        description: ""
    });

    const updateCampus = (event) => {
        setNewCampus((prev) => ({
            ...prev, [event.target.name]: event.target.value
        }

        ))
    }
    async function submitHandler(e){
        e.preventDefault()
        await axios.put(`http://localhost:5000/campuses`, newCampus)
        return (<Navigate to="/campuses" />)
    }
    return (
        <Fragment>
            <h1 className="text-center mt-5">Edit Campus Info</h1>
            <form onSubmit={submitHandler} className="mt-5" >
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
                    <button className="btn btn-primary">Change</button>
            </form>
        </Fragment>

    )
    }
export default EditCampuses;