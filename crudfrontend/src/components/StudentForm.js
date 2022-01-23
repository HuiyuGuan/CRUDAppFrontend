import { useState } from "react";
import Axios from "axios"

export default function StudentForm(){
    const [id, setId] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [imageUrl, setImageUrl]= useState("https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png")
    const [gpa, setGpa ] = useState("")
    async function submitHandler(e){
        e.preventDefault()
        await Axios.post(`http://localhost:5000/api/students/`, {id, firstName, lastName, email, imageUrl, gpa})
        console.log('did something')
    }

    return (
        <div>
            <h1>Let's add a student!</h1>
            <form onSubmit={submitHandler}>

                <label>
                    Id:
                    <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} />
                </label>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    ImageUrl: 
                    <input type="text" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </label>
                <label>
                    Gpa:
                    <input type="text" name="gpa" value={gpa} onChange={(e) => setGpa(e.target.value)} />
                </label>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}