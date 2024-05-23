import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signupPagee/signup"

import EnterOtpSign from "./components/signupPagee/EnterOtpSign";

import LandingPage from "./components/LandingPage/landingpage";
import Login from "./components/LoginPage/login";
import Home from "./components/Home/home";
import BookMentor from "./components/Home/BookMentor";
import Navhome from "./components/Home/Navhome";
import Filter from "./components/Home/Filter";
import HomePage1 from "./components/Home/HomePage1";
import ApplicantParentSign from "./components/signupPagee/ApplicantParentSign";
import ApplicantParentSign2 from "./components/signupPagee/ApplicantParentSign2";
import ApplicantParentSign3 from "./components/signupPagee/ApplicantParentSign3";
import ApplicantParentSign4 from "./components/signupPagee/ApplicantParentSign4";
import ApplicantParentSign5 from "./components/signupPagee/ApplicantParentSign5";
import Loginpage from "./components/LoginPage/Loginpage";
import Loginpage2 from "./components/LoginPage/LoginPage2";
import Navbar from "./components/LandingPage/Navbar";
import './App.css'
import Mentee from "./components/Mentor/Mentee";
import MyQualification from "./components/CompleteProfile/MyQualification";
import Mentor from "./components/Mentor/mentor";
import Myqua from "./components/CompleteProfile/myqua";
import MentorProfile from "./components/MentorProfile/MentorProfile";
import YourProfile from "./components/YourProfile/YourProfile";
import HomeMentor from "./components/MentorPage/Homementor/HomeMentor";
import MentorBookpage from "./components/MentorPage/MentorBookpage/MentorBookpage";
import FilterMentor from "./components/MentorPage/MentorBookpage/FilterMentor";
import YourSession from "./components/MentorPage/YourSessionsMentor/YourSessionMentor";
import YourSessionMentor from "./components/MentorPage/YourSessionsMentor/YourSessionMentor";
import YourAnalytics from "./components/MentorPage/YourAnalytics/YourAnalytics";
import ChatApplication from "./components/Mentor/ChatApplication";
import LandingMob from "./components/MobileLanding/LandingMob";
import MentorMentee from "./components/MobileMentorMentee/MobMentorMentee";
import MobMentorMentee from "./components/MobileMentorMentee/MobMentorMentee";
import MobSign from "./components/MobSignUp/MobSign";
import MobBec from "./components/MobBec/MobBec";
import MobJoin from "./components/MobJoin/MobJoin";
import MobSign1 from "./components/MobSignUp/MobSign1";
import MobSign2 from "./components/MobSignUp/MobSign2";
import MobSign3 from "./components/MobSignUp/MobSign3";
import MobSign4 from "./components/MobSignUp/MobSign4";
import MobSign5 from "./components/MobSignUp/MobSign5";


function App() {
  return (
    <>
      <span className="hero-grad"> <img src="./Images/Group 62.png" style={{ width: "650px", height: "700px", position: "absolute", top: "-1rem", left: "790px", zIndex: -1 }} /></span>

      <Routes>


        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/mentor" element={<Mentor />} />
        <Route exact path="/enterotpsign" element={<EnterOtpSign />} />
        <Route exact path="/applicantparent" element={<ApplicantParentSign />} />
        <Route exact path="/applicantParentSign2" element={<ApplicantParentSign2 />} />

        <Route exact path="/applicantparent3" element={<ApplicantParentSign3 />} />
        <Route exact path="/applicantparent4" element={<ApplicantParentSign4 />} />
        <Route exact path="/applicantparent5" element={<ApplicantParentSign5 />} />


        <Route exact path="/loginpage2" element={<Loginpage2 />} />

        <Route exact path="/hero" element={<LandingPage />} />
        <Route exact path="/HomePage1" element={<Home />} />
        <Route exact path="/bookmentor" element={<BookMentor />} />
        <Route exact path="/filter" element={<Filter />} />
        <Route exact path="/myqualification" element={<Myqua />} />
        <Route exact path="/Mentorprofile" element={<MentorProfile />} />
        <Route exact path="/yourprofile" element={<YourProfile />} />
        <Route exact path="/chat" element={<ChatApplication />} />
        <Route exact path="/homementor" element={<HomeMentor />} />
        <Route exact path="/mentorbookpage" element={<MentorBookpage />} />
        <Route exact path="/filtermentor" element={<FilterMentor />} />
        <Route exact path="/yoursessionmentor" element={<YourSessionMentor />} />
        <Route exact path="/youranalytics" element={<YourAnalytics />} />

        <Route exact path="*" element={<div><h1>Error page</h1></div>} />


        {/*Application routing start*/}
        <Route exact path="/mobLand" element={<LandingMob />} />
        <Route exact path="/mobmentormentee" element={<MobMentorMentee />} />
        <Route exact path="/mobsign" element = {<MobSign/>}/>
        <Route exact path="/mobBac" element = {<MobBec/>}/>
        <Route exact path = "/mobjoin" element = {<MobJoin/>}/>
        <Route exact path = "/mobsign1" element = {<MobSign1/>}/>
        <Route exact path = "/mobsign2" element = {<MobSign2/>}/>
        <Route exact path = "/mobsign3" element = {<MobSign3/>}/>
        <Route exact path = "/mobsign4" element = {<MobSign4/>}/>
        <Route exact path = "/mobsign5" element = {<MobSign5/>}/>
        {/*Application rounting end*/}




      </Routes>

    </>
  );
}

export default App;
