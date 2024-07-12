import UseEffectExample1 from "../useEffect/use_effect";
import UseEffectExample2 from "../useEffect/use_effect2";
import {useState} from "react"
import { Btn } from "../components/button";
import { Link } from "react-router-dom";
import axios from "axios"
import React, { useContext } from "react";
import NavBar from "../components/navBar/navbar";
import { ProfileWrapper } from "../Navigations/stack";
import Reducerbooking from "../components/useReducer_hook/useReducer_booking";
import UseReducerex2 from "../components/useReducer_hook/useReducerex2";
import loggingComponent from "../components/Hoc_react/LoggingComponent";
import addProfileHoc from "../components/Hoc_react/addProfileHoc";
import EmployeeScreen from "../components/Memorisation/React_Memo";

function HomeScreen(props) {
  const sharedData = useContext(ProfileWrapper);
  console.log(props,"from  home screen")
  console.log(sharedData, "sharedData");

  return (
    <div>
      <NavBar darkTheme={12}/>
      <UseReducerex2 count={10}/>
      <EmployeeScreen/>
      
      {/* <Reducerbooking/> */}
      <h2>Welcome to Home Screen, {sharedData.profileInfo.name}: {sharedData.profileInfo.salary}</h2>
      {/* <UseEffectExample2/>
          <UseEffectExample1/> */}
          <h2>{sharedData.counter}</h2>
          <h2>Good Morning {props.data.name}</h2>
    </div>
  );
}

export default addProfileHoc(HomeScreen);