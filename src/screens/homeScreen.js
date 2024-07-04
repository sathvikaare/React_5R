import React from "react";
import {useState} from "react"
import NavBar from "../components/navBar/navbar";
import { Btn } from "../components/button";
import { Link } from "react-router-dom";
import axios from "axios"
import UseEffectExample1 from "../useEffect/use_effect";
import UseEffectExample2 from "../useEffect/use_effect2";
function HomeScreen(){
    return(
        <div>
          <NavBar/>
          <h2>welcome to  Home screen</h2>
          <UseEffectExample2/>
          <UseEffectExample1/>



      
        </div>
    )
}
export default HomeScreen;