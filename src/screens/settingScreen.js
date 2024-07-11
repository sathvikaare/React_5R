import React, { useContext } from "react";
import NavBar from "../components/navBar/navbar";
import { ProfileWrapper } from "../Navigations/stack";
import { Btn } from "../components/button";
function SettingScreen(){
    const sharedData=useContext(ProfileWrapper)
    const changeCount=()=>{
        sharedData.changeCounter();
        console.log("counter increment")
    }
    const decrementHandling=()=>{
        sharedData.decrementHandler()
        console.log("counter decremented")
    }
    return(
        <div>
            <NavBar/>
            welcome to Setting Screen ,current Count {sharedData.counter}
            <Btn text={"increment"} onpress={changeCount}/>
            <Btn text={"decrement"} onpress={decrementHandling}/>
        </div>
    )
}
export default SettingScreen;