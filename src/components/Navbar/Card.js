import React from "react"


export default function Card(props) {
    return (
        <div className="card">
                <h4>{props.title}</h4><br></br>
                <span class="subt1">{props.subt}</span><br></br>
                <hr></hr><br></br>
                <span class="jobt1">{props.jobt}</span> 
                <span class="jobe1">{props.jobe}</span><br></br>
                <p class="desc1">{props.desc}</p><br></br>
                <span class="location1">{props.location}</span>
                <span class="type">{props.type}</span>
                <button class="btn">Apply Now</button>
        </div>
    )
}
