import React from "react";
const multiOptdata = [
    {
        multi : "Masters",
        label: "Degree Level",
        dropdownItem : ["Action","Another action","something else here","separated link"]

    },
    {
        multi : "Choose from list",
        label : "Or choose from the list (at most 3)",
        dropdownItem : ["Computer Science","Data Science","MBA"]

    },
    {
        multi: "2024",
        label:"Year",
        dropdownItem : [2024,2025,2026,2027]
    },
    {
        multi: "Choose from list",
        label:"List of Countries",
        dropdownItem : ["United Kingdom","Germany","Canada"]
    },

]
const MultiOpt = ({label,multi,dropdownItem})=>{
    return(
        <>
        
        <label for="exampleInputEmail1" 
        className="form-label mb-2 label-style ">{label}</label>
        <div className="dropdown-button">
        <div className="input-group mb-3">
        <button 
        style={{width:"500px",height:"47px",textAlign:"left",
        backgroundColor:"transparent",color:"black",borderColor:"#CBD1D8"}}
         className="btn btn-outline-secondary dropdown-toggle d-toggle" 
         type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {multi}
        </button>
        <ul className="dropdown-menu">
        {
            dropdownItem.map((e)=>{
                return(
                    <li><a className="dropdown-item" href="#">{e}</a></li>
                )
            })
        }
          
        </ul>
          </div>
      </div>
        </>
    )
}

export default MultiOpt;
export {multiOptdata};