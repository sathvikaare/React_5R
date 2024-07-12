import React, { useContext } from "react";
import NavBar from "../components/navBar/navbar";
import { ProfileWrapper } from "../Navigations/stack";
import { Btn } from "../components/button";
import addProfileHoc from "../components/Hoc_react/addProfileHoc";
function SettingScreen(props){
    const sharedData=useContext(ProfileWrapper)
    console.log(props,"from settings screen")
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
            <h2>I'm {props.data.name} placed in cognizant with {props.data.salary}</h2>
        </div>
    )
}
export default addProfileHoc(SettingScreen);