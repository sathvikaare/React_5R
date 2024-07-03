import React from "react";
import NavBar from "../components/navBar/navbar";
import { Link, Outlet } from "react-router-dom";
function ContactScreen(){
    return(
        <div>
            <NavBar/>
           <h2>welcome to Contact Screen</h2>
           <Link to={"doctors"}>Doctors</Link>
           <Link to={"engineers"}>Engineers</Link>
           <Outlet/>
        </div>
    );
}
export default ContactScreen;