import React, { useContext } from "react";
import NavBar from "../components/navBar/navbar";
import { Link, Outlet } from "react-router-dom";
import { ProfileWrapper } from "../Navigations/stack";
function ContactScreen(){
    const profileInfo=useContext(ProfileWrapper);
    console.log(profileInfo,"hhh")
    const changeName=()=>{
        profileInfo.changeName("hari");
    }
    return(
        <div>
            <NavBar/>
           <h2>welcome to Contact Screen {profileInfo.profileInfo.name}: {profileInfo.profileInfo.salary}</h2>
           <button onClick={changeName}>change name</button>
           <Link to={"doctors"}>Doctors</Link>
           <Link to={"engineers"}>Engineers</Link>
           <Outlet/>
        </div>
    );
}
export default ContactScreen;