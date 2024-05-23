import React from "react";
const MobileNumber = ()=>{
    return(
        <>
        <p>Mobile Number</p>
        <div className="dropdown-button">
         <div className="input-group mb-3">
         <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           <img src="./Images/india.png"/>
         </button>
         <ul className="dropdown-menu">
           <li><a className="dropdown-item" href="#">Action</a></li>
           <li><a className="dropdown-item" href="#">Another action</a></li>
           <li><a className="dropdown-item" href="#">Something else here</a></li>
           <li><hr className="dropdown-divider" /></li>
           <li><a className="dropdown-item" href="#">Separated link</a></li>
         </ul>
         <input required type="text" className="form-control" aria-label="Text input with dropdown button" value="+91"/>
       </div>
       </div>
        </>
    )
}

export default MobileNumber;