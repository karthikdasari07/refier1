import React from "react"


export default function Card1() {
    return (
        <div className="card1">
                <h3 class="filters">Filters</h3><br></br>
                <h3 for="category">Category</h3>
                <form action="#" class="form1">
                <select name="options" class="opt">
                <option value="sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Leadership">Leadership</option>
                <option value="Production">Production</option>
                <option value="Operations">Operations</option>
                <option value="Tech">ech</option>
                </select>
                </form>
                <h3 class="Loc">Location</h3>
                <form action="#" class="form2">
                <select name="options" class="opt1">
                <option value="Mumbai" >Mumbai</option>
                <option value="Chennai">Chennai</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Delhi">Delhi</option>
                <option value="Meerut">Meerut</option>
                <option value="Patiala">Patiala</option>
                </select>
                </form><br></br>
                <label class="switch">
                <input type="checkbox"></input>
                <span class="slider round"></span>
                </label>
                <h3 class="wfh">Work from Home</h3><br></br>
                <label class="switch">
                <input type="checkbox"></input>
                <span class="slider round"></span>
                </label>
                <h3 class="oi">Only Internships</h3><br></br>
                <div class="slidecontainer">
                <input type="range" min="1" max="100" value="50" class="slider1" id="myRange"></input>
                </div>
        

        </div>
    )
}
