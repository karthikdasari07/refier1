import React from "react"

export default function Card(props) {
    return (
        <div className="card">
                <h2>{props.title}</h2>          
                <span>{props.subt}</span><br></br>
                <span>{props.jobt}</span><br></br>
                <span className="gray">{props.location}</span>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}