import { useState } from "react";
import Axios from "axios"

export default function CampusForm(){
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [imageUrl, setImageUrl]= useState("https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png")
    const [address, setAddress ] = useState("")
    const [description, setDescription ] = useState("")
    async function submitHandler(e){
        e.preventDefault()
        await Axios.post(`http://localhost:5000/api/campuses`, {id, name, imageUrl, address, description})
        console.log('did something')
    }

    return (
        <div>
            <h1>Let's add a campus!</h1>
            <form onSubmit={submitHandler}>

                <label>
                    Id:
                    <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} />
                </label>
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    imageUrl: 
                    <input type="text" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </label>

                <label>
                    address:
                    <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </label>

                <label>
                    description:
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}