import React from "react"


export default function Card2(props) {
    return (
        <div className="card2">
                <h3 class="conf">Confused?</h3>
                <h3 class="wch">We can help you</h3>
                <hr></hr>
                <div class="container">
                <h3 class="fname"><b>Full Name</b></h3>
                <input type="text" placeholder="Fullname" class="fname1" required></input><br></br>
                <br></br>
                <label class="email1"><b>Email</b></label><br></br>
                <input type="text" placeholder="Email" class="email" required></input><br></br>
                <br></br>
                <label class="phn1"><b>Mobile Number</b></label><br></br>
                <input type="number" placeholder="+91" class="phn" required></input><br></br>
                <br></br>
                <button class="submit">Submit</button>
                <label>
                
    </label>
  </div>
        </div>
    )
}