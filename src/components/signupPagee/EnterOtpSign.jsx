import React from "react";
import ButtonChoose, { buttData } from "./ButtonChoose";
import MultiOpt, { multiOptdata } from "./MutltiOpt";
import BackContButt, { dataBackCont } from "./BackContButt";
import ChooseContent, { chooseData } from "./ChooseContent";
import SignLoginButt, { signlogdata } from "./SignLoginButt";
import SignColumn1 from "./Applicant";
import Applicant from "./Applicant";
import Appjourneyformcheck, { appformcheckdata } from "./Appjourneyformcheck";
import Enterinput, { inputdata } from "./Enterinput";
import MobileNumber from "./MobileNumber";
import CheckData from "./CheckData";
import Navhome from "../Home/Navhome";
import { NavLink } from "react-router-dom";
import Navbar from "../LandingPage/Navbar";

const EnterOtpSign = ()=>{
    
    return(
        <>
        <div style={{marginBottom:"2rem",marginTop:"-2rem"}}>
        <Navbar/>
        </div>
        <br></br>
        <section className="Sign_main d-flex align-items-left overflow-x-hidden">
        <div className="container-fluid">
<div className="row">
    <div className="col-lg-10 mx-auto">

        <div className="container">
        <div className="row row-sign-1"> 

        <div className="col-lg-6 col-md-5 me-5 order-1 order-lg-1 sign-column1">
      <div className="row sign-inner-row-1" style={{marginTop:"-6rem"}}>
      <h1 className="unlock">Unlocking Your</h1>
      <h1 className="global">Global Potential</h1>
      <p>Sign up for <span>Studying Abroad Success</span> today!</p>
      </div>
      <div className="row sign-inner-row-2">
      <img src="./Images/Searching - Looking.png"/>
      </div>
        
     
        </div>
            <div className="col-lg-5 col-md-5 me-5  col-12 order-2 order-lg-2
            sign-column2 flex-column mb-5" style={{marginTop:"1rem"}}>
            
            <div className="sign-buttons">
          <button className="sign-button-1">SIGN UP</button>
          <button className="sign-button-2">LOG IN</button>
          </div>
          <div className="sign-p">
          <p className="mt-2">Welcome, We are glad to see you!</p>
          </div>
          <div className="sign-mobile">
          <label for="exampleInputMobile" className="form-label">Mobile Number</label>
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
          <input type="text" className="form-control" aria-label="Text input with dropdown button" value="+91 7989899"/>
        </div>
        </div>



        
          <button className="second-send-otp mb-3">SEND OTP</button>
          <p className="send-p">Resend OTP</p>
        
          <br></br>
          <Enterinput
          labelName = {inputdata[0].labelName}
          type = {inputdata[0]}
          />
          </div>
          <p className="send-p mt-4 mb-4">Sign Up with Email instead</p>
        <div className="check-p">
          <p className="check-p-1"><input type="checkbox" className="check-sign"/> By signing up, you are creating a CONNECTOP account, and you agree to CONNECTOP’s <a href="#">Term of Use</a> and <a href="#">Privacy Policy.</a></p>
          <p><input type="checkbox" className="check-sign"/> Remember Me as <a href="#">Member</a> of <a href="#">CONNECTOP Community.</a></p>
         </div>
          <NavLink exact to="/applicantparent"><button className="send-otp mt-3 mb-3" style={{background: "#3568FF"}}>Verify OTP and Submit</button>
          </NavLink>
           <div className="check-p">
          <p className="alread-send">Already a part of  CONNECTOP Community? <NavLink exact to="/login"><a>LOGIN </a></NavLink>here</p>
          </div>
          </div>
           
        </div>
        </div>
                </div>
</div>
</div>
        </section>













        </>
    )
}

export default EnterOtpSign;
