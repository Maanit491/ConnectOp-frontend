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

const Sign = ()=>{
    
    return(
        <>
        <div style={{marginBottom:"2rem",marginTop:"-1.3rem"}}>
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
      <div className="row sign-inner-row-1">
      <h1 className="unlock">Unlocking Your</h1>
      <h1 className="global">Global Potential</h1>
      <p>Sign up for <span>Studying Abroad Success</span> today!</p>
      </div>
      <div className="row sign-inner-row-2">
      <img src="./Images/Searching - Looking.png"/>
      </div>
        
     
        </div>
            <div className="col-lg-5 col-md-5 me-5 col-12 order-2 order-lg-2
            sign-column2 flex-column mb-5" style={{marginTop:"1rem"}}>
            
            <div className="sign-buttons">
          <button className="sign-button-1">SIGN UP</button>
          <NavLink exact to = "/login"><button className="sign-button-2">LOG IN</button></NavLink>
          </div>
          <div className="sign-p">
          <p className="mt-2">Welcome, We are glad to see you!</p>
          </div>
          <div className="sign-mobile">
        <MobileNumber/>
          <NavLink exact to="/enterotpsign"><button className="send-otp mb-3">SEND OTP ON PHONE NUMBER</button>
          </NavLink>
          <button className="send-otp">SEND OTP ON EMAIL</button>
          <br></br><br></br>
          <p className="send-p">Sign Up with Email instead</p>
          </div>
        <div className="check-p">
          <p className="check-p-1"><input type="checkbox" className="check-sign"/> By signing up, you are creating a CONNECTOP account, and you agree to CONNECTOP’s <a href="#">Term of Use</a> and <a href="#">Privacy Policy.</a></p>
          <p><input type="checkbox" className="check-sign"/> Remember Me as <a href="#">Member</a> of <a href="#">CONNECTOP Community.</a></p>
          <p className="alread-send">Already a part of  CONNECTOP Community? <NavLink exact to="/login"><a>LOGIN </a></NavLink>here</p>
          </div>
          <button className="send-otp" style={{backgroundColor:"#AEC9EF"}}>Verify OTP and Submit</button>
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

export default Sign;
