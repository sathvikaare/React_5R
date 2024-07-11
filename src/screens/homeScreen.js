import UseEffectExample1 from "../useEffect/use_effect";
import UseEffectExample2 from "../useEffect/use_effect2";
import {useState} from "react"
import { Btn } from "../components/button";
import { Link } from "react-router-dom";
import axios from "axios"
import React, { useContext } from "react";
import NavBar from "../components/navBar/navbar";
import { ProfileWrapper } from "../Navigations/stack";

function HomeScreen() {
  const sharedData = useContext(ProfileWrapper);
  console.log(sharedData, "sharedData");

  return (
    <div>
      <NavBar />
      <h2>Welcome to Home Screen, {sharedData.profileInfo.name}: {sharedData.profileInfo.salary}</h2>
      {/* <UseEffectExample2/>
          <UseEffectExample1/> */}
          <h2>{sharedData.counter}</h2>
    </div>
  );
}

export default HomeScreen;