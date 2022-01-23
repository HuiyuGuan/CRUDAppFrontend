import React from "react";

export default function Student({props}){
    return (
        <ul style={{backgroundColor: 'aquamarine', width: '100px', padding : '10px', marginLeft: '10px'}}>
            <li>{props.id}</li>
            <li>{props.name}</li>
            <li>{props.gpa}</li>
        </ul>
    )
}